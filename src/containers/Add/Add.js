import React, { useState } from 'react';
import axiosPosts from '../../axiosPosts';
import PostForm from '../../components/PostForm';
import Spinner from '../../components/Spinner/Spinner';

const Add = props => {

  const [posts, setPosts] = useState({
    title: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);

  const handlePostChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPosts(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addPosts = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosPosts.post('/posts.json', posts);
    } finally {
      props.history.replace('/');
      setLoading(false);
    }
  };

  if (loading === true) {
    return (<Spinner/>);
  } else {
    return (
      <div>
        <PostForm
          title={'Add new Post'}
          addPost={(e) => addPosts(e)}
          titleVal={posts.title}
          descriptionVal={posts.description}
          handlePostChange={(e) => handlePostChange(e)}
        />
      </div>
    );
  }

};

export default Add;