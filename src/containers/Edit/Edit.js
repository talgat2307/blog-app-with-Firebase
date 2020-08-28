import React, { useEffect, useState } from 'react';
import PostForm from '../../components/PostForm';
import axiosPosts from '../../axiosPosts';

const Edit = props => {

  const [editedPost, setEditedPost] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPosts('/posts/' + props.match.params.id + '.json');
      setEditedPost(response.data);
    }

    fetchData().catch(console.error)

  }, [props.match.params.id])

  const handlePostChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditedPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addEditedPosts = async (e) => {
    e.preventDefault();
    try {
      await axiosPosts.put('/posts/' + props.match.params.id +'.json', editedPost);
    } finally {
      props.history.replace('/');
    }
  };

  return (
    <>
      <PostForm
        title='Edit Post'
        titleVal={editedPost.title}
        descriptionVal={editedPost.description}
        handlePostChange={(e) => handlePostChange(e)}
        addPost={(e) => addEditedPosts(e)}
      />
    </>
  );
};

export default Edit;