# Autowriter

### API - Methods

```javascript
.write(text, [interval]);
.clear([interval])
.pause(time)
.run()
```

### Examples

##### With default intervals

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

##### With custom intervals

```javascript
const element = document.getElementById('foo');
const writer = new Autowriter(element);

writer
  .write('Hello, world!', 100)
  .pause(1500)
  .clear(50)
  .pause(1500)
  .write('Bye', 500)
  .run()
  .then(() => console.log('Done!'));
```
