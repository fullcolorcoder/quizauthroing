/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useCallback, useRef, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
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
import CustomConnectionLine from './CustomConnectionLine';

import 'reactflow/dist/style.css';

import useStore from './store';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});
let id = 1;
const getId = () => `node${id++}`;




const QuizEditor = () => {
  const nodeTypes = useMemo(() => ({
    question: QuestionNode,
    option: OptionNode,
  }), []);

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const connectingHandleId = useRef(null);

  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const { project } = useReactFlow();


  const onConnect = useCallback((params) => {
    // Example: setting custom style based on sourceHandleId
    let customStyle = {};
    switch (params.sourceHandle) {
      case 'red':
        customStyle = { stroke: 'red' };
        break;
      case 'yellow':
        customStyle = { stroke: 'yellow' };
        break;
      // Add more cases as needed
      default:
        customStyle = { stroke: '#fff' }; // Default style
    }
  
    const newEdge = {
      ...params,
      // style: customStyle,
    };
    setEdges((eds) => addEdge(newEdge, eds));
  }, [setEdges]);

  // const onConnect = useCallback(
  //   (params) => {
  //     // Ensure that the edge object includes a sourceHandle property
  //     const newEdge = {
  //       ...params,
  //       style: { stroke: '#fff' }, // example of adding a default style
  //       // additional properties can be included here if necessary
  //     };
  
  //     setEdges((eds) => addEdge(newEdge, eds));
  //   },
  //   [setEdges]
  // );

  // const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  
  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  const onConnectStart = useCallback((event, { nodeId, handleId }) => {
    connectingNodeId.current = nodeId; // Capture the node ID
    connectingHandleId.current = handleId; // Capture the handle ID
  }, []);
  

  const onConnectEnd = useCallback(
    (event) => {
      console.log(event, "event");
      const targetIsPane = event.target.classList.contains('react-flow__pane');
      if (targetIsPane) {
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        console.log(id, "id");
        const newNode = {
          id,
          type: 'option',
          data: { label: `Option ${id}` },
          position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
        };
        const newEdge = {
          id: `e${connectingNodeId.current}-${id}`,
          source: connectingNodeId.current,
          target: id,
          sourceHandle: connectingHandleId.current,
          style: { stroke: 'blue' }, // example of adding a default style
        };
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => addEdge(newEdge, eds));
      }
    },
    [project]
  );
  

  // const customConnectionLineStyle = {
  //   stroke: 'red', // Example color
  //   strokeWidth: 1.5
  //   // Add other style properties as needed
  // };

  const addQuestion = () => {
    // const newId = customNodeId || getId();
    const newId = getId();
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
        // connectionLineComponent={CustomConnectionLine}
        elementsSelectable={true} // This prop ensures that nodes are selectable
        // connectionLineComponent={(props) => <CustomConnectionLine {...props} />}
        // connectionLineComponent={(edgeProps) => (
        //   <CustomConnectionLine
        //     {...edgeProps}
        //     sourceHandle={edgeProps.edge.sourceHandle} // Pass the source handle ID to the connection line
        //   />
        // )}
        connectionLineComponent={(props) => <CustomConnectionLine {...props} />}
        // connectionLineComponent={(edgeProps) => <CustomConnectionLine {...edgeProps} />}

      // updateNodeData={handleUpdateNodeData} // Pass the function as a prop
      >
        
        <Background color="#aaa" gap={20} />
        
        <MiniMap
          nodeColor={(n) => {
            if (n.type === "question") return "#ccc";
            if (n.type === "option") return "pink";
            if (n.type === "default") return "#ccc";
            return "#eee";
          }}
          nodeBorderRadius={2}
         />
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