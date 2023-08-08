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
        <div style={{ height: '400px', width: '400px', padding: '20px', background: 'rgb(29, 29, 29, 0.8)', border: '1px solid #rgb(29, 29, 29)' }}>
            <h3 className="spectrum-Heading spectrum-Heading--sizeM">{ id } </h3>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-id">Question ID</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-id" placeholder="q-photo"></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-title">Title</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-title" placeholder="q-title"></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-subtitle">Subtitle</sp-field-label>
                    <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-q-subtitle" placeholder="q-photo"></sp-textfield>
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
        </div>


        <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} isConnectable={isConnectable} />
    </div>
    </>
  );
});

export default QuestionNode;



// import { memo } from 'react';
// import { Handle, Position } from 'reactflow';

// const QuestionNode = memo(({ id, data, updateNodeData, isConnectable }) => {
//   return (
//     <>
//       <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
//       <div style={{ height: '200px', width: '400px', padding: '10px', background: '#fff', border: '10px solid #000' }}>
//         <div>Question Node</div>
//       </div>
//       <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
//     </>
//   );
// });

// export default QuestionNode;



// import React, { memo } from 'react';
// import { Handle } from 'reactflow';

// const QuestionNode = ({ id, data, updateNodeData, isConnectable }) => {

// // const QuestionNode = memo(({ id, data, updateNodeData, isConnectable }) => {
//     // const handleInputChange = (event, key) => {
//     //   event.stopPropagation();
//     //   const newData = {
//     //     ...data,
//     //     [key]: event.target.value,
//     //   };
//     //   updateNodeData(id, newData);
//     // };
  
//     return (
//       <div style={{ height: '200px', width: '400px', padding: '10px', background: '#fff', border: '10px solid #000' }}>
//         <Handle type="target" position="top" style={{ background: '#555' }} />
//         <div>Question Node</div>
//         <Handle type="source" position="bottom" style={{ background: '#555' }} />
//       </div>
//     );
//   // });
//     };

// // const QuestionNode = ({ id, data, updateNodeData }) => {
// //     const [localData, setLocalData] = React.useState(data);
// //     const handleInputChange = (event, key) => {
// //         event.stopPropagation(); // Add this line
      
// //         const newData = {
// //           ...data,
// //           [key]: event.target.value,
// //         };
// //         updateNodeData(id, newData);
// //       };  
// //     // const handleInputChange = (event, key) => {
// //     //   setLocalData({
// //     //     ...localData,
// //     //     [key]: event.target.value,
// //     //   });
// //     // };
  
// //     // const handleBlur = () => {
// //     //   updateNodeData(id, localData);
// //     // };
  
// //     return (
// //       <div style={{ height: '200px', width: '400px', padding: '10px', background: '#fff', border: '10px solid #000' }}>
// //         <Handle type="target" position="top" style={{ background: '#555' }} />
// //         <div>Question Node</div>
// //       <div>
// //       </div>
// //       <Handle type="source" position="bottom" style={{ background: '#555' }} />
// //     </div>
// //   );
// // };

// export default QuestionNode;
