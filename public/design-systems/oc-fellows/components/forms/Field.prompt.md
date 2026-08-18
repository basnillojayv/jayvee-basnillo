Label/hint/error scaffolding around a control. Input, Textarea and Select use it internally — reach for it directly only when wrapping a custom control.

```jsx
<Field label="Employer" htmlFor="employer" hint="Where you work today">
  <input id="employer" style={controlStyle()} />
</Field>
```
