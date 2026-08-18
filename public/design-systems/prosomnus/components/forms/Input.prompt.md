**Form controls** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`. All share ProSomnus's 8px radius, soft focus ring, and Inter type.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" hint="We'll never share it." />
<Input label="ZIP" error="Please enter a valid ZIP" />
<Select label="Insurance" options={['Aetna','Cigna','Medicare','VA benefits']} />
<Checkbox label="I agree to the privacy policy" defaultChecked />
<Radio options={['Patient','Dentist','Physician']} defaultValue="Patient" />
<Switch label="Email reminders" defaultChecked />
```
