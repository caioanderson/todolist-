import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import LottieView from "lottie-react-native";

import { Annotation, AnnotationData } from '../../components/Annotation';
import { ModalRemove } from '../../components/ModalRemove';

import {
    Container, Header, CardInfoToDoList, Logo, Icon, Info, Content, Title,
    ListAnnotations, Modal, ContainerAnimation
} from './styles';
import animation from '../../assets/book.json';

export function Home() {

    const [visibleModal, setVisibleModal] = useState(false);
    const [annotations, setAnnotations] = useState([]);

    const [annotationSelected, setAnnotationSelected] = useState<AnnotationData>();
    const [reloadList, setReloadList] = useState(false);

    function onPressCloseModal() {
        setVisibleModal(!visibleModal);
    }

    function onPressOpenModal(item: AnnotationData) {
        setVisibleModal(true);
        setAnnotationSelected(item);

    }

    async function getData() {
        try {
            const annotationsValues = await AsyncStorage.getItem('@toDoList');
            const data = annotationsValues !== null ? JSON.parse(annotationsValues) : [];
            setAnnotations(data);
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteData() {
        await AsyncStorage.removeItem('@toDoList');
        await AsyncStorage.clear();
    }

    async function deleteAnnotation(item: AnnotationData) {
        const annotationsCopy = [...annotations];
        const indexAnnotationToDelete = annotationsCopy.findIndex(
            (annotation: AnnotationData) => annotation.id === item.id);

        annotationsCopy.splice(indexAnnotationToDelete, 1);

        await AsyncStorage.setItem('@toDoList', JSON.stringify(annotationsCopy));
        setReloadList(!reloadList);
        onPressCloseModal();
    }

    useEffect(() => {
        getData();
    }, [reloadList]);

    useFocusEffect(useCallback(() => {
        getData();
    }, []));

    return (
        <Container>
            <Header>To do list</Header>

            <CardInfoToDoList>
                <Logo>
                    <Icon />
                </Logo>

                <Info>Você tem {annotations.length} anotações{`\n`}cadastradas</Info>
            </CardInfoToDoList>

            <Content>
                <Title>Todas as anotações</Title>

                {annotations.length !== 0 ?
                    <ListAnnotations
                        data={annotations}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) =>
                            <Annotation key={item.id} data={item} onPress={() => onPressOpenModal(item)} />
                        }
                    /> :
                    <ContainerAnimation>
                        <LottieView
                            source={animation}
                            loop
                            autoPlay
                            resizeMode='contain'
                            autoSize
                        />
                    </ContainerAnimation>
                }


                {annotationSelected !== undefined &&
                    <Modal visible={visibleModal}>
                        <ModalRemove
                            closeModal={onPressCloseModal}
                            deleteAnnotation={() => deleteAnnotation(annotationSelected)}
                            annotation={annotationSelected}
                        />
                    </Modal>
                }
            </Content>


        </Container>
    )
}