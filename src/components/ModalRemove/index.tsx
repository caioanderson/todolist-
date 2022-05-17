import React from 'react';
import { useTheme } from 'styled-components';
import { StyleSheet } from 'react-native';
import { BorderlessButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import { AnnotationData } from '../Annotation';

import {
    Container, AreaModal, Title, ContainerButtons, TextButtonCancel,
    TextButtonDelete
} from './styles';

interface ModalRemoteProps {
    closeModal: () => void;
    deleteAnnotation: (item: AnnotationData) => void;
    annotation: AnnotationData;
}

export function ModalRemove({ closeModal, deleteAnnotation, annotation }: ModalRemoteProps) {

    const theme = useTheme();

    return (
        <Container>
            <AreaModal>
                <Title>Deseja mesmo deletar{`\n`}essa anotação?</Title>
                <ContainerButtons>

                    <GestureHandlerRootView>
                        <BorderlessButton
                            onPress={closeModal}
                            style={[
                                styled.button,
                                { backgroundColor: theme.colors.gray }
                            ]}
                        >
                            <TextButtonCancel>Cancelar</TextButtonCancel>
                        </BorderlessButton>
                    </GestureHandlerRootView>

                    <GestureHandlerRootView>
                        <BorderlessButton
                            onPress={() => deleteAnnotation(annotation)}
                            style={[
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