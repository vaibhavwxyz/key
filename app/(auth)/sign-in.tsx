import { SignInFormValues, signInSchema } from "@/lib/validationSchemas";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };

  const handleSignIn = async (
    values: SignInFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      // Mock authentication
      if (
        values.email === "test@example.com" &&
        values.password === "password"
      ) {
        Alert.alert("Success", "Signed in successfully!");
      } else {
        Alert.alert("Error", "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1, padding: 24 }}>
          <View
            style={{ flex: 1, justifyContent: "center", paddingVertical: 48 }}
          >
            {/* Header */}
            <View style={{ marginBottom: 32 }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#1f2937",
                  textAlign: "center",
                  marginBottom: 8,
                }}
              >
                Welcome Back
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#6b7280",
                  textAlign: "center",
                }}
              >
                Sign in to your account
              </Text>
            </View>

            {/* Formik Form */}
            <Formik
              initialValues={initialValues}
              validationSchema={signInSchema}
              onSubmit={handleSignIn}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <View style={{ gap: 20 }}>
                  {/* Email Field */}
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: 8,
                      }}
                    >
                      Email
                    </Text>
                    <TextInput
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder="Enter your email"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoComplete="email"
                      style={{
                        width: "100%",
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderWidth: 1,
                        borderColor:
                          errors.email && touched.email ? "#ef4444" : "#d1d5db",
                        borderRadius: 8,
                        fontSize: 16,
                        backgroundColor: "#ffffff",
                      }}
                      placeholderTextColor="#9CA3AF"
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}
                      >
                        {errors.email}
                      </Text>
                    )}
                  </View>

                  {/* Password Field */}
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: 8,
                      }}
                    >
                      Password
                    </Text>
                    <TextInput
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      placeholder="Enter your password"
                      secureTextEntry
                      autoComplete="password"
                      style={{
                        width: "100%",
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderWidth: 1,
                        borderColor:
                          errors.password && touched.password
                            ? "#ef4444"
                            : "#d1d5db",
                        borderRadius: 8,
                        fontSize: 16,
                        backgroundColor: "#ffffff",
                      }}
                      placeholderTextColor="#9CA3AF"
                    />
                    {errors.password && touched.password && (
                      <Text
                        style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}
                      >
                        {errors.password}
                      </Text>
                    )}
                  </View>

                  {/* Submit Button */}
                  <Pressable
                    onPress={() => handleSubmit()}
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: isSubmitting ? "#9CA3AF" : "#2563eb",
                      paddingHorizontal: 24,
                      paddingVertical: 12,
                      borderRadius: 8,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 24,
                    }}
                  >
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </Text>
                  </Pressable>

                  {/* Footer */}
                  <View style={{ marginTop: 32, alignItems: "center" }}>
                    <Text style={{ color: "#6b7280" }}>
                      Don&apos;t have an account?{" "}
                      <Link
                        href="/(auth)/sign-up"
                        style={{ color: "#2563eb", fontWeight: "600" }}
                      >
                        Sign Up
                      </Link>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
