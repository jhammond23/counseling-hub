import { useEffect, useState } from 'react';
import { auth, db } from '../firebase-config';  // Adjust the path if necessary
import { doc, getDoc } from 'firebase/firestore';
import defaultEyeballAsset from '../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eye/2-Eyeball/Eyeball.png';
import { loadChestVolumeAssets, loadHeadAssets } from '../utilities/loadAssets';
import './AvatarRenderer.css';

const AvatarRenderer = () => {
    const [selectedHairLinework, setSelectedHairLinework] = useState(null);
    const [selectedHairColor, setSelectedHairColor] = useState(null);
    const [selectedChinLinework, setSelectedChinLinework] = useState(null);
    const [selectedChinSkinTone, setSelectedChinSkinTone] = useState(null);
    const [selectedEarLinework, setSelectedEarLinework] = useState(null);
    const [selectedEarSkinTone, setSelectedEarSkinTone] = useState(null);
    const [selectedHeadSkinTone, setSelectedHeadSkinTone] = useState(null);
    const [selectedShoulderLinework, setSelectedShoulderLinework] = useState(null);
    const [selectedShoulderType, setSelectedShoulderType] = useState(null);
    const [selectedShoulderSkinTone, setSelectedShoulderSkinTone] = useState(null);
    const [selectedShirtLinework, setSelectedShirtLinework] = useState(null);
    const [selectedShirtColor, setSelectedShirtColor] = useState(null);
    const [selectedBaseShirtLinework, setSelectedBaseShirtLinework] = useState(null);
    const [selectedBaseShirtColor, setSelectedBaseShirtColor] = useState(null);
    const [selectedMidShirtLinework, setSelectedMidShirtLinework] = useState(null);
    const [selectedMidShirtColor, setSelectedMidShirtColor] = useState(null);
    const [selectedOuterShirtLinework, setSelectedOuterShirtLinework] = useState(null);
    const [selectedOuterShirtColor, setSelectedOuterShirtColor] = useState(null);
    const [selectedMustacheLinework, setSelectedMustacheLinework] = useState(null);
    const [selectedMustacheColor, setSelectedMustacheColor] = useState(null);
    const [showChestVolume, setShowChestVolume] = useState(false);
    const [selectedBeardLinework, setSelectedBeardLinework] = useState(null);
    const [selectedBeardColor, setSelectedBeardColor] = useState(null);
    const [selectedFrontLayerFringeLinework, setSelectedFrontLayerFringeLinework] = useState(null);
    const [selectedFrontLayerFringeColor, setSelectedFrontLayerFringeColor] = useState(null);
    const [selectedSecondaryFringeLinework, setSelectedSecondaryFringeLinework] = useState(null);
    const [selectedSecondaryFringeColor, setSelectedSecondaryFringeColor] = useState(null);
    const [selectedBodyScars, setSelectedBodyScars] = useState([]);
    const [selectedBackground, setSelectedBackground] = useState(null);
    const [selectedAccessory, setSelectedAccessory] = useState(null);
    const [selectedCheekbone, setSelectedCheekbone] = useState(null);
    const [selectedUpperEyelash, setSelectedUpperEyelash] = useState(null);
    const [selectedLowerEyelash, setSelectedLowerEyelash] = useState(null);
    const [selectedEyeColor, setSelectedEyeColor] = useState(null);
    const [selectedEyeShape, setSelectedEyeShape] = useState(null);
    const [selectedEyeMakeup, setSelectedEyeMakeup] = useState(null);
    const [selectedEyeSocketShadow, setSelectedEyeSocketShadow] = useState(null);
    const [selectedNoseApex, setSelectedNoseApex] = useState(null);
    const [selectedNoseBridge, setSelectedNoseBridge] = useState(null);
    const [selectedMouthExpression, setSelectedMouthExpression] = useState(null);
    const [selectedLipShape, setSelectedLipShape] = useState(null);
    const [selectedLipColor, setSelectedLipColor] = useState(null);
    const [isCleft, setIsCleft] = useState(false);
    const [selectedEyebrow, setSelectedEyebrow] = useState(null);
    const [selectedFaceScars, setSelectedFaceScars] = useState([]);
    const [cleftedChin, setCleftedChin] = useState(null);
    const [eyeballAssets, setEyeballAssets] = useState(null);

    // Load head assets (linework and skin tones)
    const headAssets = loadHeadAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/7-Head', true, /\.(png|jpe?g|svg)$/));

    // Load chest volume assets
    const chestVolumeAssets = loadChestVolumeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/12-Bodies/ChestVolumeAssets', true, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
        const fetchAvatarData = async () => {
            if (auth.currentUser) {
                const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const avatarData = data.avatarData || {};

                    // Set the state variables using the stored image URLs
                    setSelectedHairLinework(avatarData.selectedHairLinework || null);
                    setSelectedHairColor(avatarData.selectedHairColor || null);
                    setSelectedChinLinework(avatarData.selectedChinLinework || null);
                    setSelectedChinSkinTone(avatarData.selectedChinSkinTone || null);
                    setSelectedEarLinework(avatarData.selectedEarLinework || null);
                    setSelectedEarSkinTone(avatarData.selectedEarSkinTone || null);
                    setSelectedHeadSkinTone(avatarData.selectedHeadSkinTone || null);
                    setSelectedShoulderLinework(avatarData.selectedShoulderLinework || null);
                    setSelectedShoulderType(avatarData.selectedShoulderType || null);
                    setSelectedShoulderSkinTone(avatarData.selectedShoulderSkinTone || null);
                    setSelectedShirtLinework(avatarData.selectedShirtLinework || null);
                    setSelectedShirtColor(avatarData.selectedShirtColor || null);
                    setSelectedBaseShirtLinework(avatarData.selectedBaseShirtLinework || null);
                    setSelectedBaseShirtColor(avatarData.selectedBaseShirtColor || null);
                    setSelectedMidShirtLinework(avatarData.selectedMidShirtLinework || null);
                    setSelectedMidShirtColor(avatarData.selectedMidShirtColor || null);
                    setSelectedOuterShirtLinework(avatarData.selectedOuterShirtLinework || null);
                    setSelectedOuterShirtColor(avatarData.selectedOuterShirtColor || null);
                    setSelectedMustacheLinework(avatarData.selectedMustacheLinework || null);
                    setSelectedMustacheColor(avatarData.selectedMustacheColor || null);
                    setShowChestVolume(avatarData.showChestVolume || false);
                    setSelectedBeardLinework(avatarData.selectedBeardLinework || null);
                    setSelectedBeardColor(avatarData.selectedBeardColor || null);
                    setSelectedFrontLayerFringeLinework(avatarData.selectedFrontLayerFringeLinework || null);
                    setSelectedFrontLayerFringeColor(avatarData.selectedFrontLayerFringeColor || null);
                    setSelectedSecondaryFringeLinework(avatarData.selectedSecondaryFringeLinework || null);
                    setSelectedSecondaryFringeColor(avatarData.selectedSecondaryFringeColor || null);
                    setSelectedBodyScars(avatarData.selectedBodyScars || []);
                    setSelectedBackground(avatarData.selectedBackground || null);
                    setSelectedAccessory(avatarData.selectedAccessory || null);
                    setSelectedCheekbone(avatarData.selectedCheekbone || null);
                    setSelectedUpperEyelash(avatarData.selectedUpperEyelash || null);
                    setSelectedLowerEyelash(avatarData.selectedLowerEyelash || null);
                    setSelectedEyeColor(avatarData.selectedEyeColor || null);
                    setSelectedEyeShape(avatarData.selectedEyeShape || null);
                    setSelectedEyeMakeup(avatarData.selectedEyeMakeup || null);
                    setSelectedEyeSocketShadow(avatarData.selectedEyeSocketShadow || null);
                    setSelectedNoseApex(avatarData.selectedNoseApex || null);
                    setSelectedNoseBridge(avatarData.selectedNoseBridge || null);
                    setSelectedMouthExpression(avatarData.selectedMouthExpression || null);
                    setSelectedLipShape(avatarData.selectedLipShape || null);
                    setSelectedLipColor(avatarData.selectedLipColor || null);
                    setIsCleft(avatarData.isCleft || false);
                    setSelectedEyebrow(avatarData.selectedEyebrow || null);
                    setSelectedFaceScars(avatarData.selectedFaceScars || []);
                    setCleftedChin(avatarData.cleftedChin || null);
                    setEyeballAssets(avatarData.eyeballAssets || null);

                }

            }
        };

        fetchAvatarData();
    }, []);

    const getChestVolume = () => {
        if (!showChestVolume) return null; // No chest volume if toggled off

        if (selectedShoulderType === 'narrow') {
            return chestVolumeAssets.narrow;
        } else if (selectedShoulderType === 'broad') {
            return chestVolumeAssets.broad;
        } else if (selectedShoulderType === 'thin') {
            return chestVolumeAssets.thin;
        }
        return null;
    };


    // Render the avatar layers
    return (
        <div className='avatar-render-container'>
            <div className="avatar-render"
                style={
                    selectedBackground
                        ? { backgroundImage: `url(${selectedBackground})` }
                        : {}
                }>

                {/* Always render the head linework */}
                {headAssets.linework && (

                    <img
                        src={headAssets.linework}
                        alt="Head Linework"
                        className="character-layer head-linework"
                    />

                )}

                {/* Render selected skin tone for the head */}
                {selectedHeadSkinTone && (
                    <img
                        src={selectedHeadSkinTone}
                        alt="Selected Head Skin Tone"
                        className="character-layer head-skin-tone"
                    />

                )}


                {/* Render selected skin tone for the chin (matches chin shape and head skin tone) */}
                {selectedChinSkinTone && (

                    <img
                        src={selectedChinSkinTone}
                        alt="Chin Skin Tone"
                        className="character-layer chin-skin-tone"
                    />

                )}

                {/* Render chin linework */}
                {selectedChinLinework && (
                    <img
                        src={selectedChinLinework}
                        alt="Chin Linework"
                        className="character-layer chin-linework"
                    />
                )}

                {/* Render cleft as an additional overlay, if applicable */}
                {isCleft && cleftedChin && (
                    <img
                        src={cleftedChin}
                        alt="Cleft Chin Linework"
                        className="character-layer cleft-linework"
                    />
                )}

                {/* Render selected skin tone for the ears */}
                {selectedEarSkinTone && (
                    <img
                        src={selectedEarSkinTone}
                        alt="Ear Skin Tone"
                        className="character-layer ear-skin-tone"
                    />
                )}

                {/* Render ear linework */}
                {selectedEarLinework && (
                    <img
                        src={selectedEarLinework}
                        alt="Ear Linework"
                        className="character-layer ear-linework"
                    />
                )}

                {/* Render Selected Hair Color */}
                {selectedHairColor && (
                    <img
                        src={selectedHairColor}
                        alt="Selected Hair Color"
                        className="character-layer hair-color"
                    />
                )}


                {/* Render hair linework */}
                {selectedHairLinework && (

                    <img
                        src={selectedHairLinework}
                        alt="Selected Hair Linework"
                        className="character-layer hair-linework"
                    />
                )}

                {/* Render selected cheekbones */}
                {selectedCheekbone && (
                    <div className="character-layer-container">
                        <img
                            src={selectedCheekbone}
                            alt="Selected Cheekbone"
                            className="character-layer cheek-bones"
                        />
                    </div>
                )}

                {/* Render selected upper eyelash */}
                {selectedUpperEyelash && (
                    <img
                        src={selectedUpperEyelash}
                        alt="Selected Upper Eyelash"
                        className="character-layer upper-eyelash"
                    />
                )}

                {/* Render selected lower eyelash */}
                {selectedLowerEyelash && (
                    <img
                        src={selectedLowerEyelash}
                        alt="Selected Lower Eyelash"
                        className="character-layer lower-eyelash"
                    />
                )}

                {/* Render eyeball and selected eye color */}
                {selectedEyeColor && (
                    <>

                        <img
                            src={defaultEyeballAsset}  // Use a fallback if missing
                            alt="Eyeball"
                            className="character-layer eyeballs"
                        />


                        {/* Render eye color */}
                        <img
                            src={selectedEyeColor}
                            alt="Selected Eye Color"
                            className="character-layer eye-color"
                        />
                    </>
                )}



                {/* Render selected eye shape */}
                {selectedEyeShape && (
                    <img
                        src={selectedEyeShape}
                        alt="Selected Eye Shape"
                        className="character-layer eye-shape"
                    />
                )}

                {/* Render selected eye makeup */}
                {selectedEyeMakeup && (
                    <img
                        src={selectedEyeMakeup.asset}
                        alt="Selected Eye Makeup"
                        className="character-layer eye-makeup"
                    />
                )}


                {/* Render selected eye socket shadow */}
                {selectedEyeSocketShadow && (
                    <img
                        src={selectedEyeSocketShadow}
                        alt="Selected Eye Socket Shadow"
                        className="character-layer eye-socket-shadow"
                    />
                )}


                {/* Render selected nose apex */}
                {selectedNoseApex && (
                    <img
                        src={selectedNoseApex}
                        alt="Selected Nose Apex"
                        className="character-layer nose-apex"
                    />
                )}

                {/* Render selected nose bridge */}
                {selectedNoseBridge && (
                    <img
                        src={selectedNoseBridge}
                        alt="Selected Nose Bridge"
                        className="character-layer nose-bridge"
                    />
                )}



                {/* Render selected face scars */}
                {selectedFaceScars.map((faceScar, index) => (
                    <img
                        key={index}
                        src={faceScar}
                        alt={`Selected Face Scar ${index}`}
                        className="character-layer face-scars"
                    />
                ))}


                {/* Render selected Front Layer Fringe Linework */}
                {selectedFrontLayerFringeLinework && (
                    <img
                        src={selectedFrontLayerFringeLinework}
                        alt="Selected Front Layer Fringe Linework"
                        className="character-layer front-fringe-linework"
                    />
                )}

                {/* Render selected Front Layer Fringe color */}
                {selectedFrontLayerFringeColor && (
                    <img
                        src={selectedFrontLayerFringeColor}
                        alt="Selected Front Layer Fringe Color"
                        className="character-layer front-fringe-color"
                    />
                )}

                {/* Render selected Secondary Fringe Linework */}
                {selectedSecondaryFringeLinework && (
                    <img
                        src={selectedSecondaryFringeLinework}
                        alt="Selected Secondary Fringe Linework"
                        className="character-layer secondary-fringe-linework"
                    />
                )}

                {/* Render selected Secondary Fringe color */}
                {selectedSecondaryFringeColor && (
                    <img
                        src={selectedSecondaryFringeColor}
                        alt="Selected Secondary Fringe Color"
                        className="character-layer secondary-fringe-color"
                    />
                )}


                {/* Render selected body scars */}
                {selectedBodyScars.map((bodyScar, index) => (
                    <img
                        key={index}
                        src={bodyScar}
                        alt={`Selected Body Scar ${index}`}
                        className="character-layer body-scars"
                    />

                ))}


                {/* Render selected accessory */}
                {selectedAccessory && (
                    <img
                        src={selectedAccessory}
                        alt="Selected Accessory"
                        className="character-layer accessory"
                    />
                )}

                {/* Render selected mustache linework */}
                {selectedMustacheLinework && (
                    <img
                        src={selectedMustacheLinework.asset}
                        alt="Selected Mustache Linework"
                        className="character-layer mustache-linework"
                    />
                )}

                {/* Render selected mustache color */}
                {selectedMustacheColor && (
                    <img
                        src={selectedMustacheColor.asset}
                        alt="Selected Mustache Color"
                        className="character-layer mustache-color"
                    />
                )}

                {/* Render selected beard linework */}
                {selectedBeardLinework && (
                    <img
                        src={selectedBeardLinework.asset}
                        alt="Selected Beard Linework"
                        className="character-layer beard-linework"
                    />
                )}

                {/* Render selected beard color */}
                {selectedBeardColor && (
                    <img
                        src={selectedBeardColor.asset}
                        alt="Selected Beard Color"
                        className="character-layer beard-color"
                    />
                )}


                {/* Render shoulder linework */}
                {selectedShoulderLinework && (
                    <img
                        src={selectedShoulderLinework}
                        alt="Shoulder Linework"
                        className="character-layer shoulder-linework" />
                )}

                {/* Render shoulder skin tone */}
                {selectedShoulderSkinTone && (
                    <img
                        src={selectedShoulderSkinTone}
                        alt="Shoulder Skin Tone"
                        className="character-layer shoulder-skin-color" />
                )}

                {/* Chest Volume */}
                {showChestVolume && selectedShoulderType && (
                    <img
                        src={getChestVolume()}
                        alt="Chest Volume"
                        className="character-layer chest-volume"
                    />
                )}

                {/* Base Layer Shirt */}
                {selectedBaseShirtLinework && (
                    <img
                        src={selectedBaseShirtLinework}
                        alt="Base Shirt Linework"
                        className="character-layer base-layer-linework"
                    />
                )}
                {selectedBaseShirtColor && (
                    <img
                        src={selectedBaseShirtColor}
                        alt="Base Shirt Color"
                        className="character-layer base-layer-tops-color"
                    />
                )}

                {/* Mid Layer Shirt */}
                {selectedMidShirtLinework && (
                    <img
                        src={selectedMidShirtLinework}
                        alt="Mid Shirt Linework"
                        className="character-layer mid-layer-tops-linework"
                    />
                )}
                {selectedMidShirtColor && (
                    <img
                        src={selectedMidShirtColor}
                        alt="Mid Shirt Color"
                        className="character-layer mid-layer-tops-color"
                    />
                )}

                {/* Outer Layer Shirt */}
                {selectedOuterShirtLinework && (
                    <img
                        src={selectedOuterShirtLinework}
                        alt="Outer Shirt Linework"
                        className="character-layer outer-layer-tops-linework"
                    />
                )}
                {selectedOuterShirtColor && (
                    <img
                        src={selectedOuterShirtColor}
                        alt="Outer Shirt Color"
                        className="character-layer outer-layer-tops-color"
                    />
                )}


                {/* Render selected mouth expression */}
                {selectedMouthExpression && (
                    <img
                        src={selectedMouthExpression}
                        alt="Selected Mouth Expression"
                        className="character-layer mouth-expression"
                    />
                )}

                {selectedMouthExpression && selectedLipShape && (
                    <img
                        src={selectedLipShape.asset}
                        alt="Selected Lip Shape"
                        className="character-layer lip-linework"
                    // style={{ zIndex: selectedLipColor ? 0 : 36 }}
                    />
                )}


                {selectedLipColor && (
                    <img
                        src={selectedLipColor.asset}
                        alt="Selected Lip Color"
                        className="character-layer lip-color"
                        style={{ zIndex: 34 }}
                    />
                )}

                {selectedEyebrow && (
                    <img
                        src={selectedEyebrow}
                        alt="Selected Eyebrow"
                        className="character-layer eyebrows"
                    />
                )}





            </div>
        </div>
    );

};

export default AvatarRenderer;
