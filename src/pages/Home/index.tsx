import React, { useState, useEffect } from "react";

// import { Container } from './styles';
import PostList from "src/components/PostList";
import api from "src/services/api";
import { url as apiURL } from "src/api.config";

interface Tag {
  name: string;
}

interface Category {
  name: string;
}

interface Image {
  url: string
}

interface Author {
  name: string;
  office: string;
  image: Image;
}

interface Post {
  tags: Tag[];
  title: string;
  description: string;
  category: Category;
  image: Image;
  author: Author;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await api.get("/posts?_sort=createdAt:DESC");
      setPosts(posts);
    }
    getPosts();
  }, []);

  return (
    <>
      {posts.map(post => (
        <PostList
          key={post.title}
          title={post.title}
          author={{
            image: `${apiURL}${post.author.image.url}`,
            name: post.author.name,
            office: post.author.office
          }}
          image={`${apiURL}${post.image.url}`}
          description={post.description}
          category={post.category.name}
          tags={post.tags.map(tag => tag.name).join(', ')}
        />
      ))}
    </>
  );
}
