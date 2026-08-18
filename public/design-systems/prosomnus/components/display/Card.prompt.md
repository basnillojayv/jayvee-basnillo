**Display** — `Card`, `Badge`, `Tag`, `Stat`, `Testimonial`. The soft, reassuring content surfaces of the system.

```jsx
<Card hoverLift>Custom-fit. Comfortable. Covered.</Card>
<Badge tone="wellness">FDA cleared</Badge>
<Badge tone="success">In network</Badge>
<Tag selected>CPAP alternative</Tag>
<Stat value={96} suffix="%" label="of patients prefer ProSomnus over CPAP" />
<Testimonial quote="I finally sleep through the night." name="Dana R." role="Patient, 2 years" rating={5} />
```

`Card` uses 12px radius + soft shadow; `hoverLift` raises it. `Stat` counts up when scrolled into view. `Badge` tones: neutral / primary / wellness / success / warning / error.
