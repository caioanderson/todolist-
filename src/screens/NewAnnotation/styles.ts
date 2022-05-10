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
    height: 55%;
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