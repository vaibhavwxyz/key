import { Redirect } from "expo-router";

export default function Index() {
  // For now, always redirect to auth
  // Later this can be enhanced with auth state checking
  return <Redirect href="/(auth)/sign-in" />;
}
