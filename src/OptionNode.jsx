import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const OptionNode = ({ id, data, updateNodeData, isConnectable }) => {
  const handleInputChange = (event) => {
    const newData = {
      ...data,
      label: event.target.value,
    };
    updateNodeData(id, newData);
  };

  return (
    <div style={{ height: '200px', width: '400px', padding: '20px', background: 'rgb(107, 3, 106, 0.8)', border: '1px solid #rgb(29, 29, 29)', borderRadius: '15px' }}>
    <Handle type="target" position="top" style={{ background: '' }} />
      <h3 className="spectrum-Heading spectrum-Heading--sizeM">Option </h3>
      <div className="spectrum-Form-item">
          <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionID">Option ID</sp-field-label>
              <div className="spectrum-Form-itemField">
              <div className="spectrum-Textfield">
                  <sp-textfield id="node-optionID" placeholder="optionid" ></sp-textfield>
              </div>
          </div>
      </div>      
      <div className="spectrum-Form-item">
          <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionTitle">Title</sp-field-label>
              <div className="spectrum-Form-itemField">
              <div className="spectrum-Textfield">
                  <sp-textfield id="node-optionTitle" placeholder="Option Title" ></sp-textfield>
              </div>
          </div>
      </div>
      <div className="spectrum-Form-item">
          <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionText">Text</sp-field-label>
              <div className="spectrum-Form-itemField">
              <div className="spectrum-Textfield">
                  <sp-textfield id="node-optionText" placeholder="Option Text" ></sp-textfield>
              </div>
          </div>
      </div>
      <div className="spectrum-Form-item">
          <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionImage">Image URL</sp-field-label>
              <div className="spectrum-Form-itemField">
              <div className="spectrum-Textfield">
                  <sp-textfield id="node-optionImage" placeholder="https://" ></sp-textfield>
              </div>
          </div>
      </div>
      <div className="spectrum-Form-item">
          <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionCover">Cover Image URL</sp-field-label>
              <div className="spectrum-Form-itemField">
              <div className="spectrum-Textfield">
                  <sp-textfield id="node-optionCover" placeholder="https://" ></sp-textfield>
              </div>
          </div>
      </div>
<Handle
  type="source"
  position={Position.Bottom}
  id="red" // This is the handle ID that will be used in the CustomConnectionLine
  style={{ background: 'red' }}
  isConnectable={isConnectable}
/>      
      {/* <Handle id="red" type="source" position={Position.Right} style={{ background: 'red' }} isConnectable={isConnectable} /> */}
    </div>
  );
};

export default memo(OptionNode);
