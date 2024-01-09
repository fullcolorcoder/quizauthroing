/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { getStraightPath, useStore } from 'reactflow';
import PropTypes from 'prop-types';

// const CustomConnectionLine = (props) => {
  const CustomConnectionLine = ({ markerEnd, fromX, fromY, toX, toY, fromHandle, style = {},  }) => {
    const { connectionHandleId } = useStore();
    console.log(connectionHandleId, "connectionHandleId")
  //   console.log('props')
  // console.log(props)
  let strokeColor = 'black';
  let labelText = '';
  let dashArray = '';

  console.log(fromHandle.id, "fromHandle")

  // Determine the style based on the source handle ID
  switch (fromHandle.id) {
    case 'red':
      strokeColor = 'red';
      labelText = 'RESET';
      dashArray = '4';
      break;
    case 'yellow':
      strokeColor = 'yellow';
      labelText = 'NOT';
      dashArray = '4';
      break;
    case 'green':
      strokeColor = 'green';
      labelText = 'AND';
      dashArray = '4';
      break;
    default:
      break;
  }

  // Calculate mid-point for the label
  const midX = (fromX + toX) / 2;
  const midY = (fromY + toY) / 2;

  return (
    <g>
      <path
        fill="none"
        stroke={strokeColor}
        style={{
          stroke: strokeColor,
        }}
        strokeWidth={2}
        className="animated react-flow__edge-path"
        strokeDasharray={dashArray}
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      {labelText && <text x={midX} y={midY} fill={strokeColor}>{labelText}</text>}
    </g>
  );
};

export default CustomConnectionLine;