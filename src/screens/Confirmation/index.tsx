import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationStack } from '../../routes';
import { Container, Content, Title, WrapperSubtitle, Subtitle, Text, } from './styles';

export function Confirmation() {

    const { navigate } = useNavigation<NavigationStack>();

    function goHome() {
        navigate('Minhas anotações');
    }

    useEffect(() => {
        setTimeout(() => {
            goHome();
        }, 2000)
    }, [])

    return (
        <Container>
            <Content>
                <Title>😁</Title>
                <WrapperSubtitle>
                    <Subtitle>Prontinho</Subtitle>
                    <Text>Sua anotação foi criada</Text>
                </WrapperSubtitle>
            </Content>
        </Container>
    )
}