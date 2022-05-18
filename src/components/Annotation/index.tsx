import React, { useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView, RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Container, Notation, When, Light, ButtonDelete, Trash } from './styles';

export interface AnnotationData {
    id: string;
    note: string;
    completed: boolean;
    date: string;
}

interface AnnotationProps extends RectButtonProps {
    data: AnnotationData;
}

export function Annotation({ data, ...rest }: AnnotationProps) {

    const [isCompleted, setIsCompleted] = useState(data.completed);

    async function handleCompleted() {
        setIsCompleted(!isCompleted);

        const annotationsValues = await AsyncStorage.getItem('@toDoList');
        const dataAnnotations = annotationsValues !== null ? JSON.parse(annotationsValues) : [];

        if (dataAnnotations !== undefined) {
            const annotationsCopy = [...dataAnnotations];
            const indexAnnotationToEdit = annotationsCopy.findIndex(
                (annotation: AnnotationData) => annotation.id === data.id);

            annotationsCopy[indexAnnotationToEdit].completed = !data.completed;
            
            await AsyncStorage.setItem('@toDoList', JSON.stringify(annotationsCopy));
          
        }



    }

    return (
        <Container>
            <GestureHandlerRootView>
                <Swipeable overshootRight={false} renderRightActions={() => (
                    <Animated.View>
                        <View>
                            <GestureHandlerRootView>
                                <ButtonDelete {...rest}>
                                    <Trash />
                                </ButtonDelete>

                            </GestureHandlerRootView>
                        </View>
                    </Animated.View>
                )}>
                    <GestureHandlerRootView>
                        <RectButton style={styles.button} onPress={handleCompleted}>
                            <Notation completed={isCompleted}>
                                {data.note}
                            </Notation>
                            <When>
                                <Light>Feito em</Light>{`\n`}
                                {data.date}
                            </When>
                        </RectButton>
                    </GestureHandlerRootView>

                </Swipeable>
            </GestureHandlerRootView>

        </Container>
    )
}

export const styles = StyleSheet.create({
    button: {
        paddingVertical: 26,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#F5FAF7',
        borderRadius: 20,
        marginBottom: 8,
    }
})