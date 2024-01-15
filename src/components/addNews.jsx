import { useState } from 'react';

export default function AddNews(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [datecreated, setDateCreated] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew(title, body, datecreated); // Include datecreated in the function call
    setTitle('');
    setBody('');
    setDateCreated('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new News</h2>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className="input-container">
        <label htmlFor="datecreated">Date Created</label>
        <input
          name="datecreated"
          type="date"
          value={datecreated}
          onChange={(e) => setDateCreated(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-submit">
        Add News
      </button>
    </form>
  );
}
