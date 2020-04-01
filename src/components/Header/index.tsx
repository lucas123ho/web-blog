import React from 'react';
import { Container } from 'react-bootstrap';

import { Content, Logo, ContainerHeader } from './styles';

export default function Header() {

  return (
    <ContainerHeader fluid>
      <Container>
        <Content>
          <Logo to="/"> holy <span>Javascript!</span> </Logo>
        </Content>
      </Container>
    </ContainerHeader>
  );
}
