import styled from 'styled-components';
import { Container as C } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { fonts, colors } from 'src/styles';

export const Container = styled(C).attrs({
    fluid: true
})`
    background-color: ${colors.black};
    color: ${colors.white};
`;

export const Content = styled(C)`
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Logo = styled(Link)`
    font-size: ${fonts.sizes.medium};
    font-weight: 400;
    color: ${colors.white};
    margin-bottom: 18px;

    span {
        font-weight: 900;
        color: ${colors.yellow};
    }

    &:hover{
        color: ${colors.white};
    }
`;

export const Copy = styled.div`
    font-size: ${fonts.normal};
    font-weight: 400;
`;


