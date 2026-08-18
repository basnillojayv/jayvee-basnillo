**Button** — the primary interactive control. Use `accent` (amber) for the ONE primary call-to-action on a view; `primary` (blue) for standard actions; `secondary` / `ghost` for lower emphasis.

```jsx
<Button variant="accent" size="lg">Get started</Button>
<Button variant="primary">Save changes</Button>
<Button variant="secondary" iconLeft={<Icon name="download" size={16} />}>Download</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (blue), `accent` (amber CTA — one per view), `secondary` (outlined), `ghost`. Sizes: `sm` / `md` / `lg`. Props: `fullWidth`, `disabled`, `iconLeft`, `iconRight`.
