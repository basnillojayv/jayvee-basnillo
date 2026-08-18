**Feedback** — `Alert` (inline banner) and `Dialog` (modal). Reassuring, soft, non-alarming.

```jsx
<Alert tone="success" title="You're covered">ProSomnus is in network with your plan.</Alert>
<Alert tone="info">Your dentist will confirm fit at your next visit.</Alert>

<Dialog open={open} onClose={close} title="Book a consultation"
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="accent">Confirm</Button></>}>
  Choose a time that works for you.
</Dialog>
```

`Alert` tones: info / success / warning / error. `Dialog` renders `null` when `open` is false.
