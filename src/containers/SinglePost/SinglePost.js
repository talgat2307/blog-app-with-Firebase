import React, { useEffect, useState } from 'react';
import axiosPosts from '../../axiosPosts';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const SinglePost = props => {

  const [singlePost, setSinglePost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPosts.get(
        '/posts/' + props.match.params.id + '.json');
      setSinglePost(response.data);
    };

    fetchData().catch(console.error);
  }, [props.match.params.id]);

  const handleDeletePost = async () => {
    setLoading(true);
    try {
      await axiosPosts.delete('/posts/' + props.match.params.id + '.json');
    } finally {
      props.history.replace('/');
      setLoading(false);
    }
  };

  if (loading === true) {
    return <Spinner/>;
  } else {
    return (
      <div className='singlePost'>
        <div className='buttons'>
          <button><Link to={`/posts/${props.match.params.id}/edit`}>Edit</Link>
          </button>
          <button onClick={() => handleDeletePost()}>Delete</button>
        </div>
        <h3>{singlePost.title}</h3>
        <p>{singlePost.description}</p>
      </div>
    );
  }
};

export default SinglePost;