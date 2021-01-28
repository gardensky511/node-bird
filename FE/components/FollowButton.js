import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector((state) => state.user);
  const isFollowing = me?.Followings.find((following) => following.id === post.User.id);
  const handleFollow = () => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  };
  return (
    <Button loading={followLoading || unfollowLoading} onClick={handleFollow}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
