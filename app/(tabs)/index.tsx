import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const handleSignOut = () => {
    // This will be connected to the auth context later
    console.log("Sign out");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Welcome Home!
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#6b7280",
              textAlign: "center",
            }}
          >
            You have successfully signed in to your account.
          </Text>
        </View>

        <Pressable
          onPress={handleSignOut}
          style={{
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#2563eb",
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          <Text
            style={{
              color: "#2563eb",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Sign Out
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
