import { View, ScrollView, Image, Text } from "react-native";
import React, { useState } from "react";

import { images, icons } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  // local state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // function onpress signup
  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-jakarataSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter Your Password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value: string) =>
              setForm({ ...form, password: value })
            }
          />
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-5 "
          />
          <OAuth />
          <Link
            href={"/(auth)/sign-up"}
            className="text-lg text-center text-general-200 mt-3"
          >
            <Text>Don't have an account?</Text>{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
        {/* verificationModal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
