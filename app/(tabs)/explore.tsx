import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <StatusBar style="auto" />
      <ScrollView className="flex-1 px-6">
        <View className="flex-1 justify-center items-center py-12">
          <Text className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Explore
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 text-center">
            This is the explore screen. Add your content here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
