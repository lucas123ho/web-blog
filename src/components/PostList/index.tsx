import React from "react";

import { Container, Title, Cover, Description, Info } from "./styles";
import Author, {AuthorProps} from "src/components/Author";

interface PostLisProps {
  title: string;
  author: AuthorProps;
  image?: string;
  description: string;
  category?: string;
  tags?: string;
  
}

export default function PostList({ 
  title,
  author,
  image,
  description,
  category,
  tags
}: PostLisProps) {
  return (
    <Container to="/">
      <Title>{title}</Title>
      <Author
        image={author?.image}
        name={author?.name}
        office={author?.office}
      />
      <Cover
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <Description>{description}</Description>
      <Info>
        <span>Categoria: </span> {category} | <span>Tags: </span> {tags}
      </Info>
    </Container>
  );
}
