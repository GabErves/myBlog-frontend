import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Delete = () => {
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

  const deleteContent = async () => {
    console.log(title);

    console.log(content);
    const URL = `http://localhost:3001/v1/api/posts/${params['id']}`;
    axios.delete(URL).then(function (response) {
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
          <h3 className="text-center p-4"> Your Post Has Been Deleted </h3>
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
      <h2 className="p-4 font-bold display-4">Delete Post</h2>

      <div className="container text-center ">
        <div>
          <h3>
            Are you sure you want to
            <span className="font-bold text-danger fw-bolder"> DELETE </span>
            this post?
          </h3>
        </div>

        <div className="container align-center">
          <>
            <div className="row top">
              <div className="col-sm-6 py-3">
                <div className="card width-m py-2">
                  <div className="card-body">
                    <h3 key={postData.id} className="font-bold card-title">
                      {postData.title}
                    </h3>
                    <h6 className="card-subtitle mb-2 text-muted">(@User)</h6>
                    <p className="card-text">{postData.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <button
          type="button"
          className="btn btn-danger btn-lg mx-3"
          onClick={deleteContent}
        >
          Delete
        </button>
        <Link to={`/posts/${postData.id}`}>
          <button
            type="button"
            className="btn btn-primary btn-lg mx-3"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </Link>
      </div>
    </>
  );
};

export default Delete;
