import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 0 32px;
`;

export const Header = styled.Text`
    margin-top: ${getStatusBarHeight() + 50}px;
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: 32px;
    color: ${({ theme }) => theme.colors.green_900};
`;

export const CardInfoToDoList = styled.View`
    margin-top: 34px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blue_100};
    border-radius: 20px;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 16px;
`;

export const Logo = styled.View`
    background-color: ${({ theme }) => theme.colors.blue_300};
    width: 56px;
    height: 56px;
    border-radius: 28px;
`;

export const Icon = styled(Ionicons).attrs({
    name: "book-outline",
    size: 28,
    color: '#4965E9',
})`
    padding: 14px;
` as unknown as typeof Ionicons;

export const Info = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: left;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.blue_700};
`;

export const Content = styled.View`
    flex: 1;
    margin-top: 82px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.green_900};
`;

interface AnnotationData {
    id: string;
    note: string;
    completed: boolean;
    date: string;
}

export const ListAnnotations = styled(
    FlatList as new (props: FlatListProps<AnnotationData>) => FlatList<AnnotationData>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: getBottomSpace() },
})``;

export const Modal = styled.Modal.attrs({
    animationType: "slide",
    transparent: true,
    swipeDirection: ['up', 'left', 'right', 'down']
})`
    margin: 0;
    justify-content: flex-end;
`;

