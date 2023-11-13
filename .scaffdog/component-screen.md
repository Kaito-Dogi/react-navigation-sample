---
name: "component-screen"
root: "src/components/screens/"
output: "./"
ignore: []
questions:
  name: "Please enter a screen name."
---

# `{{ inputs.name | pascal }}Screen/{{ inputs.name | pascal }}Screen.tsx`

```tsx
import { FC } from "react";
import { View } from "react-native";

import { styles } from "./{{ inputs.name | pascal }}Screen.styles";

type Props = {};

/** @package */
export const {{ inputs.name | pascal }}Screen: FC<Props> = ({}) => {
  return <View style={styles.container}></View>;
};
```

# `{{ inputs.name | pascal }}Screen/{{ inputs.name | pascal }}Screen.styles.ts`

```tsx
import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
});
```

# `{{ inputs.name | pascal }}Screen/index.ts`

```typescript
export { {{ inputs.name | pascal }}Screen } from "./{{ inputs.name | pascal }}Screen";
```
