import React, { useState, useEffect } from 'react';
import { skinToneSwatches, hairColorSwatches, loadFrontLayerFringeAssets, loadSecondaryFringeAssets, loadMouthExpressionAssets, loadLipAssets, loadNoseApexAssets, loadNoseBridgeAssets, loadShirtAssets, loadShoulderAssets, loadChestVolumeAssets, loadEyeballAssets, loadEyeShapeAssets, loadEyeMakeupAssets, loadEyeSocketShadowAssets, loadHeadAssets, loadChinAssets, loadEarAssets, loadHairAssets, loadFaceScarAssets, loadBodyScarAssets, loadBackgroundAssets, loadAccessoryAssets, loadBeardAssets, loadMustacheAssets, loadCheekboneAssets, loadEyelashAssets, loadEyeColorAssets } from '../utilities/loadAssets';
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
    const [selectedFrontLayerFringeLinework, setSelectedFrontLayerFringeLinework] = useState(null);
    const [selectedFrontLayerFringeColor, setSelectedFrontLayerFringeColor] = useState(null);

    const [selectedSecondaryFringeLinework, setSelectedSecondaryFringeLinework] = useState(null);
    const [selectedSecondaryFringeColor, setSelectedSecondaryFringeColor] = useState(null);

    const [selectedBodyScar, setSelectedBodyScar] = useState(null);
    const [selectedBackground, setSelectedBackground] = useState(null);
    const [selectedAccessory, setSelectedAccessory] = useState(null);

    const [selectedMustacheLinework, setSelectedMustacheLinework] = useState(null);
    const [selectedMustacheColor, setSelectedMustacheColor] = useState(null);
    const [selectedBeardLinework, setSelectedBeardLinework] = useState(null);
    const [selectedBeardColor, setSelectedBeardColor] = useState(null);

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
    const [selectedNoseApex, setSelectedNoseApex] = useState(null);
    const [selectedNoseBridge, setSelectedNoseBridge] = useState(null);
    const [selectedMouthExpression, setSelectedMouthExpression] = useState(null);
    const [selectedLipColor, setSelectedLipColor] = useState(null);



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
    const frontLayerFringeAssets = loadFrontLayerFringeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/2-Fringe/FrontLayerFringe', true, /\.(png|jpe?g|svg)$/));
    const secondaryFringeAssets = loadSecondaryFringeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/2-Fringe/SecondaryFringe', true, /\.(png|jpe?g|svg)$/));

    // Load body scar assets
    const bodyScarAssets = loadBodyScarAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/11-Body-Scars', true, /\.(png|jpe?g|svg)$/));

    // Load background assets
    const backgroundAssets = loadBackgroundAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/13-Background', true, /\.(png|jpe?g|svg)$/));

    // Load accessory assets (like glasses)
    const accessoryAssets = loadAccessoryAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/0-Accessories', true, /\.(png|jpe?g|svg)$/));

    // Load beard and mustache assets
    const mustacheAssets = loadMustacheAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/1-Face-Hair/3-Mustashes', true, /\.(png|jpe?g|svg)$/));
    const beardAssets = loadBeardAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/1-Face-Hair/5-Beards', true, /\.(png|jpe?g|svg)$/));

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

    // Load nose apex and nose bridge assets
    const noseApexAssets = loadNoseApexAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Nose/Nose-Apex', true, /\.(png|jpe?g|svg)$/));
    const noseBridgeAssets = loadNoseBridgeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Nose/Nose-Bridge', true, /\.(png|jpe?g|svg)$/));

    const mouthExpressionAssets = loadMouthExpressionAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Mouth/0-Expression', true, /\.(png|jpe?g|svg)$/));
    const lipAssets = loadLipAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Mouth/1-Lip', true, /\.(png|jpe?g|svg)$/));




    // Set the default chin to 'Chin-1' when the component mounts
    useEffect(() => {
        if (!selectedChinLinework) {
            const defaultChin = chinAssets.linework.find(file => file.includes('Chin-1') && !file.includes('Cleft'));
            setSelectedChinLinework(defaultChin);
        }
    }, [chinAssets, selectedChinLinework]);

    // Update the skin tone when selecting
    const handleSkinToneChange = (swatch) => {
        const toneNumber = swatch.match(/Skin-Tone-(\d+)/)[1]; // Extract the skin tone number
    
        // Update skin tone for the head
        const matchingHeadSkinTone = headAssets.colors.find(file => file.includes(`Skin-Tone-${toneNumber}`));
        setSelectedHeadSkinTone(matchingHeadSkinTone);
    
        // Update skin tone for the chin
        const matchingChinSkinTone = chinAssets.colors.find(file => file.includes(`Chin-${selectedChinLinework.match(/Chin-(\d+)/)[1]}-Skin-Tone-${toneNumber}`));
        setSelectedChinSkinTone(matchingChinSkinTone);
    
        // Update skin tone for the ears
        const matchingEarSkinTone = earAssets.colors.find(file => file.includes(`Ear-${selectedEarLinework.match(/Ear-(\d+)/)[1]}-Skin-Tone-${toneNumber}`));
        setSelectedEarSkinTone(matchingEarSkinTone);
    
        // Update skin tone for the shoulders
        if (selectedShoulderLinework) {
            const shoulderType = selectedShoulderLinework.match(/(Thin|Broad|Narrow)-Shoulder/)[1];
            const matchingShoulderSkinTone = shoulderAssets.colors.find(file => file.includes(`${shoulderType}-Shoulder-Skin-Tone-${toneNumber}`));
            setSelectedShoulderSkinTone(matchingShoulderSkinTone);
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

    // Handle Hair Linework
    const handleHairLineworkChange = (hairLinework) => {
        setSelectedHairLinework(hairLinework);

        if (hairLinework) {
            const currentColorNumber = selectedHairColor?.match(/Color-(\d+)/)?.[1];

            // Find matching color for hair linework
            const matchingHairColor = hairAssets.colors.find(asset =>
                asset.includes(hairLinework.match(/Hair-\d+/)?.[0]) &&
                asset.includes(`Color-${currentColorNumber}`)
            );

            setSelectedHairColor(matchingHairColor || null);
        }
    };



    const handleHairColorChange = (swatch) => {
        const colorNumber = swatch.match(/Hair-Color-(\d+)/)[1]; // Extract color number
    
        if (selectedHairLinework) {
            const matchingHairColor = hairAssets.colors.find(
                (color) => color.includes(`Hair-Color-${colorNumber}`) && color.includes(selectedHairLinework.match(/Hair-\d+/)[0])
            );
    
            if (matchingHairColor) {
                setSelectedHairColor(matchingHairColor); // Set the matching hair color
            } else {
                console.warn("No matching hair color found.");
            }
        } else {
            console.warn("No hair linework selected yet.");
        }
    };

    const handleFaceScarChange = (faceScar) => {
        setSelectedFaceScar(faceScar);
    };

    // Handle Front Layer Fringe Linework
    const handleFrontLayerFringeLineworkChange = (fringeLinework) => {
        setSelectedFrontLayerFringeLinework(fringeLinework);

        if (fringeLinework) {
            const currentColorNumber = selectedFrontLayerFringeColor?.match(/Color-(\d+)/)?.[1];

            // Find matching color for front fringe linework
            const matchingColor = frontLayerFringeAssets.find(asset =>
                asset.includes(fringeLinework.match(/Fringe-\d+/)?.[0]) &&
                asset.includes(`Color-${currentColorNumber}`)
            );

            setSelectedFrontLayerFringeColor(matchingColor || null);
        }
    };


    const handleFrontLayerFringeColorChange = (swatch) => {
        const colorNumber = swatch.match(/Hair-Color-(\d+)/)[1]; // Extract the color number from the swatch name
    
        if (selectedFrontLayerFringeLinework) {
            const fringeNumber = selectedFrontLayerFringeLinework.match(/Fringe-(\d+)/)[1]; // Extract fringe number from the linework
    
            // Find the matching asset using the fringe number and color number
            const matchingFringe = frontLayerFringeAssets.find(
                asset => asset.includes(`Fringe-${fringeNumber}`) && asset.includes(`Hair-Color-${colorNumber}`)
            );
    
            if (matchingFringe) {
                setSelectedFrontLayerFringeColor(matchingFringe); // Set the matching fringe color
            } else {
                console.warn("No matching fringe found for the selected color.");
            }
        } else {
            console.warn("No front fringe linework selected yet.");
        }
    };
    

    // Handle Secondary Fringe Linework
    const handleSecondaryFringeLineworkChange = (fringeLinework) => {
        setSelectedSecondaryFringeLinework(fringeLinework);

        if (fringeLinework) {
            const currentColorNumber = selectedSecondaryFringeColor?.match(/Color-(\d+)/)?.[1];

            // Find matching color for secondary fringe linework
            const matchingColor = secondaryFringeAssets.find(asset =>
                asset.includes(fringeLinework.match(/Fringe-\d+/)?.[0]) &&
                asset.includes(`Color-${currentColorNumber}`)
            );

            setSelectedSecondaryFringeColor(matchingColor || null);
        }
    };

    const handleSecondaryFringeColorChange = (swatch) => {
        const colorNumber = swatch.match(/Hair-Color-(\d+)/)[1]; // Extract the color number
    
        if (selectedSecondaryFringeLinework) {
            const fringeNumber = selectedSecondaryFringeLinework.match(/Fringe-(\d+)/)[1]; // Extract fringe number from the linework
    
            // Find the matching asset using the fringe number and color number
            const matchingFringe = secondaryFringeAssets.find(
                asset => asset.includes(`Fringe-${fringeNumber}`) && asset.includes(`Hair-Color-${colorNumber}`)
            );
    
            if (matchingFringe) {
                setSelectedSecondaryFringeColor(matchingFringe); // Set the matching fringe color
            } else {
                console.warn("No matching fringe found for the selected color.");
            }
        } else {
            console.warn("No secondary fringe linework selected yet.");
        }
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

    const handleMustacheLineworkChange = (mustacheLinework) => {
        const currentColorNumber = selectedMustacheColor?.match(/Color-(\d+)/)?.[1]; // Extract current color number if any

        setSelectedMustacheLinework(mustacheLinework);

        // Find the matching color for the new mustache linework
        const matchingMustacheColor = mustacheAssets.find(asset =>
            asset.includes(mustacheLinework.match(/Face-Hair-\d+/)[0]) &&
            asset.includes(`Color-${currentColorNumber}`)
        );

        // If matching color found, apply it
        if (matchingMustacheColor) {
            setSelectedMustacheColor(matchingMustacheColor);
        } else {
            setSelectedMustacheColor(null); // Clear color if no matching color found
        }
    };


    // Handle mustache color change
    const handleMustacheColorChange = (mustacheColor) => {
        setSelectedMustacheColor(mustacheColor);
    };

    const handleBeardLineworkChange = (beardLinework) => {
        const currentColorNumber = selectedBeardColor?.match(/Color-(\d+)/)?.[1]; // Extract current color number if any

        setSelectedBeardLinework(beardLinework);

        // Find the matching color for the new beard linework
        const matchingBeardColor = beardAssets.find(asset =>
            asset.includes(beardLinework.match(/Face-Hair-\d+/)[0]) &&
            asset.includes(`Color-${currentColorNumber}`)
        );

        // If matching color found, apply it
        if (matchingBeardColor) {
            setSelectedBeardColor(matchingBeardColor);
        } else {
            setSelectedBeardColor(null); // Clear color if no matching color found
        }
    };


    // Handle beard color change
    const handleBeardColorChange = (beardColor) => {
        setSelectedBeardColor(beardColor);
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

    const handleNoseApexChange = (apex) => {
        setSelectedNoseApex(apex);
    };

    const handleNoseBridgeChange = (bridge) => {
        setSelectedNoseBridge(bridge);
    };

    // Handle mouth expression change
    const handleMouthExpressionChange = (expression) => {
        setSelectedMouthExpression(expression);
    };

    // Handle lip color change
    const handleLipColorChange = (lip) => {
        setSelectedLipColor(lip);
    };




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
                    <img
                        src={selectedCheekbone}
                        alt="Selected Cheekbone"
                        className="character-layer cheek-bones"
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
                        className="character-layer eyeballs"
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



                {/* Render selected face scar */}
                {selectedFaceScar && (
                    <img
                        src={selectedFaceScar}
                        alt="Selected Face Scar"
                        className="character-layer face-scars"
                    />
                )}

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


                {/* Render selected body scar */}
                {selectedBodyScar && (
                    <img
                        src={selectedBodyScar}
                        alt="Selected Body Scar"
                        className="character-layer body-scars"
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

                {/* Render selected mustache linework */}
                {selectedMustacheLinework && (
                    <img
                        src={selectedMustacheLinework}
                        alt="Selected Mustache Linework"
                        className="character-layer mustache-linework"
                    />
                )}

                {/* Render selected mustache color */}
                {selectedMustacheColor && (
                    <img
                        src={selectedMustacheColor}
                        alt="Selected Mustache Color"
                        className="character-layer mustache-color"
                    />
                )}

                {/* Render selected beard linework */}
                {selectedBeardLinework && (
                    <img
                        src={selectedBeardLinework}
                        alt="Selected Beard Linework"
                        className="character-layer beard-linework"
                    />
                )}

                {/* Render selected beard color */}
                {selectedBeardColor && (
                    <img
                        src={selectedBeardColor}
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

                {/* Render Chest Volume if applicable */}
                {getChestVolume() && (
                    <div className="chest-volume-display">
                        <img
                            src={getChestVolume()}
                            alt="Chest Volume"
                            className='character-layer chest-volume' />
                    </div>
                )}

                {selectedShirtLinework && (
                    <img
                        src={selectedShirtLinework}
                        alt="Shirt Linework"
                        className="character-layer shirt-linework" />
                )}

                {selectedShirtColor && (
                    <img
                        src={selectedShirtColor}
                        alt="Shirt Color"
                        className="character-layer shirt-color" />
                )}



                {/* Render selected background */}
                {selectedBackground && (
                    <img
                        src={selectedBackground}
                        alt="Selected Background"
                        className="character-layer colorSwatches"
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

                {/* Render selected lip color */}
                {selectedLipColor && (
                    <img
                        src={selectedLipColor}
                        alt="Selected Lip Color"
                        className="character-layer lips-color"
                    />
                )}



            </div>

            <div className="customization-options">
                <h2>Customize Your Character</h2>

                {/* Skin Tone Options */}
                <div className="option-category">
    <h3>Skin Tone Options</h3>
    {skinToneSwatches.map((swatch, index) => (
        <button key={index} onClick={() => handleSkinToneChange(swatch)}>
            <img src={swatch} alt={`Skin Tone ${index}`} />
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

                {/* Nose Apex Options */}
                <div className="option-category">
                    <h3>Nose Apex</h3>
                    {noseApexAssets.apex.map((apex, index) => (
                        <button key={index} onClick={() => handleNoseApexChange(apex)}>
                            <img src={apex} alt={`Nose Apex ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Nose Bridge Options */}
                <div className="option-category">
                    <h3>Nose Bridge</h3>
                    {noseBridgeAssets.bridge.map((bridge, index) => (
                        <button key={index} onClick={() => handleNoseBridgeChange(bridge)}>
                            <img src={bridge} alt={`Nose Bridge ${index}`} />
                        </button>
                    ))}
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

                {/* Body Scar Options */}
                <div className="option-category">
                    <h3>Body Scars</h3>
                    {bodyScarAssets.scars.map((scarAsset, index) => (
                        <button key={index} onClick={() => handleBodyScarChange(scarAsset)}>
                            <img src={scarAsset} alt={`Body Scar ${index}`} />
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

                {/* Eye Color Options */}
                <div className="option-category">
                    <h3>Eye Colors</h3>
                    {eyeColorAssets.colors.map((eyeColorAsset, index) => (
                        <button key={index} onClick={() => handleEyeColorChange(eyeColorAsset)}>
                            <img src={eyeColorAsset} alt={`Eye Color ${index}`} />
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


                {/* Eye Socket Shadow Options */}
                <div className="option-category">
                    <h3>Eye Socket Shadows</h3>
                    <button onClick={() => handleEyeSocketShadowChange(eyeSocketShadowAssets.socketShadows[0])}>
                        <img src={eyeSocketShadowAssets.socketShadows[0]} alt="Eye Socket Shadow" />
                    </button>
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


                {/* Accessory Options */}
                <div className="option-category">
                    <h3>Accessories</h3>
                    {accessoryAssets.accessories.map((accessoryAsset, index) => (
                        <button key={index} onClick={() => handleAccessoryChange(accessoryAsset)}>
                            <img src={accessoryAsset} alt={`Accessory ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Mouth Expression Options */}
                <div className="option-category">
                    <h3>Mouth Expressions</h3>
                    {mouthExpressionAssets.map((expression, index) => (
                        <button key={index} onClick={() => handleMouthExpressionChange(expression)}>
                            <img src={expression} alt={`Mouth Expression ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Lip Color Options */}
                <div className="option-category">
                    <h3>Lip Colors</h3>
                    {lipAssets.map((lip, index) => (
                        <button key={index} onClick={() => handleLipColorChange(lip)}>
                            <img src={lip} alt={`Lip Color ${index}`} />
                        </button>
                    ))}
                </div>


                {/* Cheekbone Options */}
                <div className="option-category">
                    <h3>Cheekbones</h3>
                    {cheekboneAssets.cheekbones.map((cheekboneAsset, index) => (
                        <button key={index} onClick={() => handleCheekboneChange(cheekboneAsset)}>
                            <img src={cheekboneAsset} alt={`Cheekbone ${index}`} />
                        </button>
                    ))}
                </div>


                {/* Hair Linework Options */}
                <div className="option-category">
                    <h3>Hair Linework</h3>
                    {hairAssets && hairAssets.linework.map((hairLinework, index) => (
                        <button key={index} onClick={() => handleHairLineworkChange(hairLinework)}>
                            <img src={hairLinework} alt={`Hair Linework ${index}`} />
                        </button>
                    ))}
                </div>


                {/* Hair Color Options */}
                {selectedHairLinework && (
  <div className="option-category">
      <h3>Hair Color Options</h3>
      {hairColorSwatches.map((swatch, index) => (
          <button key={index} onClick={() => handleHairColorChange(swatch)}>
              <img src={swatch} alt={`Hair Color ${index}`} />
          </button>
      ))}
  </div>
                )}

                {/* Front Layer Fringe Options */}
                <div className="option-category">
                    <h3>Front Layer Fringe</h3>
                    {frontLayerFringeAssets && frontLayerFringeAssets
                        .filter(asset => !asset.includes('Hair-Color')) // Ensure only linework assets are shown
                        .map((fringeLinework, index) => (
                            <button key={index} onClick={() => handleFrontLayerFringeLineworkChange(fringeLinework)}>
                                <img src={fringeLinework} alt={`Front Layer Fringe Linework ${index}`} />
                            </button>
                        ))}
                </div>


                {selectedFrontLayerFringeLinework && (
    <div className="option-category">
        <h3>Front Layer Fringe Colors</h3>
        {hairColorSwatches.map((swatch, index) => (
            <button key={index} onClick={() => handleFrontLayerFringeColorChange(swatch)}>
                <img src={swatch} alt={`Front Fringe Color ${index}`} className='fringe-color' />
            </button>
        ))}
    </div>
)}


                {/* Secondary Fringe Linework Options */}
                <div className="option-category">
                    <h3>Secondary Fringe</h3>
                    {secondaryFringeAssets && secondaryFringeAssets
                        .filter(asset => !asset.includes('Hair-Color')) // Ensure only linework assets are shown
                        .map((fringeLinework, index) => (
                            <button key={index} onClick={() => handleSecondaryFringeLineworkChange(fringeLinework)}>
                                <img src={fringeLinework} alt={`Secondary Fringe Linework ${index}`} />
                            </button>
                        ))}
                </div>


                {/* Secondary Fringe Color Options */}
                {selectedSecondaryFringeLinework && (
    <div className="option-category">
        <h3>Secondary Fringe Colors</h3>
        {hairColorSwatches.map((swatch, index) => (
            <button key={index} onClick={() => handleSecondaryFringeColorChange(swatch)}>
                <img src={swatch} alt={`Secondary Fringe Color ${index}`} className='secondary-fringe-color' />
            </button>
        ))}
    </div>
)}



                {/* Mustache Linework Options */}
                <div className="option-category">
                    <h3>Mustaches</h3>
                    {mustacheAssets.filter(asset => !asset.includes('Hair-Color')).map((mustacheLinework, index) => (
                        <button key={index} onClick={() => handleMustacheLineworkChange(mustacheLinework)}>
                            <img src={mustacheLinework} alt={`Mustache Linework ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Mustache Color Options */}
                {selectedMustacheLinework && (
                    <div className="option-category">
                        <h3>Mustache Colors</h3>
                        {mustacheAssets
                            .filter(asset => asset.includes(selectedMustacheLinework.match(/Face-Hair-\d+/)[0])) // Match by linework type
                            .filter(asset => asset.includes('Hair-Color')) // Only include files with 'Hair-Color' in their names
                            .map((mustacheColor, index) => (
                                <button key={index} onClick={() => handleMustacheColorChange(mustacheColor)}>
                                    <img src={mustacheColor} alt={`Mustache Color ${index}`} />
                                </button>
                            ))}
                    </div>
                )}


                {/* Beard Linework Options */}
                <div className="option-category">
                    <h3>Beards</h3>
                    {beardAssets.filter(asset => !asset.includes('Hair-Color')).map((beardLinework, index) => (
                        <button key={index} onClick={() => handleBeardLineworkChange(beardLinework)}>
                            <img src={beardLinework} alt={`Beard Linework ${index}`} />
                        </button>
                    ))}
                </div>

                {/* Beard Color Options */}
                {selectedBeardLinework && (
                    <div className="option-category">
                        <h3>Beard Colors</h3>
                        {beardAssets
                            .filter(asset => asset.includes(selectedBeardLinework.match(/Face-Hair-\d+/)[0])) // Match by linework type
                            .filter(asset => asset.includes('Hair-Color')) // Only include files with 'Hair-Color' in their names
                            .map((beardColor, index) => (
                                <button key={index} onClick={() => handleBeardColorChange(beardColor)}>
                                    <img src={beardColor} alt={`Beard Color ${index}`} />
                                </button>
                            ))}
                    </div>
                )}


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
