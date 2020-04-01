import React from "react";

import { Container, Photo, ContainerText } from "./styles";

interface AuthorProps {
  image?: string;
  name: string;
  office: string;
}

export default function Author({ image, name, office }: AuthorProps) {
  return (
    <Container>
      <Photo
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <ContainerText>
        <h3>{name}</h3>
        <h4>{office}</h4>
      </ContainerText>
    </Container>
  );
}
