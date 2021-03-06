## alert-sound-notify

JavaScript library to play sound alerts 

```js
playAlert = require('alert-sound-notify')

playAlert() // Plays default alert "bottle"
playAlert('purr')
playAlert.volume(0.5)
```

See `content.js` for all available sounds.

Try it at
* [requirebin](http://requirebin.com/?gist=6050220)
* [jsbin](http://jsbin.com/enobox/1/edit)

## Install

```bash
$ npm install alert-sound-notify
```

## Manual

### Available Sounds

* bottle (default)
* glass
* funk
* morse
* purr
* tink
* submarine

### Adding Custom Sounds

```js
playAlert.content['foo'] = ['https://bar.com/foo.mp3', 'https://bar.com/foo.ogg']
playAlert('foo')
```

## How to use without NPM?

If your application isn't structured as a CommonJS package, you can download the distribution file;

```bash
$ wget https://raw.github.com/rajvantchahal/alert-sound-notify/master/dist/alert-sound-notify.js
```

And include it on your page:

```html
<script src="alert-sound-notify.js"></script>
<script>
  playAlert('purr')
</script>
```

### Accessing Audio API

```js
playAlert.player.src()
// => foobar.mp3

playAlert.player.on('ended', function(){})
```
