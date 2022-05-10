import React from 'react';
import { Platform, Text } from 'react-native';
import { useTheme } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Feather } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { NewAnnotation } from '../screens/NewAnnotation';

const Tab = createBottomTabNavigator();

export function Routes() {

    const theme = useTheme();

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Minhas anotações'
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: theme.colors.blue_700,
                    tabBarInactiveTintColor: theme.colors.green_300,
                    tabBarLabelPosition: 'beside-icon',
                    tabBarStyle: {
                        height: 88,
                        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    }
                }}>

                <Tab.Screen name='Nova anotação' component={NewAnnotation}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <AntDesign name="pluscircleo" size={size} color={color} />
                        )),
                        tabBarLabelStyle: {
                            fontFamily: theme.fonts.medium,
                            fontSize: 15
                        }
                    }} />


                <Tab.Screen name='Minhas anotações' component={Home}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <Feather name="list" size={size} color={color} />
                        )),
                        tabBarLabelStyle: {
                            fontFamily: theme.fonts.medium,
                            fontSize: 15
                        }
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}