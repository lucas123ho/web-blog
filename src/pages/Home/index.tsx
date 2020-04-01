import React, { useState, useEffect } from "react";

// import { Container } from './styles';
import PostList from "src/components/PostList";
import api from "src/services/api";

interface Tag {
  name: string;
}

interface Category {
  name: string;
}

interface Post {
  tags: Tag[];
  title: string;
  description: string;
  category: Category;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await api.get("/posts");
      setPosts(posts);
    }
    getPosts();
  });

  return (
    <>
      {posts.map(post => (
        <PostList
          title={post.title}
          author={{
            image:
              "https://assets.entrepreneur.com/content/3x2/2000/20190502194704-ent19-june-editorsnote.jpeg",
            name: "Lucas Santos Lima",
            office: "Desenvolvedor React Native"
          }}
          image="https://s3.amazonaws.com/creativetim_bucket/products/163/thumb/opt_arn_thumbnail.jpg?1559925384"
          description={post.description}
          category={post.category.name}
          tags={post.tags.map(tag => tag.name).join(', ')}
        />
      ))}
    </>
  );
}
