import React, { useEffect, useState } from 'react';
import axiosPosts from '../../axiosPosts';
import { Link } from 'react-router-dom';

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postResponse = await axiosPosts.get('/posts.json');
      const arr = [];
      for (let key in postResponse.data) {
        if (postResponse.data.hasOwnProperty(key)) {
          arr.push({
            ...postResponse.data[key],
            id: key,
          });
        }
      }
      setPosts(arr);
    };

    fetchData().catch(console.error);

  }, []);

  if (posts[0] === undefined) {
    return (
      <div className='main'>
        <h1><Link to='/posts/add'>Please add new Post</Link></h1>
      </div>
    );
  } else {
    return (
      <>
        {
          posts.map(post => {
            return (
              <div key={post.id} className='posts'>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button><Link to={`/posts/${post.id}`}>Read More</Link></button>
              </div>
            );
          })
        }
      </>
    );
  }
};

export default Home;