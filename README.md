# capture-submit

**THIS IS NO LONGER MAINTAINED USE @scienceai/ui INSTEAD**

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

React higher order component that calls a onSubmit callback on blur, pressing enter etc...

```js
import CaptureSubmit from 'capture-submit';
import PaperInput from 'paper-input';

const ControlledPaperInput = CaptureSubmit(PaperInput);

...


<ControlledPaperInput
 type="text"
 name="name"
 label="name"
 value="value"
 onSubmit={(e) => { console.log('submission! (blur, enter is pressed etc..')}}
/>
```

`capture-submit` will do the right thing for select input and textarea
(see sources).
