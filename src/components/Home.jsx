import React from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';


const Home = () => {
  return (
    <div>
      {/* <h2 className="text-center">Homepage</h2> */}
      {/* <p className="text-center">Welcome to our blogging site! We are thrilled to have you here. Our site is all about sharing and discovering interesting ideas, stories, and insights. Whether you are a seasoned writer or just starting out, we invite you to join our community of passionate bloggers.</p>

<p className="text-center">Explore our site to discover a wide range of topics, including technology, lifestyle, culture, health, and more. We believe that everyone has a unique perspective to share, and we encourage our writers to express themselves freely and authentically.</p>

<p className="text-center">As a member of our community, you can create your own blog, share your thoughts and ideas, and engage with other bloggers through comments and discussions. We also offer resources and tips to help you improve your writing skills and build your audience.</p>

<p  className="text-center">So what are you waiting for? Start exploring our site and become a part of our vibrant community of bloggers. We can't wait to see what you create!</p> */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hotbeautyhealth.com/wp-content/uploads/2016/02/start-a-lifestyle-blog.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text">Lifestyle Blogging</h3>
            <p className="text">Host your lifestyle blog here!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2022/09/brand_identity.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text">Food Blogging</h3>
            <p className="text">Host your food blog here!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/how_to_start_a_travel_blog_-_article_image.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text">Travel Blogging</h3>
            <p className="text">Host your travel blog here!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
