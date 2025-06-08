import { cn } from "@/lib/utils";
import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className,
}: ButtonProps) {
  const baseClasses = "rounded-lg items-center justify-center";

  const variantClasses = {
    primary: "bg-blue-600 active:bg-blue-700",
    secondary: "bg-gray-600 active:bg-gray-700",
    outline: "border-2 border-blue-600 bg-transparent active:bg-blue-50",
  };

  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const textColorClasses = {
    primary: "text-white font-semibold",
    secondary: "text-white font-semibold",
    outline: "text-blue-600 font-semibold",
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-50",
        className
      )}
    >
      <Text className={cn(textColorClasses[variant], textSizeClasses[size])}>
        {loading ? "Loading..." : title}
      </Text>
    </Pressable>
  );
}
