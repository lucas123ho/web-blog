import styled from 'styled-components';
import { Container as C, Row as R } from 'react-bootstrap';

export const Container = styled.div``;

export const Content = styled(C)`
    padding-top: calc(64px + 65px);
    min-height: 100vh;
`

export const Row = styled(R)`
    justify-content: center;
`;