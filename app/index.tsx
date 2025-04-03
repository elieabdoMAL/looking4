// app/index.tsx
import { Redirect } from "expo-router";

export default function Index() {
  // Redirect to the Welcome page as the default tab.
  return <Redirect href="./welcomePage" />;
}
