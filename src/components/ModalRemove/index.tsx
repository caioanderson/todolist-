import React from 'react';
import { useTheme } from 'styled-components';
import { StyleSheet } from 'react-native';
import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler';

import {
    Container, AreaModal, Title, ContainerButtons, ButtonCancel,
    TextButtonCancel, ButtonDelete, TextButtonDelete
} from './styles';

export function ModalRemove() {

    const theme = useTheme();

    return (
        <Container>
            <AreaModal>
                <Title>Deseja mesmo deletar{`\n`}essa anotação?</Title>
                <ContainerButtons>
                    
                    <GestureHandlerRootView>
                        <BorderlessButton style={[
                            styled.button,
                            { backgroundColor: theme.colors.gray }
                        ]}
                        >
                            <TextButtonCancel>Cancelar</TextButtonCancel>
                        </BorderlessButton>
                    </GestureHandlerRootView>

                    <GestureHandlerRootView>
                        <BorderlessButton style={[
                            styled.button,
                            { backgroundColor: theme.colors.background_delete }
                        ]}
                        >
                            <TextButtonDelete>Deletar</TextButtonDelete>
                        </BorderlessButton>
                    </GestureHandlerRootView>

                </ContainerButtons>
            </AreaModal>
        </Container>
    )
}

const styled = StyleSheet.create({
    button: {
        borderRadius: 12
    }
})