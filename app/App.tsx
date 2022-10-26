import { useRef, useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

import './src/services/notificationConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  const getPushNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()


  useEffect(() => {
    //Expo push token from your app
    getPushNotificationToken()
  }, [])

  useEffect(() => {
    //use https://expo.dev/notifications to test
    getPushNotificationListener.current = Notifications.addNotificationReceivedListener(response => {
      console.log(response)
    })

    return () => {
      if (getPushNotificationListener.current  && responseNotificationListener.current) {
          Notifications.removeNotificationSubscription(getPushNotificationListener.current)
          Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  }, [])

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}