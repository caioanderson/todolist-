import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import { NavigationStack } from '../../routes/app.routes';
import { GestureHandlerRootView, BorderlessButton } from 'react-native-gesture-handler';

import {
    Container, Header, IconBack, WrapperContentHeader, Title, Content, Subtitle,
    Input, TextButton, WrapperContent
} from './styles';

import Illustration from '../../assets/illustration.svg';

const widthScreen = Dimensions.get('screen').width - 41;
const bottomSpace = getBottomSpace() + 15;


export function NewAnnotation() {

    const { navigate } = useNavigation<NavigationStack>();

    const [annotation, setAnnotation] = useState('');

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!annotation);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFocused(!!value);
        setAnnotation(value);
    }


    function goBack() {
        navigate('Minhas anotações');
    }

    return (
        <Container>
            <Header>
                <GestureHandlerRootView>
                    <BorderlessButton onPress={goBack}>
                        <IconBack name="chevron-back" size={40} />
                    </BorderlessButton>
                </GestureHandlerRootView>

                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1 }}
                >
                    <WrapperContentHeader>
                        <Title>Criar anotação</Title>
                        <Illustration />
                    </WrapperContentHeader>
                </KeyboardAvoidingView>
            </Header>

            <Content>
                <WrapperContent>
                    <Subtitle>Digite o que deseja anotar</Subtitle>
                    <Input
                        focused={isFocused}
                        filled={isFilled}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                        placeholder='Ex.: Ir ao supercado' />
                </WrapperContent>
                <GestureHandlerRootView>
                    <BorderlessButton
                        enabled={annotation === '' ? false : true}
                        style={[styled.button, { backgroundColor: annotation === '' ? '#A4B2F4' : '#4965E9' }]}>
                        <TextButton>Criar</TextButton>
                    </BorderlessButton>
                </GestureHandlerRootView>

            </Content>

        </Container>
    )
}

const styled = StyleSheet.create({
    button: {
        width: widthScreen,
        height: 56,
        borderRadius: 16,

        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: bottomSpace + 15,
    }


})