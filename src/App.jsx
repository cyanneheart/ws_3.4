import { useState, useEffect } from 'react';
import AddNews from './components/addNews.jsx';
import PostNews from './components/postNews.jsx';
import newsData from './records/news.json';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  const fetchNews = () => {
    setPosts(newsData);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const addNew = (title, body) => {
    const newPost = {
      userId: 1, // Assuming a static userId for new posts
      id: posts.length + 1, // Use a unique identifier logic suitable for your app
      title: title,
      body: body,
      datecreated: new Date().toLocaleDateString(), // Current date as a string
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

const deleteNews = (id) => {
  console.log('Deleting post with id:', id);

  setPosts((prevPosts) => {
    const newPosts = prevPosts.filter((post) => post.id !== id);
    console.log('New posts after deletion:', newPosts);
    return newPosts;
  });
};

  return (
    <main>
      <h1>News Feed</h1>
      <AddNews addNew={addNew} />
      <section className="posts-container">
        <h2>News</h2>
        {posts.map((post) => (
          <PostNews
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            datecreated={post.datecreated}
            deleteNews={deleteNews}
          />
        ))}
      </section>
    </main>
  );
}

export default App;