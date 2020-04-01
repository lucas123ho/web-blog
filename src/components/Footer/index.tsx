import React from 'react';

import { Container, Content, Logo, Copy } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <Logo to="/">holy <span>Javascript!</span></Logo>
        <Copy>Copyright holy Javascript! 2020</Copy>
      </Content>
    </Container>
  );
}
