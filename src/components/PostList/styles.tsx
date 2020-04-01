import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fonts, colors } from 'src/styles';

export const Container = styled(Link)`
    margin-bottom: 76px;
`;

export const Title = styled.h2`
    font-size: ${fonts.sizes.big};
    font-weight: 700;
    line-height: ${fonts.lineHeight.big};
    margin-bottom: 16px;
`;

export const Cover = styled.div`
    height: 300px;
    width: 100%;
    margin: 20px 0px;
    background-position: center;
    background-size: cover;
`;

export const Description = styled.div`
    font-size: ${fonts.sizes.normal};
    font-weight: 200;
    color: ${colors.black};
`;

export const Info = styled.div`
    font-size: ${fonts.sizes.small};
    margin-top: 20px;
    color: ${colors.black};

    span {
        font-weight: 700;
    }
`;

