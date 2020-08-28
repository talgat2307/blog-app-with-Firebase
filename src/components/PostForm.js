import React from 'react';

const PostForm = props => {
  return (
    <div>
      <div className='add'>
        <h1>{props.title}</h1>
        <form onSubmit={props.addPost}>
          <div className='title'>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id='title'
              name='title'
              value={props.titleVal}
              onChange={props.handlePostChange}
            />
          </div>
          <div className='description'>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              cols="30"
              rows="10"
              name='description'
              value={props.descriptionVal}
              onChange={props.handlePostChange}
            />
          </div>
          <button>Save</button>
        </form>
      </div>

    </div>
  );
};

export default PostForm;