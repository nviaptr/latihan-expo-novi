import { Text, View } from 'react-native'
import React from 'react'

export default function Home () {{
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }}