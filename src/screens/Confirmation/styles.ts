import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View``;

export const Title = styled.Text`
    text-align: center;
    font-size: 50px;

`;

export const WrapperSubtitle = styled.View`
    margin-top: 64px;
    align-items: center;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semi_bold};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.green_900};
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 17px;
    color: ${({ theme }) => theme.colors.green_900};
`;

