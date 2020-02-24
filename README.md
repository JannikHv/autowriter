# Autowriter

### API - Methods

```javascript
.write(text, [interval]);
.clear([interval])
.pause(time)
.run()
```

### Example

```javascript
const element = document.getElementById('foo');
const writer = new Autowriter(element);

writer
  .write('Hello, world!')
  .pause(1500)
  .clear()
  .pause(1500)
  .write('Bye')
  .run()
  .then(() => console.log('Done!'));
```
