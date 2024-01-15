import React from 'react';

const Post = ({ id, title, body, datecreated, deleteNews }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{title}</h2>
      <p className="post-body">{body}</p>
      <p className="post-date">Date Created: {datecreated}</p>
      <button
        className="btn-delete"
        onClick={() => deleteNews(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Post;