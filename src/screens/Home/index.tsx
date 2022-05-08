import React, { useState } from 'react';

import { Annotation } from '../../components/Annotation';
import { ModalRemove } from '../../components/ModalRemove';

import {
    Container, Header, CardInfoToDoList, Logo, Icon, Info, Content, Title,
    ListAnnotations, Modal
} from './styles';

export function Home() {

    const [visibleModal, setVisibleModal] = useState(false);

    const dataAnnotations = [
        {
            id: '1',
            note: 'Regar plantas',
            completed: false,
            date: Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
            }).format(new Date())

        },
        {
            id: '2',
            note: 'Fazer compras',
            completed: true,
            date: Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
            }).format(new Date())
        },
        {
            id: '3',
            note: 'Comida do cachorro',
            completed: false,
            date: Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
            }).format(new Date())
        },
        {
            id: '4',
            note: 'Terminar atividade',
            completed: false,
            date: Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
            }).format(new Date())
        },
        {
            id: '5',
            note: 'Entregar trabalho',
            completed: false,
            date: Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
            }).format(new Date())
        },
        {
            id: '6',
            note: 'Aula as 5h',
            completed: false,
            date: Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
            }).format(new Date())
        },

    ]

    return (
        <Container>
            <Header>To do list</Header>

            <CardInfoToDoList>
                <Logo>
                    <Icon />
                </Logo>

                <Info>Você tem {dataAnnotations.length} anotações{`\n`}cadastradas</Info>
            </CardInfoToDoList>

            <Content>
                <Title>Todas as anotações</Title>

                <ListAnnotations
                    data={dataAnnotations}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Annotation key={item.id} data={item} />}
                />

            </Content>

            <Modal visible={false}>
                <ModalRemove />
            </Modal>

        </Container>
    )
}