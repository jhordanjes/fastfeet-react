import React, { memo } from 'react';
import Text from './textRender';
import Deliveryman from './deliverymanRender';
import Status from './statusRender';

function RenderItem({ data, column }) {
  if (column.type === 'text') return <Text data={data} column={column} />;
  if (column.type === 'deliveryman')
    return <Deliveryman data={data} column={column} />;
  if (column.type === 'status') return <Status data={data} column={column} />;
}

export default memo(RenderItem);
