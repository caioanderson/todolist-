import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    padding: 0 30px;
    padding-top: ${getStatusBarHeight() + 34}px;
    background-color: ${({ theme }) => theme.colors.gray};
    height: 50%;
    width: 100%;

`;

export const IconBack = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.green_900};
`;

export const WrapperContentHeader = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.green_900};
    margin-bottom: 33px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 41px;
`;

export const WrapperContent = styled.View`
    width: 100%;
`;

export const Subtitle = styled.Text`
    margin: 33px 0;
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    font-size: 24px;
    color : ${({ theme }) => theme.colors.green_900};
`;


interface InputProps {
    focused: boolean;
    filled: boolean;
}

export const Input = styled.TextInput<InputProps>`
    border-bottom-width: 1px;
    border-color: ${(
    { theme, focused, filled }) =>
        (focused || filled) ? theme.colors.blue_700 : theme.colors.green_300
    };
    color: ${({ theme }) => theme.colors.green_900};
    width: 100%;
    font-size: 18px;    
    padding: 10px;
    text-align: center;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
    font-size: 17px;
`;