import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function StartPage() {
  return (
    <View style={{ paddingTop: 40 }} className="flex-1 justify-center">
      <ActivityIndicator size="Large" color="gray" />
    </View>
  )
}