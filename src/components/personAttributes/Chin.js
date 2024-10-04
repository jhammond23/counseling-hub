import React, { useState } from 'react';
import { loadChinAssets } from '../../utilities/loadAssets'; // Correct function import

const Chin = ({ selectedChin, onSelect }) => {
  const chinAssets = loadChinAssets(require.context('../../media/Tasia-Pixel-Project-Revision-1056x1056/5-Head-Parts/0-Chin', true, /\.(png|jpe?g|svg)$/));
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const renderOptions = () => {
    const keys = Object.keys(chinAssets);
    const visibleKeys = showMore ? keys : keys.slice(0, 9);

    return (
      <div className="option-category">
        <h3>Chin</h3>
        {visibleKeys.map((assetKey) => (
          <button key={assetKey} onClick={() => onSelect(assetKey)}>
            <img src={chinAssets[assetKey]} alt={assetKey} className="option-icon" />
          </button>
        ))}
        {keys.length > 9 && (
          <button className="show-more-button" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      {selectedChin && (
        <img
          src={chinAssets[selectedChin]}
          alt="Selected Chin"
          className="character-layer chin"
        />
      )}
      {renderOptions()}
    </>
  );
};

export default Chin;
