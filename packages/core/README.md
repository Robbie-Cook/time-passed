# Time Passed
A library that helps you with showing the time passed since some other timestamp.

Helpful for posts and updates and such.

NOTE: uses [millisecond Unix time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)

## Demo

https://timepassed.robbie.digital/

## Usage

### Import
```typescript
import Time from "time-passed";
Time.getRelativeTime(Date.now(), 1605236401152);
```

or in ES5

```typescript
const Time = require("time-passed").default;
Time.getRelativeTime(Date.now(), 1605236401152);
```

or in UMD

```html
<script src="https://unpkg.com/time-passed@0.0.3/umd/index.js"></script>
<script>

  const newTime = window.TimePassed.default.getRelativeTime(Date.now(), 1605236401152);
</script>
```
