import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import './AssetList.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const initialAssets = [
  { id: 1, name: 'Text Box', type: 'text' },
  { id: 2, name: 'Sample Image 1', type: 'image', src: '/assets/logo.png' },
  { id: 3, name: 'Sample Image 2', type: 'image', src: '/assets/graphic.png' }
  // Add more sample images if needed
];


const Asset = ({ asset }) => {
  const [, drag] = useDrag(
    () => ({
      type: asset.type,
      item: asset,
    }),
    [asset]
  );

  return (
    <div ref={drag} className="asset-item">
      {asset.type === 'image' ? (
        <img src={asset.src} alt={asset.name} width="50" />
      ) : (
        <p>{asset.name}</p>
      )}
    </div>
  );
};

const AssetList = ({ onImageUpload }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [assets, setAssets] = useState(initialAssets);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => {
      const url = URL.createObjectURL(file);
      return { id: Date.now() + Math.random(), name: file.name, type: 'image', src: url };
    });
    setUploadedImages([...uploadedImages, ...images]);
    setAssets([...assets, ...images]);
    onImageUpload && onImageUpload(images);
  };

  return (
    <div className={`asset-list ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
      {!collapsed && (
        <>
          <h3>Assets</h3>
          {assets.map((asset) => (
            <Asset key={asset.id} asset={asset} />
          ))}
          <div className="upload-container">
            <input type="file" accept="image/*" multiple id="image-upload" onChange={handleUpload} />
            <label htmlFor="image-upload">Upload Images</label>
          </div>
        </>
      )}
    </div>
  );
};

export default AssetList;
