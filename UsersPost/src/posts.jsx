
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div id="container">
      {posts.map(post => (
        <div className="post" key={('https://jsonplaceholder.typicode.com/posts')}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<Posts />, document.getElementById('root'));