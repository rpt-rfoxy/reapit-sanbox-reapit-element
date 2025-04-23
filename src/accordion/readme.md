# Document Design Solution for Accordion Component  

hi @kurtdoherty @ksolanki7

## 1. Overview  
The **Accordion component** is a collapsible UI element designed to group related content within an expandable and collapsible structure. It consists of multiple child elements such as `Accordion.Group`, `Accordion.Header`, `Accordion.Body`, and `Accordion.Legend`, which provide enhanced flexibility for content organization.  

---
## 2. Component Structure  
### ✅ Accordion.Group  
- Acts as a container for multiple `Accordion` elements.  
- Ensures that multiple accordions within the group maintain state consistency.  

### ✅ Accordion  
- Represents an individual collapsible section.  
- Wraps around `Accordion.Header`, `Accordion.Body`, and optionally `Accordion.Legend` for additional metadata.  

### ✅ Accordion.Header  
- Defines the clickable area that triggers the expansion or collapse of the accordion.  
- Can contain text elements (`LabelText`) and optional icons wrapped in `Accordion.Legend`.  

### ✅ Accordion.Legend  
- Supports additional visual elements such as numeric indicators or icons.  
- Utilized for displaying metadata, such as count indicators, feature icons, etc.  

### ✅ Accordion.Body  
- Houses the main content that gets displayed when the accordion is expanded.  

---

## 3. Usage Example  
```tsx
<Accordion.Group>
  <Accordion>
    <Accordion.Header>
      <LabelText variant="strong">Section Title</LabelText>
      <Accordion.Legend>
        <LabelText>3</LabelText>
      </Accordion.Legend>
    </Accordion.Header>
    <Accordion.Body>
      <p>Collapsible content goes here.</p>
    </Accordion.Body>
  </Accordion>
  
  <Accordion>
    <Accordion.Header>
      <LabelText variant="strong">Section Title</LabelText>
      <Accordion.Legend>
        <ElFeature>
          <svg className={elIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
            <path d="M..." fill="#9FAEBC" />
          </svg>
          <LabelText>3</LabelText>
        </ElFeature>
      </Accordion.Legend>
    </Accordion.Header>
    <Accordion.Body>
      <p>Collapsible content goes here.</p>
    </Accordion.Body>
  </Accordion>
</Accordion.Group>
```

---

#### Code Concept  
To see the detailed implementation, you can check it here ([POC](https://codesandbox.io/p/github/rpt-rfoxy/raapit-element-code-sandbox/draft/romantic-fog)). Please let me know if the link doesn't work.  
