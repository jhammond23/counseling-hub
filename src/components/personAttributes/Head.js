// components/Head.js
import React from 'react';

const Head = ({ selectedHeadSkinTone, headAssets, handleSkinToneChange }) => {
  return (
    <div className="character-preview">
      {/* Render selected skin tone for the head */}
      {selectedHeadSkinTone && (
        <img
          src={selectedHeadSkinTone}
          alt="Selected Head Skin Tone"
          className="character-layer head-skin-tone"
        />
      )}
      {/* Always render the head linework */}
      {headAssets.linework && (
        <img
          src={headAssets.linework}
          alt="Head Linework"
          className="character-layer head-linework"
        />
      )}
      <div className="customization-options">
        <h3>Skin Tones</h3>
        <div className="option-category">
          {headAssets.colors.map((colorAsset, index) => (
            <button key={index} onClick={() => handleSkinToneChange(colorAsset)}>
              <img src={colorAsset} alt={`Skin Tone ${index}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Head;
