import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';

import { useState, useEffect } from 'react';
import Header from './Header';

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(''); //Forward and Back?
  const [postData, setPostData] = useState([]);

  const fetchAPIData = async () => {
    setLoading(true);
    const URL = 'http://localhost:3001/v1/api/posts';


    try{
      const response = await axios.get(URL);
      setPostData(response.data);
      console.log(JSON.stringify(response));

    } catch (error){
      setError(error);
    } finally{
      setLoading(false);
    }

    // const data_received = await axios.get('http://localhost:3001/v1/api/posts');

    // setLoading(false);
    // setPostData(data_received.data);

    try {
      const response = await axios.get(URL);
      setPostData(response.data);
      console.log(JSON.stringify(response));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  if (loading) {
    return (
      <>
        <p>Data Here: {JSON.stringify(postData)}</p>
        <h3 className="text-center p-4"> Loading... </h3>
      </>
    );
  }

  //JSX:
  return (
    <>
      <h2 className="text-center">All Posts</h2>
      <div className="container align-center">
        {postData.map((post) => {
          return (
            <>
              <div className="row top">
                <div className="col-sm-6 py-3 top">
                  <div className="card width-m py-2 top" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                      <div className="card-body">
                        <h3 className="font-bold card-title top">{post.title}</h3>
                        <h6 className="card-subtitle mb-2 text-muted top">
                          (@User)
                        </h6>
                        <p className="card-text">{post.content}</p>
                        <img className='size' src='https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg'></img>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
