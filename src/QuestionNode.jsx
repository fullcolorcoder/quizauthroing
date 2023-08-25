/* eslint-disable react/display-name */
import React, { memo } from 'react';
import { Handle, Position, useStore } from 'reactflow';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/number-field/sp-number-field.js';
import './QuestionNode.css'

const QuestionNode = memo(({ id, data, isConnectable }) => {
  // Accessing node dimensions if needed
  const size = useStore((s) => {
    const node = s.nodeInternals.get(id);
    return {
      width: node.width,
      height: node.height,
    };
  });

  console.log(id, " id");
  console.log(data, " data");

  return (
    <>
     <div className="question">
        <Handle type="target" position={Position.Top} style={{ background: 'none' }} isConnectable={isConnectable} />
        <div style={{ height: '300px', width: '400px', padding: '20px', background: 'rgb(29, 29, 29, 0.5)', border: '1px solid #rgb(29, 29, 29)', borderRadius: '15px' }}>
            <h3 className="spectrum-Heading spectrum-Heading--sizeM">Question </h3>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-id">Question ID</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-id" placeholder="q-photo" ></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-title">Title</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-title" placeholder="What do you want to do today?"></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-subtitle">Subtitle</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-subtitle" placeholder="Pick up to 3"></sp-textfield>
                    </div>
                </div>
            </div>

            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-btn">Button Label</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-btn" placeholder="Next"></sp-textfield>
                    </div>
                </div>
            </div>         


            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-imagebg">Background Image URL</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-imagebg" placeholder="https://"></sp-textfield>
                    </div>
                </div>
            </div>                        

            <div className="spectrum-Form-item">
                <label className="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--left" htmlFor="node-q-min-sel">Min Selections</label>
                <div className="spectrum-Form-itemField">
                <div className="spectrum-Stepper">
                    <div className="spectrum-Textfield spectrum-Stepper-textfield">
                    <sp-number-field label="Size" value="1" size="m"  style={{ "--spectrum-stepper-width": "110px" }}></sp-number-field>
                    </div>
                </div>
                </div>
            </div>

            <div className="spectrum-Form-item">
                <label className="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--left" htmlFor="node-q-max-sel">Max Selections</label>
                <div className="spectrum-Form-itemField">
                <div className="spectrum-Stepper">
                    <div className="spectrum-Textfield spectrum-Stepper-textfield">
                    <sp-number-field label="Size" value="3" size="m"  style={{ "--spectrum-stepper-width": "110px" }}></sp-number-field>
                    </div>
                </div>
                </div>
            </div>

            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-footerFrag">Footer Fragment URL</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-footerFrag" placeholder="https://"></sp-textfield>
                    </div>
                </div>
            </div>
        </div>
        <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} isConnectable={isConnectable} />
    </div>
    </>
  );
});

export default QuestionNode;