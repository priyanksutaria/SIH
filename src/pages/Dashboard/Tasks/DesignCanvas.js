import React, { useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';
import './DesignCanvas.css';

function useCombinedRefs(...refs) {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

const DesignCanvas = ({
  state,
  dispatch,
  selectedItem,
  setSelectedItem,
  color,
  selectedFont,
  bold,
  italic,
  underline,
  textAlign,
  textShadow,
  lineHeight,
  fonts,
  canvasBackgroundColor,
  canvasBackgroundImage,
}) => {
  const canvasRef = useRef();

  // Dropzone for adding elements to the canvas
  const [, drop] = useDrop({
    accept: ['text', 'image', 'shape'],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasBoundingRect = canvasRef.current.getBoundingClientRect();

      const newItem = {
        ...item,
        x: offset.x - canvasBoundingRect.left,
        y: offset.y - canvasBoundingRect.top,
        width:
          item.type === 'text'
            ? 200
            : item.type === 'image'
              ? 150
              : 100, // Default width for shapes
        height:
          item.type === 'text'
            ? 50
            : item.type === 'image'
              ? 150
              : 100, // Default height for shapes
        fontSize: item.type === 'text' ? 24 : null,
        color: color,
        fontFamily: item.type === 'text' ? selectedFont.value : null,
        bold: bold,
        italic: italic,
        underline: underline,
        textAlign: textAlign,
        textShadow: textShadow,
        lineHeight: lineHeight,
        zIndex: state.items.length,
        text: item.type === 'text' ? 'Edit me!' : '',
        src: item.src || null,
        shapeType: item.shapeType || null,
      };

      dispatch({ type: 'ADD_ITEM', payload: newItem });
    },
  });

  // Combine refs
  const combinedRef = useCombinedRefs(canvasRef, drop);

  // Select an item (text, image, or shape) on the canvas
  const handleItemSelect = (index) => {
    setSelectedItem(index);
  };

  // Update text content for the text area
  const updateItemText = (index, newText) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: { index, item: { ...state.items[index], text: newText } },
    });
  };

  // Delete an item (text, image, or shape) from the canvas
  const deleteItem = (index) => {
    dispatch({ type: 'DELETE_ITEM', payload: index });
    setSelectedItem(null);
  };

  // Keyboard Navigation for element movement
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedItem !== null) {
        let dx = 0,
          dy = 0;
        if (event.key === 'ArrowUp') dy = -5;
        if (event.key === 'ArrowDown') dy = 5;
        if (event.key === 'ArrowLeft') dx = -5;
        if (event.key === 'ArrowRight') dx = 5;

        const updatedItem = {
          ...state.items[selectedItem],
          x: state.items[selectedItem].x + dx,
          y: state.items[selectedItem].y + dy,
        };
        dispatch({ type: 'UPDATE_ITEM', payload: { index: selectedItem, item: updatedItem } });
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, state.items, dispatch]);

  // Handle export as image action
  useEffect(() => {
    if (state.exportImage) {
      // Delay export to ensure the state is updated
      setTimeout(() => {
        html2canvas(canvasRef.current, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
        }).then((canvas) => {
          const link = document.createElement('a');
          link.download = 'canvas-image.png';
          link.href = canvas.toDataURL();
          link.click();
          dispatch({ type: 'EXPORT_COMPLETE' });
        });
      }, 0);
    }
  }, [state.exportImage, dispatch]);

  // Canvas style
  const canvasStyle = {
    position: 'relative',
    backgroundColor: canvasBackgroundColor || '#ffffff',
    backgroundImage: canvasBackgroundImage ? `url(${canvasBackgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '80%',
    height: '80%',
    maxWidth: '1200px',
    maxHeight: '800px',
    border: '1px solid #ccc',
    overflow: 'hidden',
  };

  return (
    <div className="editor">
      {/* Canvas */}
      <div ref={combinedRef} className="canvas" style={canvasStyle}>
        {state.items.map((item, index) => (
          <Rnd
            key={index}
            size={{ width: item.width, height: item.height }}
            position={{ x: item.x, y: item.y }}
            style={{
              zIndex: item.zIndex || 0,
              border: selectedItem === index ? '1px solid #4A90E2' : 'none',
              position: 'absolute',
            }}
            onDragStop={(e, d) => {
              const updatedItem = { ...item, x: d.x, y: d.y };
              dispatch({ type: 'UPDATE_ITEM', payload: { index, item: updatedItem } });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              const updatedItem = {
                ...item,
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                x: position.x,
                y: position.y,
              };
              if (item.type === 'text') updatedItem.fontSize = ref.offsetHeight / 2;
              dispatch({ type: 'UPDATE_ITEM', payload: { index, item: updatedItem } });
            }}
            bounds="parent"
            onClick={() => handleItemSelect(index)}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              {item.type === 'text' ? (
                <textarea
                  style={{
                    fontFamily: item.fontFamily,
                    fontSize: `${item.fontSize}px`,
                    fontWeight: item.bold ? 'bold' : 'normal',
                    fontStyle: item.italic ? 'italic' : 'normal',
                    textDecoration: item.underline ? 'underline' : 'none',
                    color: item.color,
                    textAlign: item.textAlign,
                    textShadow: item.textShadow ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none',
                    lineHeight: item.lineHeight || 1.2,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: 'transparent',
                    resize: 'none',
                    outline: 'none',
                  }}
                  value={item.text}
                  onChange={(e) => updateItemText(index, e.target.value)}
                />
              ) : item.type === 'image' ? (
                <img
                  src={item.src}
                  alt="Asset"
                  style={{
                    width: '100%',
                    height: '100%',
                    filter: item.filter || 'none',
                  }}
                />
              ) : item.type === 'shape' ? (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor:
                      item.shapeType === 'line' ? 'transparent' : item.color || '#000',
                    borderRadius: item.shapeType === 'circle' ? '50%' : '0',
                    border:
                      item.shapeType === 'line'
                        ? `${item.borderWidth || 2}px solid ${item.color || '#000'}`
                        : 'none',
                    transform:
                      item.shapeType === 'line'
                        ? `rotate(${item.rotation || 0}deg)`
                        : 'none',
                  }}
                ></div>
              ) : null}
              {selectedItem === index && (
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  X
                </button>
              )}
            </div>
          </Rnd>
        ))}
      </div>
    </div>
  );
};

export default DesignCanvas;
