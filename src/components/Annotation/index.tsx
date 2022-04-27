import React, { useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';

import { Container, Notation, When, Light, ButtonDelete, Trash } from './styles';

interface AnnotationData {
    note: string;
    completed: boolean;
    date: string;
}

interface AnnotationProps {
    data: AnnotationData;
}

export function Annotation({ data }: AnnotationProps) {

    const [isCompleted, setIsCompleted] = useState(data.completed);

    function handleCompleted() {
        setIsCompleted(!isCompleted)
    }

    return (
        <Container>
            <GestureHandlerRootView>
                <Swipeable overshootRight={false} renderRightActions={() => (
                    <Animated.View>
                        <View>
                            <GestureHandlerRootView>
                                <ButtonDelete>
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