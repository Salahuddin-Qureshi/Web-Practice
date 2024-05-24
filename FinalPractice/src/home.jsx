import React, { useState } from "react";
import './home.css'

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const handlePostClick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts([...posts, ...data.slice(0, 4)]));
  };

  const handleUserClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers([...users, ...data.slice(0, 4)]));
  };

  return (
    <div id="main-container">
      <div id="post-container">
        <div id="heading">
          <h1>Posts</h1>
          <button id="post-btn" onClick={handlePostClick}>Click Me to add Posts</button>
        </div>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        ))}
      </div>
      <div id="user-container">
        <div id="heading">
          <h1>Users</h1>
          <button id="user-btn" onClick={handleUserClick}>Click Me to add Users</button>
        </div>
        {users.map((user) => (
          <div key={user.id} className="userbox">
            <img
              className="img"
              width={130}
              src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${user.username}`}
              alt={user.username}
            />
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
