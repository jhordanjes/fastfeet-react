import React from 'react';
import _get from 'lodash/get';
import Badge from '../../../Status';

export default function StatusRender({ data, column }) {
  const text = _get(data, column.field);
  return <Badge color={data.status.color} status={text} />;
}
