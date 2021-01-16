import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postContents }) => (
  <div>
    {postContents.split(/(#[^\s#]+)/g).map((postContent, index) => {
      if (postContent.match(/(#[^\s#]+)/)) {
        return (
        // eslint-disable-next-line react/no-array-index-key
          <Link href={`/hashtag/${postContent.slice(1)}`} key={index}>
            <a>{postContent}</a>
          </Link>
        );
      }
      return postContent;
    })}
  </div>
);

PostCardContent.propTypes = { postContents: PropTypes.string.isRequired };

export default PostCardContent;
