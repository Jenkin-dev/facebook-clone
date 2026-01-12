import {
  View,
  Text,
  Image,
  TextInput,
  // Pressable,
  TouchableOpacity,
  // Alert,
  ScrollView,
  Switch,
} from "react-native";
// import { red } from "react-native-reanimated/lib/typescript/Colors";

import { Ionicons } from "@expo/vector-icons"; //for the dropdown icon

import { useState } from "react";
// import { Switch } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = {
    background: isDarkMode ? "#30363D" : "#FFFFFF",
    text: isDarkMode ? "#FFFFFF" : "#000000",
    subtitle: isDarkMode ? "whitesmoke" : "#343c43",
    inputBorder: isDarkMode ? "grey" : "#ccc",
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.background, flex: 1, padding: 15 }}
    >
      <View //div for the notification and UI toggles
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginVertical: 0,
        }}
      >
        <View //this is for notification
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 7,
            marginVertical: 0,
          }}
        >
          <Text style={{ color: theme.text, fontSize: 16 }}>
            Enable notifications
          </Text>

          <Switch
            value={isEnabled}
            onValueChange={setIsEnabled}
            trackColor={{ false: "#767577", true: "#767577" }}
            thumbColor={isEnabled ? "lightblue" : "#fbfafb"}
          />
        </View>

        <View //to toggle dark and light mode
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 7,
            marginVertical: 0,
          }}
        >
          <Text style={{ color: theme.text, fontSize: 16 }}>Dark Mode</Text>

          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#767577", true: "#767577" }}
            thumbColor={isDarkMode ? "lightblue" : "#fbfafb"}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
       <TouchableOpacity> <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 60,
          }}
        >
          <Text style={{ alignSelf: "center", color: theme.text }}>
            English (US)
          </Text>
          <Ionicons name="chevron-down" size={16} color={theme.text} />
        </View> </TouchableOpacity>
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            alignSelf: "center",
            marginBottom: 50,
          }}
          source={require("../image/fb.png")}
        />

        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Mobile number or email"
          style={{
            height: 60,
            borderColor: theme.inputBorder,
            color: theme.text,
            borderWidth: 1,
            paddingHorizontal: 18,
            borderRadius: 20,
            marginVertical: 5,
          }}
        />
        <TextInput
          placeholderTextColor={"grey"}
          placeholder="Password"
          style={{
            height: 60,
            borderColor: theme.inputBorder,
            color: theme.text,
            borderWidth: 1,
            paddingHorizontal: 18,
            borderRadius: 20,
            marginVertical: 5,
          }}
        />

        <TouchableOpacity
          style={{
            height: 40,
            backgroundColor: "#1877F2",
            // borderWidth: 1,
            paddingHorizontal: 18,
            borderRadius: 20,
            marginVertical: 8,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: 800, fontSize: 15 }}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              color: theme.subtitle,
              fontSize: 16,
              fontWeight: 900,
              // marginBottom: 800
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: "100%",
              backgroundColor: theme.background,
              paddingHorizontal: 18,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#1877F2",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 15,
            }}
          >
            <Text style={{ color: "#1877F2", fontWeight: "800", fontSize: 15 }}>
              Create new account
            </Text>
          </TouchableOpacity>

          <Image
            style={{ width: 35 + 35 / 2, height: 18 }}
            source={require("../image/metalogo-removebg-preview.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}