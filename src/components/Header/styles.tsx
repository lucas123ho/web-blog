import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const ContainerHeader = styled(Container)`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.5s ease-in-out;
  z-index: 999;
`;

export const Content = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  font-size: ${fonts.sizes.medium};
  font-weight: 400;

  span {
    font-weight: 900;
    color: ${colors.yellow};
  }

  &:hover {
    color: ${colors.black};
  }
`;
