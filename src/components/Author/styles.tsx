import styled from 'styled-components';

import { fonts, colors } from 'src/styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Photo = styled.div`
    height: 48px;
    width: 48px;
    background-position: center;
    background-size: cover;
    margin-right: 16px;
    border-radius: 24px;
`;

export const ContainerText = styled.div`
    h3 {
        font-size: ${fonts.sizes.normal};
        font-weight: 400;
        line-height: ${fonts.lineHeight.normal};
        color: ${colors.black};
    }

    h4 {
        font-size: ${fonts.sizes.small};
        font-weight: 400;
        line-height: ${fonts.lineHeight.small};
        color: ${colors.black};
    }
`;
