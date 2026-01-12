import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: "#30363D", flex: 1, padding: 15 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 60,
          }}
        >
          <Text style={{ alignSelf: "center", color: "grey" }}>
            English (US)
          </Text>
          <Image
            style={{ width: 15, height: 10 }}
            source={require("../image/dropdown.png")}
          />
        </View>
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
            borderColor: "grey",
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
            borderColor: "grey",
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

        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontSize: 16,
            fontWeight: 900,
          }}
        >
          Forgot Password?
        </Text>
      </ScrollView>
      <View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: "100%",
              backgroundColor: "#30363D",
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
            style={{ width: 35+35/2, height: 18 }}
            source={require("../image/metalogo-removebg-preview.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
