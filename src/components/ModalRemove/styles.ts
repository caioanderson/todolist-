import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    padding: 0 55px;
`;

export const AreaModal = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 45px 29px;
    width: 100%;
    align-items: center;
    border-radius: 20px;
    elevation: 20;
`;

export const Title = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.green_900};
`;

export const ContainerButtons = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
`;

export const ButtonCancel = styled(BorderlessButton)`
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 12px;

`;

export const TextButtonCancel = styled.Text`
    font-size: 15px;
    text-align: center;
    padding: 25px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.green_900};
`;

export const ButtonDelete = styled(BorderlessButton)`
    background-color: ${({ theme }) => theme.colors.background_delete};
    border-radius: 12px;
`;

export const TextButtonDelete = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 15px;
    padding: 25px;
    color: ${({ theme }) => theme.colors.delete};
`;