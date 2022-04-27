import React, { useState } from 'react';

import { Annotation } from '../../components/Annotation';

import {
    Container, Header, CardInfoToDoList, Logo, Icon, Info, Content, Title,
} from './styles';

export function Home() {

    const data = [
        {
            note: 'Regar plantas',
            completed: false,
            date: '24/07'
        },
        {
            note: 'Fazer compras',
            completed: true,
            date: '24/07'
        },
        {
            note: 'Comida do cachorro',
            completed: false,
            date: '24/07'
        },

    ]

    return (
        <Container>
            <Header>To do list</Header>

            <CardInfoToDoList>
                <Logo>
                    <Icon />
                </Logo>

                <Info>Você tem x anotações{`\n`}cadastradas</Info>
            </CardInfoToDoList>

            <Content>
                <Title>Todas as anotações</Title>


                {data.map((item, index) => <Annotation key={index} data={item} />)}


            </Content>

        </Container>
    )
}