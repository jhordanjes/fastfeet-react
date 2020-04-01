import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ name, avatar }) {
  const span = name.match(/\b(\w)/g);
  return (
    <>
      {avatar ? (
        <img src={avatar.url} alt="Avatar" />
      ) : (
        <>
          <span>{span.slice(0, 2)}</span>
          <p>{name}</p>
        </>
      )}
    </>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    path: PropTypes.string,
  }),
};

Avatar.defaultProps = {
  avatar: null,
};
