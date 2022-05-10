import React, { useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView, RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Container, Notation, When, Light, ButtonDelete, Trash } from './styles';

interface AnnotationData {
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