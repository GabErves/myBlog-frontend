import React from 'react';
import Header from './Header';
import './Header.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postData, setPostData] = useState([]);

  const postContent = async () => {
    console.log(title);
    const URL = 'http://localhost:3001/v1/api/posts';
    axios
      .post(URL, {
        title: title,
        content: content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setContent('');
    setTitle('');
  };

  return (
    <>
      <h2 className="p-4 font-bold display-4">Create Post</h2>

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
          className="btn btn-primary btn-lg"
          onClick={postContent}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Create;
