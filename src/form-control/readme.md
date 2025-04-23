# Tabs Component Documentation

## Overview
The `Tabs` component provides an intuitive way to organize content into multiple tabs. It supports both routing-based navigation using `react-router-dom` and standard tab switching without routing. This documentation outlines the implementation details, available props, and usage examples.

---

## Component API Reference

### 1. `<Tabs>`
| Prop      | Type   | Default    | Description |
|-----------|--------|-----------|-------------|
| `variant` | string | `"default"` | Defines the visual style of the tabs, e.g., `"secondary"` |

### 2. `<Tabs.Item>`
| Prop            | Type    | Default  | Description |
|----------------|--------|----------|-------------|
| `href` | string | Required | Specifies the ID of the associated panel |
| `isDisabled`    | boolean | `false`  | Disables interaction with the tab |

---

## Key Features & Notes
- **Accessibility:** Ensure the `href` in `Tabs.Item` matches the corresponding route in `Routes`.
- **Routing Support:** Requires `react-router-dom` to manage routing.
- **Disabled Tabs:** The `isDisabled` prop prevents interaction with a tab.
- **Variants:** The `variant` prop allows styling customization (e.g., `secondary`).

This documentation provides a comprehensive guide to using the `Tabs` component efficiently.

---

## Code Concept
To see all example implementations, please check this [POC](https://codesandbox.io/p/github/rpt-rfoxy/raapit-element-code-sandbox/draft/romantic-fog).

---

## Implementation Example

### Tabs with Routing
This implementation integrates `react-router-dom` to manage tab navigation via routes.

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';

<BrowserRouter>
  <Tabs variant="default">
    <Tabs.Item href="/tabpanel-1">Default tab item 1</Tabs.Item>
    <Tabs.Item href="/tabpanel-2">Default tab item 2</Tabs.Item>
    <Tabs.Item href="/tabpanel-3" isDisabled>Default tab item 3</Tabs.Item>
    <Tabs.Item href="/tabpanel-4">Default tab item 4</Tabs.Item>
    <Tabs.Item href="/tabpanel-5">Default tab item 5</Tabs.Item>
  </Tabs>
  <Routes>
    <Route path="tabpanel-1" element={<div>Content 1</div>} />
    <Route path="tabpanel-2" element={<div>Content 2</div>} />
    <Route path="tabpanel-3" element={<div>Content 3</div>} />
    <Route path="tabpanel-4" element={<div>Content 4</div>} />
    <Route path="tabpanel-5" element={<div>Content 5</div>} />
  </Routes>
</BrowserRouter>
```

