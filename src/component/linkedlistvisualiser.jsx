import React, { useState } from "react";
import LinkedList from "../LinkedList.js";
import "../component/linkedlistvisualizer.css";

const LinkedListVisualizer = () => {
  const [list] = useState(new LinkedList());
  const [nodeValue, setNodeValue] = useState("");
  const [nodePosition, setNodePosition] = useState("");
  const [listDisplay, setListDisplay] = useState([]);

  const updateDisplay = () => {
    setListDisplay(list.display());
  };

  const prependNode = () => {
    if (nodeValue !== "") {
      list.prepend(parseInt(nodeValue));
      updateDisplay();
      setNodeValue("");
    }
  };

  const popNode = () => {
    list.pop();
    updateDisplay();
  };

  const removeAt = () => {
    if (nodePosition !== "") {
      list.removeAt(parseInt(nodePosition));
      updateDisplay();
      setNodePosition("");
    }
  };

  const insertAt = () => {
    if (nodeValue !== "" && nodePosition !== "") {
      list.insertAt(parseInt(nodeValue), parseInt(nodePosition));
      updateDisplay();
      setNodeValue("");
      setNodePosition("");
    }
  };

  return (
    <div className="container">
      <h1>Linked List Visualization</h1>

      <div className="controls">
        <input
          type="number"
          value={nodeValue}
          onChange={(e) => setNodeValue(e.target.value)}
          placeholder="Node Value"
        />
        <input
          type="number"
          value={nodePosition}
          onChange={(e) => setNodePosition(e.target.value)}
          placeholder="Position (optional)"
        />
        <button onClick={prependNode}>Prepend</button>
        <button onClick={insertAt}>Insert At</button>
        <button onClick={removeAt}>Remove At</button>
        <button onClick={popNode}>Pop</button>
      </div>

      <div id="linked-list">
        {listDisplay.map((value, index) => (
          <span key={index} className="node">
            {value}
            {index < listDisplay.length - 1 && <span className="arrow">→</span>}
          </span>
        ))}
        {listDisplay.length === 0 ? "null" : <span className="node">null</span>}
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
