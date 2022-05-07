import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
`;

export const AreaModal = styled.View`
    width: 100%;
    height: 40px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.shape};
    align-items: center;
`;

export const Teste = styled.Text``