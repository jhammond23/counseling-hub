import React, { useState, useEffect } from 'react';
import { loadShirtAssets, loadShoulderAssets, loadChestVolumeAssets, loadEyeballAssets, loadEyeShapeAssets, loadEyeMakeupAssets, loadEyeSocketShadowAssets, loadHeadAssets, loadChinAssets, loadEarAssets, loadHairAssets, loadFaceScarAssets, loadFringeAssets, loadBodyScarAssets, loadBackgroundAssets, loadAccessoryAssets, loadBeardAssets, loadMustacheAssets, loadCheekboneAssets, loadEyelashAssets, loadEyeColorAssets } from '../utilities/loadAssets';
import './SafeSpace.css'; // Assuming you're using the provided CSS

const SafeSpace = () => {
    // State for selected skin tone, chin linework, and cleft option
    const [selectedHeadSkinTone, setSelectedHeadSkinTone] = useState(null);
    const [selectedChinSkinTone, setSelectedChinSkinTone] = useState(null);
    const [selectedChinLinework, setSelectedChinLinework] = useState(null);
    const [selectedEarLinework, setSelectedEarLinework] = useState(null);
    const [selectedEarSkinTone, setSelectedEarSkinTone] = useState(null);
    const [selectedHairLinework, setSelectedHairLinework] = useState(null);
    const [selectedHairColor, setSelectedHairColor] = useState(null);
    const [selectedFaceScar, setSelectedFaceScar] = useState(null);
    const [selectedFringeLinework, setSelectedFringeLinework] = useState(null);
    const [selectedFringeColor, setSelectedFringeColor] = useState(null);
    const [selectedBodyScar, setSelectedBodyScar] = useState(null);
    const [selectedBackground, setSelectedBackground] = useState(null);
    const [selectedAccessory, setSelectedAccessory] = useState(null);
    const [selectedBeard, setSelectedBeard] = useState(null);
    const [selectedMustache, setSelectedMustache] = useState(null);
    const [selectedCheekbone, setSelectedCheekbone] = useState(null);
    const [selectedUpperEyelash, setSelectedUpperEyelash] = useState(null);
    const [selectedLowerEyelash, setSelectedLowerEyelash] = useState(null);
    const [selectedEyeColor, setSelectedEyeColor] = useState(null);
    const [selectedEyeball, setSelectedEyeball] = useState(null);
    const [selectedEyeShape, setSelectedEyeShape] = useState(null);
    const [selectedEyeMakeup, setSelectedEyeMakeup] = useState(null);
    const [selectedEyeSocketShadow, setSelectedEyeSocketShadow] = useState(null);
    // Shoulder and chest volume states
    const [selectedShoulderLinework, setSelectedShoulderLinework] = useState('/static/media/Narrow-Shoulder-1.757145b45a2fef3f8869.png');
    const [selectedShoulderSkinTone, setSelectedShoulderSkinTone] = useState(null);
    const [showChestVolume, setShowChestVolume] = useState(false);
    const [selectedShoulderType, setSelectedShoulderType] = useState('thin'); // Can be 'narrow', 'broad', or 'thin'
    // shirt states
    const [selectedShirtLinework, setSelectedShirtLinework] = useState(null);
    const [selectedShirtColor, setSelectedShirtColor] = useState(null);
    const [shirtAssets, setShirtAssets] = useState({ linework: {}, colors: {} });

    useEffect(() => {
        // Load the shirt assets when the component mounts
        const loadedShirtAssets = loadShirtAssets();
        setShirtAssets(loadedShirtAssets);
    }, []);





    const [isCleft, setIsCleft] = useState(false); // Cleft toggle state

    // Load head assets (linework and skin tones)
    const headAssets = loadHeadAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/7-Head', true, /\.(png|jpe?g|svg)$/));

    // Load chin assets (linework and skin tones)
    const chinAssets = loadChinAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/5-Head-Parts/0-Chin', true, /\.(png|jpe?g|svg)$/));

    const earAssets = loadEarAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/5-Head-Parts/1-Ears', true, /\.(png|jpe?g|svg)$/));

    // Load hair assets (linework and colors)
    const hairAssets = loadHairAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/6-Hair', true, /\.(png|jpe?g|svg)$/));

    // Load face scar assets
    const faceScarAssets = loadFaceScarAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/4-Face-Scars', true, /\.(png|jpe?g|svg)$/));

    // Load fringe assets
    const fringeAssets = loadFringeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/2-Fringe', true, /\.(png|jpe?g|svg)$/));

    // Load body scar assets
    const bodyScarAssets = loadBodyScarAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/11-Body-Scars', true, /\.(png|jpe?g|svg)$/));

    // Load background assets
    const backgroundAssets = loadBackgroundAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/13-Background', true, /\.(png|jpe?g|svg)$/));

    // Load accessory assets (like glasses)
    const accessoryAssets = loadAccessoryAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/0-Accessories', true, /\.(png|jpe?g|svg)$/));

    // Load beard and mustache assets
    const beardAssets = loadBeardAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/1-Face-Hair/1-Beards', true, /\.(png|jpe?g|svg)$/));
    const mustacheAssets = loadMustacheAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/1-Face-Hair/0-Mustashes', true, /\.(png|jpe?g|svg)$/));

    // Load cheekbone and eyelash assets
    const cheekboneAssets = loadCheekboneAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Cheek-Bones', true, /\.(png|jpe?g|svg)$/));
    const eyelashAssets = loadEyelashAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eye/0-Eyelashes', true, /\.(png|jpe?g|svg)$/));

    // Load eye color assets
    const eyeColorAssets = loadEyeColorAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eye/1-Eye-Color', true, /\.(png|jpe?g|svg)$/));

    // Load eyeball, eye shape, eye makeup, and eye socket shadow assets
    const eyeballAssets = loadEyeballAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eye/2-Eyeball', true, /\.(png|jpe?g|svg)$/));
    const eyeShapeAssets = loadEyeShapeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eye/3-Eye-Shape', true, /\.(png|jpe?g|svg)$/));
    const eyeMakeupAssets = loadEyeMakeupAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eye/4-Eye-Makeup', true, /\.(png|jpe?g|svg)$/));
    const eyeSocketShadowAssets = loadEyeSocketShadowAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eye/5-Eye-Socket-Shadows', true, /\.(png|jpe?g|svg)$/));

    // Load shoulder assets
    const shoulderAssets = loadShoulderAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/12-Bodies', true, /\.(png|jpe?g|svg)$/));

    // Load chest volume assets
    const chestVolumeAssets = loadChestVolumeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/12-Bodies/ChestVolumeAssets', true, /\.(png|jpe?g|svg)$/));

    



    // Set the default chin to 'Chin-1' when the component mounts
    useEffect(() => {
        if (!selectedChinLinework) {
            const defaultChin = chinAssets.linework.find(file => file.includes('Chin-1') && !file.includes('Cleft'));
            setSelectedChinLinework(defaultChin);
        }
    }, [chinAssets, selectedChinLinework]);

// Update the skin tone when selecting
const handleSkinToneChange = (skinTonePath) => {
    const selectedToneNumber = skinTonePath.match(/Skin-Tone-(\d+)/)[1]; // Extract tone number from filename

    // Set the skin tone for the head
    const matchingHeadSkinTone = headAssets.colors.find(file => file.includes(`Skin-Tone-${selectedToneNumber}`));
    setSelectedHeadSkinTone(matchingHeadSkinTone);

    // Set the skin tone for the chin
    const matchingChinSkinTone = chinAssets.colors.find(file => file.includes(`Chin-${selectedChinLinework.match(/Chin-(\d+)/)[1]}-Skin-Tone-${selectedToneNumber}`));
    setSelectedChinSkinTone(matchingChinSkinTone);

    // Set the skin tone for the ears
    const matchingEarSkinTone = earAssets.colors.find(file => file.includes(`Ear-${selectedEarLinework.match(/Ear-(\d+)/)[1]}-Skin-Tone-${selectedToneNumber}`));
    setSelectedEarSkinTone(matchingEarSkinTone);

    // Set the skin tone for the shoulders based on the selected shoulder linework
    if (selectedShoulderLinework) {
        // Extract shoulder type from the selected linework (Thin, Broad, or Narrow)
        const shoulderType = selectedShoulderLinework.match(/(Thin|Broad|Narrow)-Shoulder/)[1];
        const matchingShoulderSkinTone = shoulderAssets.colors.find(file => file.includes(`${shoulderType}-Shoulder-Skin-Tone-${selectedToneNumber}`));

        if (matchingShoulderSkinTone) {
            setSelectedShoulderSkinTone(matchingShoulderSkinTone);
        }
    }
};




    // Handle chin linework change and update chin skin tone to match the new linework
    const handleChinLineworkChange = (chinLinework) => {
        setSelectedChinLinework(chinLinework);

        // When chin linework is selected, update the chin skin tone to match the new chin shape
        if (selectedHeadSkinTone) {
            const selectedToneNumber = selectedHeadSkinTone.match(/Skin-Tone-(\d+)/)[1]; // Extract the tone number from the current head skin tone
            const chinNumber = chinLinework.match(/Chin-(\d+)/)[1]; // Extract the chin number from the linework filename
            const matchingChinSkinTone = chinAssets.colors.find(file => file.includes(`Chin-${chinNumber}-Skin-Tone-${selectedToneNumber}`));
            setSelectedChinSkinTone(matchingChinSkinTone);
        }
    };

    // Handle cleft toggle
    const handleCleftToggle = () => {
        setIsCleft(prevCleft => !prevCleft); // Toggle cleft state
    };

    // Find clefted version of the selected chin (as an additional overlay)
    const cleftedChin = selectedChinLinework && chinAssets.linework.find(file => file.includes(`${selectedChinLinework.split('.')[0]}-Cleft`));

    useEffect(() => {
        if (!selectedChinLinework) {
            const defaultChin = chinAssets.linework.find(file => file.includes('Chin-1') && !file.includes('Cleft'));
            setSelectedChinLinework(defaultChin);
        }
        if (!selectedEarLinework) {
            const defaultEar = earAssets.linework.find(file => file.includes('Ear-7'));
            setSelectedEarLinework(defaultEar);
        }
    }, [chinAssets, selectedChinLinework, earAssets, selectedEarLinework]);

    const handleEarLineworkChange = (earLinework) => {
        setSelectedEarLinework(earLinework);

        // Update ear skin tone based on the new ear linework and current skin tone
        if (selectedHeadSkinTone) {
            const selectedToneNumber = selectedHeadSkinTone.match(/Skin-Tone-(\d+)/)[1]; // Extract the tone number from the current head skin tone
            const earNumber = earLinework.match(/Ear-(\d+)/)[1]; // Extract the ear number from the linework filename
            const matchingEarSkinTone = earAssets.colors.find(file => file.includes(`Ear-${earNumber}-Skin-Tone-${selectedToneNumber}`));
            setSelectedEarSkinTone(matchingEarSkinTone);
        }
    };

    const handleHairLineworkChange = (hairLinework) => {
        setSelectedHairLinework(hairLinework);
        setSelectedHairColor(null); // Reset color when linework changes
    };

    const handleHairColorChange = (hairColor) => {
        setSelectedHairColor(hairColor);
    };

    const handleFaceScarChange = (faceScar) => {
        setSelectedFaceScar(faceScar);
    };

    const handleFringeLineworkChange = (fringeLinework) => {
        setSelectedFringeLinework(fringeLinework);
        setSelectedFringeColor(null); // Reset color when linework changes
    };

    const handleFringeColorChange = (fringeColor) => {
        setSelectedFringeColor(fringeColor);
    };

    const handleBodyScarChange = (bodyScar) => {
        setSelectedBodyScar(bodyScar);
    };

    const handleBackgroundChange = (background) => {
        setSelectedBackground(background);
    };

    const handleAccessoryChange = (accessory) => {
        setSelectedAccessory(accessory);
    };

    const handleBeardChange = (beard) => {
        setSelectedBeard(beard);
    };

    const handleMustacheChange = (mustache) => {
        setSelectedMustache(mustache);
    };

    const handleCheekboneChange = (cheekbone) => {
        setSelectedCheekbone(cheekbone);
    };

    const handleUpperEyelashChange = (upperEyelash) => {
        setSelectedUpperEyelash(upperEyelash);
    };

    const handleLowerEyelashChange = (lowerEyelash) => {
        setSelectedLowerEyelash(lowerEyelash);
    };

    const handleEyeColorChange = (eyeColor) => {
        setSelectedEyeColor(eyeColor);
    };
    const handleEyeballChange = (eyeball) => {
        setSelectedEyeball(eyeball);
    };

    const handleEyeShapeChange = (eyeShape) => {
        setSelectedEyeShape(eyeShape);
    };

    const handleEyeMakeupChange = (eyeMakeup) => {
        setSelectedEyeMakeup(eyeMakeup);
    };

    const handleEyeSocketShadowChange = (eyeSocketShadow) => {
        setSelectedEyeSocketShadow(eyeSocketShadow);
    };

// Effect to set the default shoulder after shoulder assets are loaded
useEffect(() => {
    if (shoulderAssets.linework.length > 0 && !selectedShoulderLinework) {
        // Set the default to 'Thin-Shoulder #1'
        const defaultLinework = shoulderAssets.linework.find(linework => linework.includes('Thin-Shoulder-1'));
        if (defaultLinework) {
            setSelectedShoulderLinework(defaultLinework);
        }
    }
}, [shoulderAssets.linework]); // Run this effect only when shoulder assets are loaded



const handleShoulderLineworkChange = (linework) => {
    // Step 1: Set the selected shoulder linework first
    setSelectedShoulderLinework(linework);

    // Step 2: Extract the shoulder type (Thin, Broad, Narrow) from the linework and capitalize the first letter
    let shoulderType = linework.match(/(Thin|Broad|Narrow)-Shoulder/)?.[1]; // e.g., "Broad"
    if (shoulderType) {
        shoulderType = shoulderType.charAt(0).toUpperCase() + shoulderType.slice(1).toLowerCase(); // Ensure proper case
    }

    // Ensure shoulderType is defined
    if (!shoulderType) {
        console.warn("No shoulder type found in the linework.");
        return;
    }

    // Step 3: Update the skin color size for the new shoulder size
    if (selectedShoulderSkinTone) {
        // Extract the skin tone number from the current skin tone (e.g., Skin-Tone-3)
        const selectedToneNumber = selectedShoulderSkinTone.match(/Skin-Tone-(\d+)/)?.[1];

        if (selectedToneNumber) {
            // Find the corresponding skin tone for the new shoulder size
            const matchingShoulderSkinTone = shoulderAssets.colors.find(file =>
                file.includes(`${shoulderType}-Shoulder-Skin-Tone-${selectedToneNumber}`)
            );

            // Log the matching skin tone path
            console.log("Matching Shoulder Skin Tone Path:", matchingShoulderSkinTone);

            // If a matching skin tone is found, update the state
            if (matchingShoulderSkinTone) {
                setSelectedShoulderSkinTone(matchingShoulderSkinTone);
            } else {
                console.warn(`No matching shoulder skin tone found for ${shoulderType} and skin tone ${selectedToneNumber}`);
            }
        } else {
            console.warn("No skin tone number found in selectedShoulderSkinTone.");
        }
    }

    // Step 4: Update the shirt linework and color based on the new shoulder type
    const shirtNumber = selectedShirtLinework?.match(/Top-(\d+)/)?.[1]; // e.g., "Top-8"

    if (shirtNumber) {
        // Find the corresponding shirt linework for the new shoulder size
        const matchingShirtLinework = shirtAssets.linework[shoulderType.toLowerCase()]?.find(
            (shirt) => shirt.includes(`Top-${shirtNumber}`)
        );

        // Log the new shirt linework path
        console.log("New Shirt Linework Path:", matchingShirtLinework);

        if (matchingShirtLinework) {
            setSelectedShirtLinework(matchingShirtLinework); // Update the shirt linework

            // Extract the current shirt color number (if any)
            const currentColorNumber = selectedShirtColor?.match(/Color-(\d+)/)?.[1]; // e.g., "3"

            if (currentColorNumber) {
                // Find the corresponding shirt color for the new shoulder size
                const matchingShirtColor = shirtAssets.colors[shoulderType.toLowerCase()]?.find(
                    (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                );

                // Log the new shirt color path
                console.log("New Shirt Color Path:", matchingShirtColor);

                if (matchingShirtColor) {
                    setSelectedShirtColor(matchingShirtColor); // Update the shirt color
                } else {
                    console.warn(`No matching shirt color found for ${shoulderType}-Shoulder with Top-${shirtNumber} and Color-${currentColorNumber}`);
                }
            }
        } else {
            console.warn(`No matching shirt linework found for ${shoulderType}-Shoulder with Top-${shirtNumber}`);
        }
    }
};





    

    // Handle toggling chest volume
    const toggleChestVolume = () => {
        setShowChestVolume(!showChestVolume); // Toggle the chest volume state
    };

    // Display the correct chest volume based on the selected shoulder type and toggle state
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

    const handleShirtLineworkChange = (shirtLinework) => {
        // Step 1: Set the selected shirt linework
        setSelectedShirtLinework(shirtLinework);
    
        // Step 2: Extract the shoulder type (Thin, Broad, Narrow) from the currently selected shoulder linework
        const shoulderType = selectedShoulderLinework.match(/(Thin|Broad|Narrow)-Shoulder/)?.[1];
    
        if (!shoulderType) {
            console.warn("No shoulder type found.");
            return;
        }
    
        // Ensure correct casing for shoulder type (capitalize the first letter)
        const formattedShoulderType = shoulderType.charAt(0).toUpperCase() + shoulderType.slice(1).toLowerCase();
    
        // Step 3: Extract the shirt number from the linework
        const shirtNumber = shirtLinework.match(/Top-(\d+)/)?.[1];
    
        // Step 4: Log the shirt linework file path
        console.log("Shirt Linework Path:", shirtLinework);
    
        // Step 5: Apply the current shirt color to the new shirt linework (using the current color)
        if (selectedShirtColor) {
            const currentColorNumber = selectedShirtColor.match(/Color-(\d+)/)?.[1]; // Extract the color number
            const matchingShirtColor = shirtAssets.colors[formattedShoulderType.toLowerCase()]?.find(
                (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
            );
    
            // Log the matching shirt color file path
            console.log("Shirt Color Path:", matchingShirtColor);
    
            if (matchingShirtColor) {
                setSelectedShirtColor(matchingShirtColor);
            } else {
                console.warn(`No matching shirt color found for ${formattedShoulderType}-Shoulder with Top-${shirtNumber} and Color-${currentColorNumber}`);
            }
        }
    };
    
    
    
    
    const handleShirtColorChange = (shirtColor) => {
        // Step 1: Log the shirt color file path
        console.log("Shirt Color Path (on click):", shirtColor);
    
        // Step 2: Set the selected shirt color
        setSelectedShirtColor(shirtColor);
    };
    
    useEffect(() => {
        // Automatically update shirt linework and color when shoulder linework changes
        const shoulderType = selectedShoulderLinework?.match(/(Thin|Broad|Narrow)-Shoulder/)?.[1]?.toLowerCase();
    
        if (shoulderType) {
            const shirtNumber = selectedShirtLinework?.match(/Top-(\d+)/)?.[1]; // Extract the shirt number if one is selected
    
            if (shirtNumber) {
                // Update shirt linework to match the new shoulder size
                const matchingShirtLinework = shirtAssets.linework[shoulderType]?.find(
                    (shirt) => shirt.includes(`Top-${shirtNumber}`)
                );
    
                if (matchingShirtLinework) {
                    setSelectedShirtLinework(matchingShirtLinework); // Update the shirt linework
    
                    // Extract the color number from the currently selected color (if any)
                    const currentColorNumber = selectedShirtColor?.match(/Color-(\d+)/)?.[1];
    
                    if (currentColorNumber) {
                        // Update shirt color to match the new shoulder size
                        const matchingShirtColor = shirtAssets.colors[shoulderType]?.find(
                            (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                        );
    
                        if (matchingShirtColor) {
                            setSelectedShirtColor(matchingShirtColor); // Update the shirt color
                        }
                    }
                }
            }
        }
    }, [selectedShoulderLinework, selectedShirtLinework, selectedShirtColor, shirtAssets.linework, shirtAssets.colors]); // Add all dependencies
    
    


    return (
        <div className="character-customization">
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

                {/* Render selected hair color */}
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
                        alt="Hair Linework"
                        className="character-layer hair-linework"
                    />
                )}

                {/* Render selected cheekbones */}
                {selectedCheekbone && (
                    <img
                        src={selectedCheekbone}
                        alt="Selected Cheekbone"
                        className="character-layer cheekbone"
                    />
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

                {/* Render selected eye color */}
                {selectedEyeColor && (
                    <img
                        src={selectedEyeColor}
                        alt="Selected Eye Color"
                        className="character-layer eye-color"
                    />
                )}

                {/* Render selected eyeball */}
                {selectedEyeball && (
                    <img
                        src={selectedEyeball}
                        alt="Selected Eyeball"
                        className="character-layer eyeball"
                    />
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
                        src={selectedEyeMakeup}
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


                {/* Render selected face scar */}
                {selectedFaceScar && (
                    <img
                        src={selectedFaceScar}
                        alt="Selected Face Scar"
                        className="character-layer face-scar"
                    />
                )}

                {/* Render selected fringe color */}
                {selectedFringeColor && (
                    <img
                        src={selectedFringeColor}
                        alt="Selected Fringe Color"
                        className="character-layer fringe-color"
                    />
                )}

                {/* Render fringe linework */}
                {selectedFringeLinework && (
                    <img
                        src={selectedFringeLinework}
                        alt="Fringe Linework"
                        className="character-layer fringe-linework"
                    />
                )}

                {/* Render selected body scar */}
                {selectedBodyScar && (
                    <img
                        src={selectedBodyScar}
                        alt="Selected Body Scar"
                        className="character-layer body-scar"
                    />
                )}

                {/* Render selected accessory */}
                {selectedAccessory && (
                    <img
                        src={selectedAccessory}
                        alt="Selected Accessory"
                        className="character-layer accessory"
                    />
                )}

                {/* Render selected beard */}
                {selectedBeard && (
                    <img
                        src={selectedBeard}
                        alt="Selected Beard"
                        className="character-layer beard"
                    />
                )}

                {/* Render selected mustache */}
                {selectedMustache && (
                    <img
                        src={selectedMustache}
                        alt="Selected Mustache"
                        className="character-layer mustache"
                    />
                )}

                {/* Render shoulder linework */}
                {selectedShoulderLinework && (
                    <img src={selectedShoulderLinework} alt="Shoulder Linework" className="character-layer" />
                )}

                {/* Render shoulder skin tone */}
                {selectedShoulderSkinTone && (
                    <img src={selectedShoulderSkinTone} alt="Shoulder Skin Tone" className="character-layer" />
                )}

                {/* Render Chest Volume if applicable */}
                {getChestVolume() && (
                    <div className="chest-volume-display">
                        <img src={getChestVolume()} alt="Chest Volume" className='character-layer' />
                    </div>
                )}

{selectedShirtLinework && (
    <img src={selectedShirtLinework} alt="Shirt Linework" className="character-layer shirt-linework" />
)}

{selectedShirtColor && (
    <img src={selectedShirtColor} alt="Shirt Color" className="character-layer shirt-color" />
)}



                {/* Render selected background */}
                {selectedBackground && (
                    <img
                        src={selectedBackground}
                        alt="Selected Background"
                        className="character-layer background"
                    />
                )}


            </div>

            <div className="customization-options">
                <h2>Customize Your Character</h2>

                {/* Skin Tone Options */}
                <div className="option-category">
                    <h3>Skin Tones</h3>
                    {headAssets.colors.map((colorAsset, index) => (
                        <button key={index} onClick={() => handleSkinToneChange(colorAsset)}>
                            <img src={colorAsset} alt={`Skin Tone ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Chin Linework Options (excluding cleft linework) */}
                <div className="option-category">
                    <h3>Chin Linework</h3>
                    {chinAssets.linework
                        .filter(lineworkAsset => !lineworkAsset.includes('Cleft')) // Exclude cleft options
                        .map((lineworkAsset, index) => (
                            <button key={index} onClick={() => handleChinLineworkChange(lineworkAsset)}>
                                <img src={lineworkAsset} alt={`Chin Linework ${index}`} />
                            </button>
                        ))}
                </div>

                {/* Cleft Option */}
                <div className="option-category">
                    <h3>Cleft Chin</h3>
                    <button onClick={handleCleftToggle}>
                        {isCleft ? 'Remove Cleft' : 'Add Cleft'}
                    </button>
                </div>

                {/* Ear Linework Options */}
                <div className="option-category">
                    <h3>Ear Linework</h3>
                    {earAssets.linework
                        .filter(lineworkAsset => lineworkAsset.includes('Ear') && !lineworkAsset.includes('Skin-Color')) // Exclude skin-tone options
                        .map((lineworkAsset, index) => (
                            <button key={index} onClick={() => handleEarLineworkChange(lineworkAsset)}>
                                <img src={lineworkAsset} alt={`Ear Linework ${index}`} />
                            </button>
                        ))}
                </div>

                {/* Hair Linework Options */}
                <div className="option-category">
                    <h3>Hair Linework</h3>
                    {hairAssets.linework.map((lineworkAsset, index) => (
                        <button key={index} onClick={() => handleHairLineworkChange(lineworkAsset)}>
                            <img src={lineworkAsset} alt={`Hair Linework ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Hair Color Options */}
                {selectedHairLinework && (
                    <div className="option-category">
                        <h3>Hair Colors</h3>
                        {hairAssets.colors
                            .filter(colorAsset => colorAsset.includes(selectedHairLinework.match(/Hair-\d+/)[0])) // Match colors to selected linework
                            .map((colorAsset, index) => (
                                <button key={index} onClick={() => handleHairColorChange(colorAsset)}>
                                    <img src={colorAsset} alt={`Hair Color ${index}`} />
                                </button>
                            ))}
                    </div>
                )}

                {/* Cheekbone Options */}
                <div className="option-category">
                    <h3>Cheekbones</h3>
                    {cheekboneAssets.cheekbones.map((cheekboneAsset, index) => (
                        <button key={index} onClick={() => handleCheekboneChange(cheekboneAsset)}>
                            <img src={cheekboneAsset} alt={`Cheekbone ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Upper Eyelash Options */}
                <div className="option-category">
                    <h3>Upper Eyelashes</h3>
                    {eyelashAssets.eyelashes.filter(asset => asset.includes('Upper-Eyelash')).map((upperEyelashAsset, index) => (
                        <button key={index} onClick={() => handleUpperEyelashChange(upperEyelashAsset)}>
                            <img src={upperEyelashAsset} alt={`Upper Eyelash ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Lower Eyelash Options */}
                <div className="option-category">
                    <h3>Lower Eyelashes</h3>
                    {eyelashAssets.eyelashes.filter(asset => asset.includes('Lower-Eyelash')).map((lowerEyelashAsset, index) => (
                        <button key={index} onClick={() => handleLowerEyelashChange(lowerEyelashAsset)}>
                            <img src={lowerEyelashAsset} alt={`Lower Eyelash ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Eye Color Options */}
                <div className="option-category">
                    <h3>Eye Colors</h3>
                    {eyeColorAssets.colors.map((eyeColorAsset, index) => (
                        <button key={index} onClick={() => handleEyeColorChange(eyeColorAsset)}>
                            <img src={eyeColorAsset} alt={`Eye Color ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Eyeball Options */}
                <div className="option-category">
                    <h3>Eyeballs</h3>
                    {eyeballAssets.eyeballs.map((eyeballAsset, index) => (
                        <button key={index} onClick={() => handleEyeballChange(eyeballAsset)}>
                            <img src={eyeballAsset} alt={`Eyeball ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Eye Shape Options */}
                <div className="option-category">
                    <h3>Eye Shapes</h3>
                    {eyeShapeAssets.shapes.map((eyeShapeAsset, index) => (
                        <button key={index} onClick={() => handleEyeShapeChange(eyeShapeAsset)}>
                            <img src={eyeShapeAsset} alt={`Eye Shape ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Eye Makeup Options */}
                <div className="option-category">
                    <h3>Eye Makeup</h3>
                    {eyeMakeupAssets.makeup.map((eyeMakeupAsset, index) => (
                        <button key={index} onClick={() => handleEyeMakeupChange(eyeMakeupAsset)}>
                            <img src={eyeMakeupAsset} alt={`Eye Makeup ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Eye Socket Shadow Options */}
                <div className="option-category">
                    <h3>Eye Socket Shadows</h3>
                    <button onClick={() => handleEyeSocketShadowChange(eyeSocketShadowAssets.socketShadows[0])}>
                        <img src={eyeSocketShadowAssets.socketShadows[0]} alt="Eye Socket Shadow" />
                    </button>
                </div>


                {/* Face Scar Options */}
                <div className="option-category">
                    <h3>Face Scars</h3>
                    {faceScarAssets.scars.map((scarAsset, index) => (
                        <button key={index} onClick={() => handleFaceScarChange(scarAsset)}>
                            <img src={scarAsset} alt={`Face Scar ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Fringe Linework Options */}
                <div className="option-category">
                    <h3>Fringe Linework</h3>
                    {fringeAssets.linework.map((lineworkAsset, index) => (
                        <button key={index} onClick={() => handleFringeLineworkChange(lineworkAsset)}>
                            <img src={lineworkAsset} alt={`Fringe Linework ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Fringe Color Options */}
                {selectedFringeLinework && (
                    <div className="option-category">
                        <h3>Fringe Colors</h3>
                        {fringeAssets.colors
                            .filter(colorAsset => colorAsset.includes(selectedFringeLinework.match(/Fringe-\d+/)[0])) // Match colors to selected fringe linework
                            .map((colorAsset, index) => (
                                <button key={index} onClick={() => handleFringeColorChange(colorAsset)}>
                                    <img src={colorAsset} alt={`Fringe Color ${index}`} />
                                </button>
                            ))}
                    </div>
                )}

                {/* Body Scar Options */}
                <div className="option-category">
                    <h3>Body Scars</h3>
                    {bodyScarAssets.scars.map((scarAsset, index) => (
                        <button key={index} onClick={() => handleBodyScarChange(scarAsset)}>
                            <img src={scarAsset} alt={`Body Scar ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Accessory Options */}
                <div className="option-category">
                    <h3>Accessories</h3>
                    {accessoryAssets.accessories.map((accessoryAsset, index) => (
                        <button key={index} onClick={() => handleAccessoryChange(accessoryAsset)}>
                            <img src={accessoryAsset} alt={`Accessory ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Beard Options */}
                <div className="option-category">
                    <h3>Beards</h3>
                    {beardAssets.colors.map((beardAsset, index) => (
                        <button key={index} onClick={() => handleBeardChange(beardAsset)}>
                            <img src={beardAsset} alt={`Beard ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Mustache Options */}
                <div className="option-category">
                    <h3>Mustaches</h3>
                    {mustacheAssets.colors.map((mustacheAsset, index) => (
                        <button key={index} onClick={() => handleMustacheChange(mustacheAsset)}>
                            <img src={mustacheAsset} alt={`Mustache ${index}`} />
                        </button>
                    ))}
                </div>

                {/* UI for Shoulder Linework */}
                <div className="option-category">
                    <h3>Shoulders</h3>
                    <div>
                        {shoulderAssets.linework.map((linework, index) => (
                            <button key={index} onClick={() => handleShoulderLineworkChange(linework)}>
                                <img src={linework} alt={`Shoulder Linework ${index}`} className={selectedShoulderLinework === linework ? 'selected' : ''} />
                            </button>
                        ))}
                    </div>
                </div>


                {/* UI for Chest Volume */}
                <div className="option-category">
                    <h3>Chest Volume</h3>
                    <button onClick={toggleChestVolume}>
                        {showChestVolume ? 'Hide Chest Volume' : 'Show Chest Volume'}
                    </button>
                </div>

<div className="option-category">
    <h3>Shirt Linework</h3>
    {shirtAssets.linework[selectedShoulderType]?.map((linework, index) => (
        <button key={index} onClick={() => handleShirtLineworkChange(linework)}>
            <img src={linework} alt={`Shirt Linework ${index}`} />
        </button>
    ))}
</div>

{selectedShirtLinework && (
    <div className="option-category">
        <h3>Shirt Colors</h3>
        {shirtAssets.colors[selectedShoulderType]?.filter(colorAsset => colorAsset.includes(selectedShirtLinework.match(/Top-\d+/)[0])) // Match colors to selected linework
        .map((colorAsset, index) => (
            <button key={index} onClick={() => handleShirtColorChange(colorAsset)}>
                <img src={colorAsset} alt={`Shirt Color ${index}`} />
            </button>
        ))}
    </div>
)}


                {/* Background Options */}
                <div className="option-category">
                    <h3>Backgrounds</h3>
                    {backgroundAssets.backgrounds.map((backgroundAsset, index) => (
                        <button key={index} onClick={() => handleBackgroundChange(backgroundAsset)}>
                            <img src={backgroundAsset} alt={`Background ${index}`} />
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );

};

export default SafeSpace;
