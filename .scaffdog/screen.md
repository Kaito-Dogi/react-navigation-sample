---
name: "screen"
root: "src/screens/"
output: "./"
ignore: []
questions:
  name: "Please enter a screen name."
---

# `{{ inputs.name | pascal }}Screen/{{ inputs.name | pascal }}Screen.tsx`

```tsx
import { FC } from "react";
import { SafeAreaView } from "react-native";

import { styles } from "./styles";

type Props = {};

/** @package */
export const {{ inputs.name | pascal }}Screen: FC<Props> = ({}) => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
```

# `{{ inputs.name | pascal }}Screen/{{ inputs.model | pascal }}Screen.styles.ts`

```tsx
import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    justifyContent: "center",
  },
});
```

# `{{ inputs.name | pascal }}Screen/index.ts`

```typescript
export { {{ inputs.name | pascal }}Screen } from "./{{ inputs.name | pascal }}Screen";
```
