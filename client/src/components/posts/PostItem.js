import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const PostItem = ({
  auth,
  post: {
    _id, 
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date
  } 
}) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img
            class="round-img"
            src={ avatar }
            alt=""
          />
          <h4>{ name }</h4>
        </a>
      </div>
      <div>
        <p class="my-1">
          { text }
        </p>
          <p class="post-date">
            Posted on <Moment format="YYYY/MM/DD">{ date }</Moment>
        </p>
        <button type="button" class="btn btn-light">
          <FontAwesomeIcon icon={ faThumbsUp } /> {' '}
          { likes.length > 0 && (
            <span>{ likes.length }</span>
          )}
        </button>
        <button type="button" class="btn btn-light">
          <FontAwesomeIcon icon={ faThumbsDown } />
        </button>
        <Link to={`/post/${_id}`} class="btn btn-primary">
          Discussion {' '}
          { comments.length > 0 && (
            <span class='comment-count'>{ comments.length }</span>
          )}
        </Link>
        { !auth.loading && user === auth.user._id && (
          <button
          type="button"
          class="btn btn-danger"
          >
            <FontAwesomeIcon icon={ faTimes } />
          </button>
        )}
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(PostItem);