import AsyncStorage from "@react-native-async-storage/async-storage";

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

const AUTH_TOKEN_KEY = "auth_token";
const USER_DATA_KEY = "user_data";

// Mock user database - in real app, this would be your backend API
const mockUsers: (User & { password: string })[] = [
  {
    id: "1",
    email: "test@example.com",
    name: "Test User",
    password: "password",
  },
];

export class AuthService {
  static async signIn(credentials: SignInCredentials): Promise<User> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock authentication - in real app, call your backend API
    const user = mockUsers.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const userData: User = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    // Store auth data
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, "mock_token");
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    return userData;
  }

  static async signUp(credentials: SignUpCredentials): Promise<User> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email === credentials.email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Create new user
    const newUser: User & { password: string } = {
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      password: credentials.password,
    };

    mockUsers.push(newUser);

    const userData: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };

    // Store auth data
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, "mock_token");
    await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

    return userData;
  }

  static async signOut(): Promise<void> {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    await AsyncStorage.removeItem(USER_DATA_KEY);
  }

  static async getCurrentUser(): Promise<User | null> {
    try {
      const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
      const userData = await AsyncStorage.getItem(USER_DATA_KEY);

      if (!token || !userData) {
        return null;
      }

      return JSON.parse(userData);
    } catch (error) {
      console.error("Error getting current user:", error);
      return null;
    }
  }

  static async isAuthenticated(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return user !== null;
  }
}
