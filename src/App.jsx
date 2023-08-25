import React, { useState, useCallback, useRef, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
} from 'reactflow';
import QuestionNode from './QuestionNode';
import OptionNode from './OptionNode';
import Sidebar from './Sidebar';

import '@spectrum-css/vars/dist/spectrum-global.css';
import '@spectrum-css/vars/dist/spectrum-medium.css';
import '@spectrum-css/vars/dist/spectrum-dark.css';
import '@spectrum-css/tokens/dist/index.css';
import '@spectrum-css/page/dist/index-vars.css';
import '@spectrum-css/typography/dist/index.css';
import '@spectrum-css/icon/dist/index.css';
import '@spectrum-css/button/dist/index.css';
import '@spectrum-css/accordion/dist/index.css';
import '@spectrum-css/site/skin.css';
import '@spectrum-css/fieldlabel/dist/index-vars.css';
import '@spectrum-css/fieldlabel/dist/index.css';
import '@spectrum-css/textfield/dist/index.css';
import '@spectrum-css/textfield/dist/index-vars.css';

import 'reactflow/dist/style.css';

let id = 1;
const getId = () => `node${id++}`;

const QuizEditor = () => {
  const nodeTypes = useMemo(() => ({ 
    question: QuestionNode,
    option: OptionNode,
  }), []);

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [customNodeId, setCustomNodeId] = useState(null);

const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const { project } = useReactFlow();

  // const handleUpdateNodeData = (id, newData) => {
  //   setNodes((prevNodes) => 
  //     prevNodes.map((node) => 
  //       node.id === id ? { ...node, data: newData } : node
  //     )
  //   );
  // };
  
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onNodesChange = useCallback( (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),[] );
  const onEdgesChange = useCallback( (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),[] );

  
const handleCustomNodeIdChange = (newId) => {
    setCustomNodeId(newId);
};


const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains('react-flow__pane');
  
      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          type: 'option', // specify the type as 'option'
          data: { label: `Option ${id}` },
          position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
        };
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
      }
    },
    [project]
  );

  const addQuestion = () => {
    const newId = customNodeId || getId();
    const newNode = {
      id: newId,
      type: 'question',
      data: { label: `Question ${newId}`, product1: '', product2: '' },
      position: { x: id * 450, y: 100 },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  const exportData = () => {
    const quiz = nodes
      .filter((el) => el.type === 'question')
      .map((el) => ({
        question: el.data.label,
        product1: el.data.product1,
        product2: el.data.product2,
      }));
    const json = JSON.stringify(quiz, null, 2);
    console.log(json);
  };

  return (
    <div className="wrapper flex" ref={reactFlowWrapper} style={{ height: '100vh' }}>
      <Sidebar addQuestion={addQuestion} exportData={exportData} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        panOnScroll
        selectionOnDrag       
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange} 
        elementsSelectable={true} // This prop ensures that nodes are selectable
        // updateNodeData={handleUpdateNodeData} // Pass the function as a prop
      >
        <Background color="#aaa" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <QuizEditor />
  </ReactFlowProvider>
);