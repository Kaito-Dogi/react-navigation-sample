---
name: "component-model"
root: "src/components/models/"
output: "./"
ignore: []
questions:
  model:
    message: "Please select a model."
    choices:
      - user
  name: "Please enter a component name."
---

# `{{ inputs.model | camel }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}.tsx`

```tsx
import { FC } from "react";
import { View } from "react-native";

import { styles } from "./{{ inputs.name | pascal }}.styles";

type Props = {};

/** @package */
export const {{ inputs.model | pascal }}{{ inputs.name | pascal }}: FC<Props> = ({}) => {
  return <View style={styles.container} />;
};
```

# `{{ inputs.model | camel }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}.styles.ts`

```tsx
import { StyleSheet } from "react-native";

/** @package */
export const styles = StyleSheet.create({
  container: {},
});
```

# `{{ inputs.model | camel }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.model | pascal }}{{ inputs.name | pascal }} } from "./{{ inputs.model | pascal }}{{ inputs.name | pascal }}";
```
