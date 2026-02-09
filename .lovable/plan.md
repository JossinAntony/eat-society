

## Deep Forest Green + Gold Theme

Transform the current navy blue theme into a rich, earthy Deep Forest Green + Gold palette -- perfect for a fresh meat and vegetables brand.

### Color Palette

| Element | Current (Navy) | New (Forest Green) |
|---|---|---|
| Background | Deep navy `220 30% 8%` | Deep forest `155 30% 7%` |
| Cards/Surfaces | Navy `220 25% 12%` | Forest `155 25% 11%` |
| Secondary | Muted navy `220 20% 18%` | Muted green `155 20% 16%` |
| Muted | Dark navy `220 18% 15%` | Dark green `155 18% 14%` |
| Borders | Navy border `220 18% 20%` | Green border `155 18% 18%` |
| Primary (Gold) | `45 80% 55%` | `45 80% 55%` (unchanged) |
| Accent (Gold) | `45 60% 45%` | `45 60% 45%` (unchanged) |

The gold accents remain the same, providing warmth and luxury against the deep green base. The green hue (155) evokes freshness and nature, fitting perfectly with the farm-to-kitchen brand.

### Files Changed

**`src/index.css`** -- Update all HSL color variables in `:root` and `.dark` to shift from hue 220 (navy) to hue 155 (forest green). Update gradient and shadow custom tokens to match.

### Technical Details

All changes are confined to CSS custom properties. No component files need updating since they all reference semantic tokens (`bg-background`, `text-foreground`, etc.) that will automatically pick up the new values.

