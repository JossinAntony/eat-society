

## Fix: Preview Disappearing in Side Panel

### Problem
The Lovable editor's preview panel uses a ref-based element selection system. When it tries to attach refs to your `Contact` and `Footer` components (and likely others), React throws warnings because these components don't support `forwardRef`. This conflict between the editor and your components is causing the preview to flash and then disappear.

### Solution
Wrap all page-level components with `React.forwardRef` so the Lovable editor can properly attach refs without errors. This is a minimal change that won't affect how your site looks or works.

### Components to Update
1. **Contact.tsx** - Wrap with `forwardRef`
2. **Footer.tsx** - Wrap with `forwardRef`
3. **Navbar.tsx** - Wrap with `forwardRef`
4. **Hero.tsx** - Wrap with `forwardRef`
5. **Highlights.tsx** - Wrap with `forwardRef`
6. **ProductCategories.tsx** - Wrap with `forwardRef`
7. **About.tsx** - Wrap with `forwardRef`

### What Changes Look Like
For each component, the change is small. For example, `Footer.tsx` goes from:

```ts
const Footer = () => { ... };
export default Footer;
```

to:

```ts
import { forwardRef } from "react";
const Footer = forwardRef<HTMLElement>((props, ref) => {
  return <footer ref={ref} ...> ... </footer>;
});
Footer.displayName = "Footer";
export default Footer;
```

Each component's outermost HTML element gets the `ref` attached, and the component is wrapped with `forwardRef`.

### Technical Details
- Each component will import `forwardRef` from React
- The outermost element (e.g., `<section>`, `<footer>`, `<nav>`) receives the forwarded `ref`
- A `displayName` is set for better debugging
- No visual or behavioral changes to your site
