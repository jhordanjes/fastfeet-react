import React from 'react';
import _get from 'lodash/get';

export default function Text({ data, column }) {
  const text = _get(data, column.field);
  return <p>{text}</p>;
}
