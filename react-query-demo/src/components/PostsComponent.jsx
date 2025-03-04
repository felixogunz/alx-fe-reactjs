["cacheTime", "staleTime", "refetchOnWindowFocus", "keepPreviousData"]

// src/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const { data: posts, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred...</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      {posts &&
        posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

export default PostsComponent;