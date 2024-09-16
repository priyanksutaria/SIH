import React, { useState, useReducer, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AssetList from './AssetList';
import DesignCanvas from './DesignCanvas';
import Toolbar from './ToolBar';
import desktopBackground from './desktop-background.jpg';
import notepadBackground from './notepad-background.jpg';
import task from './task.png';
import './DailyTaskScreen.css';
import { FaWindowClose } from 'react-icons/fa'; // Close button icon

// Fonts for the select box
const fonts = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Verdana', label: 'Verdana' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Lato', label: 'Lato' },
  { value: 'Oswald', label: 'Oswald' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Raleway', label: 'Raleway' },
];

// Initial state and reducer
const initialState = {
  items: [],
  exportImage: false,
};

const canvasReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_ITEM':
      const updatedItems = [...state.items];
      updatedItems[action.payload.index] = action.payload.item;
      return { ...state, items: updatedItems };
    case 'DELETE_ITEM':
      return { ...state, items: state.items.filter((_, i) => i !== action.payload) };
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'BRING_FORWARD':
      return bringForward(state, action.payload);
    case 'SEND_BACKWARD':
      return sendBackward(state, action.payload);
    case 'EXPORT_AS_IMAGE':
      return { ...state, exportImage: true };
    case 'EXPORT_COMPLETE':
      return { ...state, exportImage: false };
    default:
      return state;
  }
};

// Helper functions for reducer
const bringForward = (state, selectedItem) => {
  const updatedItems = [...state.items];
  const currentItem = updatedItems[selectedItem];
  const nextHigherZIndex = currentItem.zIndex + 1;
  const itemToSwap = updatedItems.find((item) => item.zIndex === nextHigherZIndex);

  if (itemToSwap) {
    itemToSwap.zIndex -= 1;
    currentItem.zIndex += 1;
  }

  return { ...state, items: updatedItems };
};

const sendBackward = (state, selectedItem) => {
  const updatedItems = [...state.items];
  const currentItem = updatedItems[selectedItem];
  const nextLowerZIndex = currentItem.zIndex - 1;
  const itemToSwap = updatedItems.find((item) => item.zIndex === nextLowerZIndex);

  if (itemToSwap) {
    itemToSwap.zIndex += 1;
    currentItem.zIndex -= 1;
  }

  return { ...state, items: updatedItems };
};

export function DailyTaskScreen({ onLogout }) {
  const [state, dispatch] = useReducer(canvasReducer, initialState);
  const [selectedItem, setSelectedItem] = useState(null);

  // Shared state variables for the canvas
  const [color, setColor] = useState('#000');
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState('left');
  const [textShadow, setTextShadow] = useState(false);
  const [lineHeight, setLineHeight] = useState(1.2);

  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Track which screen is active (notepad or design canvas)
  const [showDesignCanvas, setShowDesignCanvas] = useState(false);

  // Update history whenever state.items changes
  useEffect(() => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(state.items);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [state.items, history, historyIndex]);

  // Notepad screen styles
  const screenStyle = {
    backgroundImage: `url(${desktopBackground})`,
    backgroundSize: '95% 90%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const notepadStyle = {
    backgroundImage: `url(${notepadBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="daily-task-screen">
      {/* Initial Notepad Screen */}
      {!showDesignCanvas ? (
        <div className="notepad-screen" style={screenStyle}>
          <div className="notepad" style={notepadStyle}>
            <h2>Today's Tasks:</h2>
            <ul>
              <li>Complete the Design using the Design App</li>
              <li>Attend the team meeting at 3:30 PM</li>
              <li>Submit the Design by end of the day</li>
            </ul>
            <button onClick={onLogout}>Logout</button>
          </div>

          {/* Desktop icon to switch to design canvas */}
          <div className="desktop-icons">
            <div
              className="desktop-icon"
              style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
              onClick={() => setShowDesignCanvas(true)} // Switch to design canvas on click
            >
              <img src={task} alt="Paint Icon" />
              <span style={{
                color: 'white',
                fontSize: '11px',
                borderRadius: '2px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                display: 'inline-block',
                textAlign: 'center',
                maxWidth: '100%',
                wordWrap: 'break-word'
              }}>
                Design App
              </span>
            </div>
          </div>
        </div>
      ) : (
        // Design Canvas Screen
        <div className="design-canvas-screen">
          <DndProvider backend={HTML5Backend}>
            <div className="design-app">
              <h1>Design an Ad Banner</h1>
              {/* Toolbar at the top */}
              <Toolbar
                state={state}
                dispatch={dispatch}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                color={color}
                setColor={setColor}
                selectedFont={selectedFont}
                setSelectedFont={setSelectedFont}
                bold={bold}
                setBold={setBold}
                italic={italic}
                setItalic={setItalic}
                underline={underline}
                setUnderline={setUnderline}
                textAlign={textAlign}
                setTextAlign={setTextAlign}
                textShadow={textShadow}
                setTextShadow={setTextShadow}
                lineHeight={lineHeight}
                setLineHeight={setLineHeight}
                history={history}
                historyIndex={historyIndex}
                setHistoryIndex={setHistoryIndex}
                fonts={fonts}
              />
              <div className="main">
                <AssetList />
                <DesignCanvas
                  state={state}
                  dispatch={dispatch}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  color={color}
                  selectedFont={selectedFont}
                  bold={bold}
                  italic={italic}
                  underline={underline}
                  textAlign={textAlign}
                  textShadow={textShadow}
                  lineHeight={lineHeight}
                  fonts={fonts}
                />
              </div>
            </div>
          </DndProvider>

          {/* Close button to go back to the notepad screen */}
          <button
            className="close-button"
            onClick={() => setShowDesignCanvas(false)} // Switch back to the notepad
          >
            <FaWindowClose size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default DailyTaskScreen;
