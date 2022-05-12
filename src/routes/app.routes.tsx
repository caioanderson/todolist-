import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { NewAnnotation } from '../screens/NewAnnotation';

export interface NavigationStack {
    navigate: (value: string) => void;
}

export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Create' component={NewAnnotation}/>
        </Navigator>
    )
}