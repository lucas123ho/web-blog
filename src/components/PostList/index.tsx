import React from "react";

import { Container, Title, Cover, Description, Info } from "./styles";
import Author from "src/components/Author";

export default function PostList() {
  return (
    <Container to="/">
      <Title>Minha primeiro aplicativo usando React Native</Title>
      <Author
        image="https://assets.entrepreneur.com/content/3x2/2000/20190502194704-ent19-june-editorsnote.jpeg"
        name="Lucas Santos Lima"
        office="Desenvolvedor Mobile"
      />
      <Cover
        style={{
          backgroundImage:
            "url(https://assets.materialup.com/uploads/24c05883-b595-447b-99bb-d764ffe43d50/preview.png)"
        }}
      />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla
      </Description>
      <Info>
        <span>Categoria: </span> React Native | <span>Tags: </span> tutorial, firstapp
      </Info>
    </Container>
  );
}
