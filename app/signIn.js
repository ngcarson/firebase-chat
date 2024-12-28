import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native-web';
import { Octicons } from '@expo/vector-icons';

export default function signIn() {
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
        {/* signIn image */}
        <View className="items-center">
          <Image style={{ height: hp(40) }} resizeMode="contain" source={require('../assets/images/signin.png')} />
        </View>
        <View className="gap-10">
          <Text style={{ fontSize: hp(4) }} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
          {/* inputs */}
          <View className="gap-4">
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
              <Octicons name="mail" size={hp(2.7)} color="gray"></Octicons>
              <TextInput style={{ fontSize: hp(2) }} className="flex-1 font-semibold text-neutral-700" placeholder='Email Address' placeholderTextColor={'gray'}></TextInput>
            </View>
            <View className="gap-3">
              <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
                <Octicons name="lock" size={hp(2.7)} color="gray"></Octicons>
                <TextInput style={{ fontSize: hp(2) }} className="flex-1 font-semibold text-neutral-700" placeholder='Password' placeholderTextColor={'gray'}></TextInput>
              </View>
              <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-right text-neutral-400">Forgot passport?</Text>

              {/* submit button */}

            </View>
          </View>
        </View>
      </View>
    </View >
  )
}