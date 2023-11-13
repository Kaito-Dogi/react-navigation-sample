---
name: "component-ui"
root: "src/components/ui/"
output: "./"
ignore: []
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
import { FC } from "react";
import { View } from "react-native";

import { styles } from "./{{ inputs.name | pascal }}.styles";

type Props = {};

/** @package */
export const {{ inputs.name | pascal }}: FC<Props> = ({}) => {
  return <View style={styles.container} />;
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.styles.ts`

```tsx
import { StyleSheet } from "react-native";

/** @package */
export const styles = StyleSheet.create({
  container: {},
});
```

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}";
```
