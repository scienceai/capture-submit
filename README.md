# capture-submit

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
