import React from 'react';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { Container, Header, IconBack, WrapperContentHeader, Title } from './styles';

import Illustration from '../../assets/illustration.svg';

export function NewAnnotation() {
    return (
        <Container>
            <Header>
                <GestureHandlerRootView>
                    <RectButton>
                        <IconBack name="chevron-back" size={40} />
                    </RectButton>
                </GestureHandlerRootView>


                <WrapperContentHeader>
                    <Title>Criar anotação</Title>
                    <Illustration />
                </WrapperContentHeader>



            </Header>
        </Container>
    )
}