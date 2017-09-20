# Twilio Video Quickstart for JavaScript

[![OS X/Linus Build Status](https://secure.travis-ci.org/twilio/video-quickstart-js.png?branch=master)](http://travis-ci.org/twilio/video-quickstart-js) [![Windows Build status](https://ci.appveyor.com/api/projects/status/3u69uy9c0lsap3dr?svg=true
)](https://ci.appveyor.com/project/markandrus/video-quickstart-js)

This application should give you a ready-made starting point for writing your
own video apps with Twilio Video to use on IBM's Bluemix. Before we begin, we need to collect
all the config values we need to run the application:

* Account SID: Your primary Twilio account identifier - find this [in the console here](https://www.twilio.com/console).
* API Key: Used to authenticate - [generate one here](https://www.twilio.com/console/runtime/api-keys).
* API Secret: Used to authenticate - [just like the above, you'll get one here](https://www.twilio.com/console/runtime/api-keys).

## A Note on API Keys

When you generate an API key pair at the URLs above, your API Secret will only
be shown once - make sure to save this in a secure location, 
or possibly your `~/.bash_profile`.

## Building Out The Application on Bluemix

1. In IBM's Bluemix, set up a new Twilio service.
2. Enter your Account SID and Auth Token from the Console.
3. Enter a valid API Key and Secret Pair: [API Key and Secret Pair](https://www.twilio.com/console/video/dev-tools/api-keys)
4. Clone this branch of this repository
5. Login to Bluemix on the command line (ensure you have the [CLI installed](https://console.bluemix.net/docs/starters/install_cli.html)):
```
bluemix api https://api.ng.bluemix.net
bluemix login
```
6. Deploy the code:
```
bluemix app push <App Name>
```
7. Visit <URL of Bluemix App>
8. Visit it on another machine (or in a new tab of the same browser, but this isn't as fun.)
9. Join the same room
10. Profit!

## Examples

The project contains some common use-case examples for the Twilio Video JS SDK.

* Media Device Selection: URL of Bluemix App/mediadevices
* Local Video Snapshot: URL of Bluemix App/localvideosnapshot

## License

MIT
