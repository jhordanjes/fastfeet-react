import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import Avatar from '../../../Avatar';

export default function Deliveryman({ data, column }) {
  const { name, avatar } = _get(data, column.field);
  return (
    <>
      <Avatar name={name} avatar={avatar} />
    </>
  );
}

Deliveryman.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.shape({
      url: PropTypes.string,
      path: PropTypes.string,
    }),
  }),
  column: PropTypes.shape({
    field: PropTypes.string,
  }).isRequired,
};

Deliveryman.defaultProps = {
  data: null,
};
