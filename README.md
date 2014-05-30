An simple app to control a [spark][spark] controller with [cylonjs][cylonjs].

These instructions assume development with a MAC or Linux.

### Initialize your spark with either of the following

 [Spark JSConf 2014 setup][sparkjsconf]
 
 [Spark Documentation][sparkdocs]

### Install the npm packages

```
$ npm install
```
or
```
$ npm i
```

### Create cfg/tokens.json

```
touch cfg/tokens.json
```
### Add your access token and device id to cfg/tokens.json
```
{
    "accessToken":    "YOUR_ACCESS_TOKEN",
    "deviceId":       "YOUR_DEVICE_ID"
}
```

### Run the app

```
$npm start
```

[spark]: https://www.spark.io/
[cylonjs]: http://cylonjs.com/
[sparkjsconf]: https://www.spark.io/jsconf
[sparkdocs]: http://docs.spark.io/start/
