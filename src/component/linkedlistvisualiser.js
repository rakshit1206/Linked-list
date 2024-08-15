import React, { useState } from "react";
import LinkedList from "./LinkedList";
import "./LinkedListVisualizer.css";

const LinkedListVisualizer = () => {
  const [list] = useState(new LinkedList());
  const [nodeValue, setNodeValue] = useState("");
  const [nodePosition, setNodePosition] = useState("");
  const [listDisplay, setListDisplay] = useState([]);

  const updateDisplay = () => {
    setListDisplay(list.display());
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
