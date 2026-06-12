# Design System Specification: The Architectural Ledger

## 1. Overview & Creative North Star
**Creative North Star: The Editorial Vault**
This design system rejects the "utilitarian spreadsheet" aesthetic common in fintech. Instead, it adopts the persona of a **High-End Editorial Ledger**. We treat financial data with the same reverence as a luxury magazine layout—utilizing expansive breathing room, sophisticated typographic scales, and intentional asymmetry to guide the eye. 

The goal is to move away from "boxed-in" UI. By leveraging layered surfaces and removing traditional borders, we create an interface that feels like high-quality vellum paper stacked on a stone desk. It is authoritative, calm, and deeply trustworthy.

---

## 2. Colors: Tonal Depth vs. Structural Lines
Color in this system is not decorative; it is functional and spatial. We move beyond flat hex codes to a tiered system of "surfaces."

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined solely through background color shifts. A `surface-container-low` section sitting on a `surface` background provides all the definition a user needs without the visual "noise" of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Each tier represents a level of "elevation" towards the user:
*   **Background (`#f9f9fb`):** The foundational canvas.
*   **Surface-Container-Low (`#f3f3f5`):** Secondary content areas (e.g., a "Recent Transactions" section).
*   **Surface-Container-Lowest (`#ffffff`):** The "highest" point of focus, reserved for interactive cards and primary input modals.

### The "Glass & Signature Texture" Rule
*   **Glassmorphism:** For floating Navigation Bars or Action Sheets, use `surface` colors at 80% opacity with a `20px` backdrop-blur. This ensures the UI feels integrated, not "pasted on."
*   **Signature Gradients:** To elevate primary CTAs, use a subtle linear gradient (45°) from `primary` (`#000666`) to `primary_container` (`#1a237e`). This adds a "soul" to the button that a flat fill cannot achieve.

---

## 3. Typography: The Editorial Voice
We use a dual-font approach to balance authority with modern clarity.

*   **Display & Headlines (Manrope):** A geometric sans-serif with a high x-height. Use `headline-lg` (2rem) for account balances to give them a sense of "prestige."
*   **Body & Labels (Inter):** The workhorse. Inter provides exceptional readability at small sizes for transaction details and legal text.

**Typographic Hierarchy as Identity:**
*   **High Contrast:** Pair a `display-md` balance with a `label-sm` secondary label in `on_surface_variant` to create a sophisticated, asymmetrical tension.
*   **Intentional Weight:** Use Bold weights sparingly—only for `title-sm` headings to anchor a section.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often a crutch for poor layout. In this system, depth is achieved through "Tonal Layering."

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift.
*   **Ambient Shadows:** If a card must float (e.g., a high-priority alert), use an extra-diffused shadow: `offset: 0, 8px; blur: 24px; color: rgba(26, 28, 29, 0.06)`. Note the use of `on_surface` as the shadow tint rather than pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a container definition in high-glare environments, use the `outline_variant` at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Refined Interaction Primitives

### Cards & Lists
*   **Rule:** Forbid the use of divider lines. 
*   **Execution:** Use `spacing-4` (1rem) of vertical white space or a subtle shift from `surface` to `surface-container-low` to separate items.
*   **Pending vs. Effective:** 
    *   *Effective:* Bold `on_surface` typography with a `secondary_container` (Green) success indicator.
    *   *Pending:* Use `on_surface_variant` (Grey) with a "frosted glass" treatment on the item background to indicate its "unconfirmed" state.

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `rounded-md` (0.75rem).
*   **Secondary:** `surface-container-highest` fill with `primary` text. No border.
*   **Tertiary:** Pure text with `primary` color, used for "Cancel" or "View All."

### Input Fields
*   **Base:** `surface-container-lowest` fill. 
*   **Focus State:** Do not change the border. Instead, shift the background to a very subtle `surface_tint` (at 5% opacity) and increase the ambient shadow.
*   **Error:** Use `error` (`#ba1a1a`) for the helper text and a `error_container` soft glow behind the field.

### Signature Component: The "Wealth Card"
A card using a deep `primary_container` background with a subtle "Silk" texture overlay (a very faint noise or mesh gradient). This is used exclusively for the user’s total net worth, providing a premium feel.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. A larger left-hand margin for headings creates an editorial, "crafted" feel.
*   **Do** use `secondary` (Success Green) only for positive cash flow. 
*   **Do** embrace white space. If the screen feels "empty," it means the user can breathe.

### Don't
*   **Don't** use 1px dividers between list items. Use spacing.
*   **Don't** use standard "Material Blue." Stick to our Deep Blue `primary` to maintain the "Vault" authority.
*   **Don't** use harsh shadows. If the shadow looks like a shadow, it’s too dark. It should look like "ambient occlusion."
*   **Don't** use "Alert Red" for everything. Reserve `tertiary`/`error` for critical data loss or negative balances only.