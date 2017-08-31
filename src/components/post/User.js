import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const User = props => {
    const { post } = props;
    return (
        <div className="user">
            {post.user ? (
                <div>
                    <img src={post.user.profilePicture} width={50} height={50} alt={post.content} />
                    <a>{post.user.name}</a>
                    <small className="date pull-right">{moment(post.date).fromNow()}</small>
                </div>
            ) : (
                <span>
                    Anonymous user <i className="fa fa-user" />
                </span>
            )}
        </div>
    );
};

User.propTypes = {
    post: PropTypes.object.isRequired
};

export default User;
