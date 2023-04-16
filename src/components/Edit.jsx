import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Edit = () => {
  const params = useParams(); //gets object with id from path in <Route>

  console.log(params['id']); //gets id

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = `http://localhost:3001/v1/api/posts/${params['id']}`;

    try {
      const response = await axios.get(URL);
      setPostData(response.data);

      setTitle(response.data.title);
      console.log(title);
      setContent(response.data.content);
      console.log(content);

      console.log(JSON.stringify(response));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async () => {
    console.log(title);

    console.log(content);
    const URL = `http://localhost:3001/v1/api/posts/${params['id']}`;
    axios
      .patch(URL, {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);
      });

    setEditing(false);
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  if (!editing) {
    return (
      <>
        <div className="container text-center">
          <h3 className="text-center p-4"> Your Post Has Been Updated </h3>
          <Link to={`/posts`}>
            <button type="button" className="btn btn-primary btn-lg">
              Return to Posts
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="p-4 font-bold display-4">Edit Post</h2>

      <form className="flabel py-3">
        <div className="container">
          <label className="flabel px-3 fs-3">
            <h3> Title </h3>
          </label>

          <div className="">
            <input
              className="flabel"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="container pt-4 text-start">
          <label className="flabel fs-3">
            <h3> Content </h3>
          </label>

          <div>
            <textarea
              className="flabel"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="postContent"
            />
          </div>
        </div>
        {/* <button onClick={postContent}>Submit</button> */}{' '}
        {/* Does not play nice with postContent for some reason :/ */}
      </form>

      <div className="container text-center ">
        <button
          type="button"
          className="btn btn-primary btn-lg mx-3"
          onClick={updateContent}
        >
          Submit
        </button>
        <Link to={`/posts/${postData.id}`}>
          <button
            type="button"
            className="btn btn-danger btn-lg mx-3"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </Link>
      </div>
    </>
  );
};

export default Edit;
