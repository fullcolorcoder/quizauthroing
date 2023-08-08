import React from 'react';
import { Handle } from 'reactflow';

const OptionNode = ({ id, data, updateNodeData }) => {
  const handleInputChange = (event) => {
    const newData = {
      ...data,
      label: event.target.value,
    };
    updateNodeData(id, newData);
  };

  return (
    <div style={{ border: '10px solid green' }}>
      <Handle type="target" position="top" style={{ background: '#555' }} />
      <div>Option Node</div>
      {/* <input
        type="text"
        className=""
        value={data.label}
        onChange={handleInputChange}
      /> */}
      <Handle type="source" position="bottom" style={{ background: '#555' }} />
    </div>
  );
};

export default OptionNode;
