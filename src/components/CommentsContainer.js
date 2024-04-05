import React, { useState } from 'react';
import useNode from "../hooks/useNode";
import Comment from './Comment';

const commentsInitialState = {
    id: 1,
    items: [],
};

const CommentsContainer = () => {
    const [commentsData, setCommentsData] = useState(commentsInitialState);
    
    const { insertNode, editNode, deleteNode } = useNode();

    const handleInsertNode = (folderId, item) => {
      const finalStructure = insertNode(commentsData, folderId, item);
      setCommentsData(finalStructure);
    };
  
    const handleEditNode = (folderId, value) => {
      const finalStructure = editNode(commentsData, folderId, value);
      setCommentsData(finalStructure);
    };
  
    const handleDeleteNode = (folderId) => {
      const finalStructure = deleteNode({ ...commentsData }, folderId);
      setCommentsData(finalStructure);
    };
    
    return (
        <Comment
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            comment={commentsData}
        />
    );
};

export default CommentsContainer;
