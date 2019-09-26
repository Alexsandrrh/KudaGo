import React from 'react';
import PropTypes from 'prop-types';
import './MessageBlock.scss';

const MessageBlock = ({ title, children }) => {
  return (
    <div className="message-block">
      <h3 className="message-block__title">{title}</h3>
      <div className="message-block__body">{children}</div>
    </div>
  );
};

MessageBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default MessageBlock;
