'use strict';
require('dotenv').load();

// Retreive Twilio Credentials
if (process.env.VCAP_SERVICES) {
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var local_creds = env['user-provided'][0].credentials;
    var accountSid = local_creds.twilio_account_sid;
    var apiKey = local_creds.twilio_api_key;
    var apiSecret = local_creds.twilio_api_secret;
} else {
    var accountSid = process.env.TWILIO_ACCOUNT_SID;
    var apiKey = process.env.TWILIO_API_KEY;
    var apiSecret = process.env.TWILIO_API_SECRET;
}

var fs = require('fs');
var http = require('http');
var path = require('path');
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var express = require('express');
var randomName = require('./randomname');

// Create Express webapp.
var app = express();

// Set up the paths for the examples.
[
  'localvideofilter',
  'localvideosnapshot',
  'mediadevices'
].forEach(function(example) {
  var examplePath = path.join(__dirname, `../examples/${example}/public`);
  app.use(`/${example}`, express.static(examplePath));
});

// Set up the path for the quickstart.
var quickstartPath = path.join(__dirname, '../quickstart/public');
app.use('/quickstart', express.static(quickstartPath));

/**
 * Default to the Quick Start application.
 */
app.get('/', function(request, response) {
  response.redirect('/quickstart');
});

/**
 * Generate an Access Token for a chat application user - it generates a random
 * username for the client requesting a token, and takes a device ID as a query
 * parameter.
 */
app.get('/token', function(request, response) {
  var identity = randomName();

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created.
  var token = new AccessToken(
    accountSid,
    apiKey,
    apiSecret
  );

  // Assign the generated identity to the token.
  token.identity = identity;

  // Grant the access token Twilio Video capabilities.
  var grant = new VideoGrant();
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response.
  response.send({
    identity: identity,
    token: token.toJwt()
  });
});

// Create http server and run it.
var server = http.createServer(app);
var port = process.env.PORT || 3000;
app.listen(port);
