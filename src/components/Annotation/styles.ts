import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather,  } from '@expo/vector-icons';

export const Container = styled.View`
    margin-top: 16px; 
`
interface NotationProps{
    completed : boolean;
}

export const Notation = styled.Text<NotationProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 17px;

    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
    opacity: ${({ completed }) => completed ? '0.6' : '1'};

`;

export const When = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.green_900};
    font-size: 13px;
`;

export const Light = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.green_300};
`;


export const ButtonDelete = styled(RectButton)`
    width: 100px;
    height: 85px;
    background-color: ${({ theme }) => theme.colors.delete};
    margin-top: 5px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    position: relative;
    right: 20px;
    
`;

export const Trash = styled(Feather).attrs({
    name: 'trash',
    size: 32,
    color: '#fff'
})``;