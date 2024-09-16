// src/Tasks/Toolbar.js

import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ToolBar.css';
import { FaBold, FaItalic, FaUnderline, FaUndo, FaRedo, FaAlignLeft, FaAlignCenter, FaAlignRight, FaFont, FaPaintBrush, FaDownload, FaSquare, FaCircle, FaSlash, FaLayerGroup, FaTextHeight } from 'react-icons/fa';

const Toolbar = ({
  state,
  dispatch,
  selectedItem,
  setSelectedItem,
  color,
  setColor,
  selectedFont,
  setSelectedFont,
  bold,
  setBold,
  italic,
  setItalic,
  underline,
  setUnderline,
  textAlign,
  setTextAlign,
  textShadow,
  setTextShadow,
  lineHeight,
  setLineHeight,
  history,
  historyIndex,
  setHistoryIndex,
  fonts,
}) => {
  // Handler functions

  // Undo/Redo functions
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      dispatch({ type: 'SET_ITEMS', payload: history[historyIndex - 1] });
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      dispatch({ type: 'SET_ITEMS', payload: history[historyIndex + 1] });
    }
  };

  // Color change handler
  const handleColorChange = (color) => {
    setColor(color.hex);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], color: color.hex },
        },
      });
    }
  };

  // Font change handler
  const handleFontChange = (selectedOption) => {
    setSelectedFont(selectedOption);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], fontFamily: selectedOption.value },
        },
      });
    }
  };

  // Toggle bold
  const toggleBold = () => {
    setBold(!bold);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], bold: !bold },
        },
      });
    }
  };

  // Toggle italic
  const toggleItalic = () => {
    setItalic(!italic);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], italic: !italic },
        },
      });
    }
  };

  // Toggle underline
  const toggleUnderline = () => {
    setUnderline(!underline);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], underline: !underline },
        },
      });
    }
  };

  // Text alignment handler
  const handleTextAlign = (alignment) => {
    setTextAlign(alignment);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], textAlign: alignment },
        },
      });
    }
  };

  // Toggle text shadow
  const toggleTextShadow = () => {
    setTextShadow(!textShadow);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], textShadow: !textShadow },
        },
      });
    }
  };

  // Line height change handler
  const handleLineHeightChange = (value) => {
    setLineHeight(value);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], lineHeight: value },
        },
      });
    }
  };

  // Font size change handler
  const handleFontSizeChange = (size) => {
    if (selectedItem !== null && state.items[selectedItem]?.type === 'text') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], fontSize: size },
        },
      });
    }
  };

  // Bring forward
  const bringForward = () => {
    if (selectedItem !== null) {
      dispatch({ type: 'BRING_FORWARD', payload: selectedItem });
    }
  };

  // Send backward
  const sendBackward = () => {
    if (selectedItem !== null) {
      dispatch({ type: 'SEND_BACKWARD', payload: selectedItem });
    }
  };

  const [shapeColor, setShapeColor] = useState('#000');
  const [borderWidth, setBorderWidth] = useState(2);
  const [rotation, setRotation] = useState(0);

  // Update shape color
  const handleShapeColorChange = (color) => {
    setShapeColor(color.hex);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'shape') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], color: color.hex },
        },
      });
    }
  };

  // Update border width
  const handleBorderWidthChange = (value) => {
    setBorderWidth(value);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'shape') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], borderWidth: value },
        },
      });
    }
  };

  // Update rotation (for lines)
  const handleRotationChange = (value) => {
    setRotation(value);
    if (selectedItem !== null && state.items[selectedItem]?.type === 'shape' && state.items[selectedItem].shapeType === 'line') {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          index: selectedItem,
          item: { ...state.items[selectedItem], rotation: value },
        },
      });
    }
  };

  // Export as image
  const exportAsImage = () => {
    dispatch({ type: 'EXPORT_AS_IMAGE' });
  };

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showShapeColorPicker, setShowShapeColorPicker] = useState(false);

  const addShape = (shapeType) => {
    const newItem = {
      type: 'shape',
      shapeType,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      color: shapeColor,
      zIndex: state.items.length,
      borderWidth: 2, // For lines
      rotation: 0, // For lines
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setSelectedItem(state.items.length); // Select the new shape
  };

  return (
    <div className="toolbar">
      {/* Undo/Redo */}
      <button onClick={handleUndo} disabled={historyIndex <= 0} title="Undo">
        <FaUndo />
      </button>
      <button onClick={handleRedo} disabled={historyIndex >= history.length - 1} title="Redo">
        <FaRedo />
      </button>

      {/* Font Select */}
      <Select
        options={fonts}
        value={selectedFont}
        onChange={handleFontChange}
        className="font-select"
        placeholder="Font"
        styles={{
          container: (provided) => ({
            ...provided,
            width: 100,
            margin: '0 5px',
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 9999,
          }),
        }}
      />

      {/* Font Size */}
      <div className="toolbar-item">
        <FaTextHeight />
        <input
          type="number"
          min="10"
          max="100"
          value={state.items[selectedItem]?.fontSize || 24}
          onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
          className="font-size-input"
        />
      </div>

      {/* Font Style Buttons */}
      <div className="toolbar-item">
        <button onClick={toggleBold} className={bold ? 'active' : ''} title="Bold">
          <FaBold />
        </button>
        <button onClick={toggleItalic} className={italic ? 'active' : ''} title="Italic">
          <FaItalic />
        </button>
        <button onClick={toggleUnderline} className={underline ? 'active' : ''} title="Underline">
          <FaUnderline />
        </button>
      </div>

      {/* Shape Tools */}
      <div className="toolbar-item">
        <button onClick={() => addShape('rectangle')} title="Add Rectangle">
          <FaSquare />
        </button>
        <button onClick={() => addShape('circle')} title="Add Circle">
          <FaCircle />
        </button>
        <button onClick={() => addShape('line')} title="Add Line">
          <FaSlash />
        </button>

        {/* Shape Color Picker */}
        <button onClick={() => setShowShapeColorPicker(!showShapeColorPicker)} title="Shape Color">
          <FaPaintBrush style={{ color: shapeColor }} />
        </button>
        {showShapeColorPicker && (
          <div className="color-picker-popover">
            <div className="color-picker-cover" onClick={() => setShowShapeColorPicker(false)} />
            <SketchPicker color={shapeColor} onChange={handleShapeColorChange} />
          </div>
        )}
      </div>

      {/* Text Alignment */}
      <div className="toolbar-item">
        <button onClick={() => handleTextAlign('left')} className={textAlign === 'left' ? 'active' : ''} title="Align Left">
          <FaAlignLeft />
        </button>
        <button onClick={() => handleTextAlign('center')} className={textAlign === 'center' ? 'active' : ''} title="Align Center">
          <FaAlignCenter />
        </button>
        <button onClick={() => handleTextAlign('right')} className={textAlign === 'right' ? 'active' : ''} title="Align Right">
          <FaAlignRight />
        </button>
      </div>

      {/* Shape Properties */}
      {selectedItem !== null && (
        <>
          {/* Shape Tools */}

          {/* Border Width (for lines) */}
          {state.items[selectedItem].shapeType === 'line' && (
            <div className="toolbar-item">
              <label>Border Width:</label>
              <input
                type="number"
                min="1"
                max="10"
                value={borderWidth}
                onChange={(e) => handleBorderWidthChange(parseInt(e.target.value))}
              />
            </div>
          )}

          {/* Rotation (for lines) */}
          {state.items[selectedItem].shapeType === 'line' && (
            <div className="toolbar-item">
              <label>Rotation:</label>
              <input
                type="number"
                min="0"
                max="360"
                value={rotation}
                onChange={(e) => handleRotationChange(parseInt(e.target.value))}
              />
            </div>
          )}
        </>
      )}

      {/* Color Picker */}
      <div className="toolbar-item">
        <button onClick={() => setShowColorPicker(!showColorPicker)} title="Text Color">
          <FaPaintBrush style={{ color }} />
        </button>
        {showColorPicker && (
          <div className="color-picker-popover">
            <div className="color-picker-cover" onClick={() => setShowColorPicker(false)} />
            <SketchPicker color={color} onChange={handleColorChange} />
          </div>
        )}
      </div>

      {/* Layer Control */}
      <div className="toolbar-item">
        <button onClick={bringForward} title="Bring Forward">
          🔼
        </button>
        <button onClick={sendBackward} title="Send Backward">
          🔽
        </button>
      </div>

      {/* Export */}
      <button onClick={exportAsImage} title="Export as Image">
        <FaDownload />
      </button>
    </div>
  );
};

export default Toolbar;
