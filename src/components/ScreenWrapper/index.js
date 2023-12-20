
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

const ScreenWrapper = ({ children }) => {
    return (
        <View className="bg-white h-screen">  
       
        <SafeAreaView>
                {children}
        </SafeAreaView>
     
           
        </View>
    );
    }
export default ScreenWrapper;