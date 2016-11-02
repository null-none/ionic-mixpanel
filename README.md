# ionic-mixpanel
Ionic service for use mixpanel

## Install

```bash
cordova plugin add cordova-mixpanel
bower install ionic-mixpanel
```

## Example

```html
...
  <script src="lib/ionic-mixpanel/ionicMixpanel.js"></script>
...

```


```js
var token = 'token key';
MixPanel.init(token);
var text = 'text';
var params = {
  what: 1
};
MixPanel.track(text, params);
```


## License
MIT
