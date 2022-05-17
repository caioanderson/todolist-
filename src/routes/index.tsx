import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { NewAnnotation } from '../screens/NewAnnotation';
import { Confirmation } from '../screens/Confirmation';
import { Routes } from './app.routes';

export interface NavigationStack {
    navigate: (value: string) => void;
}

export function StackRoutes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="Initial">
                <Screen name="Initial" component={Routes} />
                <Screen name='Create' component={NewAnnotation} />
                <Screen name='Confirmation' component={Confirmation} />
            </Navigator>
        </NavigationContainer>
    )
}