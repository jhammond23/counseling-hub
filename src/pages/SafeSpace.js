import React, { useState, useEffect } from 'react';
import { loadClothesColorSwatches, loadMakeupColorSwatches, loadLipShapeAssets, skinToneSwatches, hairColorSwatches, loadFrontLayerFringeAssets, loadSecondaryFringeAssets, loadMouthExpressionAssets, loadLipAssets, loadNoseApexAssets, loadNoseBridgeAssets, loadShirtAssets, loadShoulderAssets, loadChestVolumeAssets, loadEyeballAssets, loadEyeShapeAssets, loadEyeMakeupAssets, loadEyeSocketShadowAssets, loadHeadAssets, loadChinAssets, loadEarAssets, loadHairAssets, loadFaceScarAssets, loadBodyScarAssets, loadBackgroundAssets, loadAccessoryAssets, loadBeardAssets, loadMustacheAssets, loadCheekboneAssets, loadEyelashAssets, loadEyeColorAssets } from '../utilities/loadAssets';
import './SafeSpace.css'; // Assuming you're using the provided CSS
import CloseButton from '../components/CloseButton';

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

    const [selectedLipShape, setSelectedLipShape] = useState(null);


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

    // Load lip shape assets
    const lipShapeAssets = loadLipShapeAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Mouth/Lip-Shape', true, /\.(png|jpe?g|svg)$/));

    // Load makeup color swatches
    const makeupColorSwatches = loadMakeupColorSwatches(
        require.context(
            '../media/Tasia-Pixel-Project-Revision-1056x1056/14-Color-Swatches',
            false,
            /Makeup-Color-\d+\.(png|jpe?g|svg)$/
        )
    );

    // Load clothes color swatches
    const clothesColorSwatches = loadClothesColorSwatches(
        require.context(
            '../media/Tasia-Pixel-Project-Revision-1056x1056/14-Color-Swatches',
            false,
            /Clothes-Color-\d+\.(png|jpe?g|svg)$/
        )
    );

    // Set the default chin to 'Chin-1' when the component mounts
    useEffect(() => {
        if (!selectedChinLinework) {
            const defaultChin = chinAssets.linework.find(file => file.includes('Chin-1') && !file.includes('Cleft'));
            setSelectedChinLinework(defaultChin);
        }
    }, [chinAssets, selectedChinLinework]);

    // ... existing imports and code ...

// Ensure default shoulder linework and shoulder type are set
useEffect(() => {
    if (!selectedShoulderLinework && shoulderAssets.linework.length > 0) {
        const defaultLinework = shoulderAssets.linework.find(linework => linework.includes('Thin-Shoulder-1'));
        if (defaultLinework) {
            setSelectedShoulderLinework(defaultLinework);
            setSelectedShoulderType('thin');
        }
    }
}, [selectedShoulderLinework, shoulderAssets.linework]);



// Set default shirt color to color 1
useEffect(() => {
    if (selectedShirtLinework && !selectedShirtColor && shirtAssets.colors[selectedShoulderType]?.length > 0) {
        const shirtNumberMatch = selectedShirtLinework.match(/Top-(\d+)/);
        if (shirtNumberMatch) {
            const shirtNumber = shirtNumberMatch[1];
            const colorNumber = '2'; // Default color number

            const matchingShirtColor = shirtAssets.colors[selectedShoulderType]?.find(colorAsset =>
                colorAsset.includes(`Top-${shirtNumber}`) && colorAsset.includes(`Color-${colorNumber}`)
            );

            if (matchingShirtColor) {
                setSelectedShirtColor(matchingShirtColor);
            } else {
                console.warn(`No matching shirt color found for shirtNumber ${shirtNumber}, colorNumber ${colorNumber}, shoulderType ${selectedShoulderType}`);
            }
        }
    }
}, [selectedShirtLinework, selectedShirtColor, shirtAssets.colors, selectedShoulderType]);


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

    const handleMustacheLineworkChange = ({ asset, key }) => {
        setSelectedMustacheLinework({ asset, key });

        const currentColorNumberMatch = selectedMustacheColor?.key.match(/Hair-Color-(\d+)/);
        const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;

        if (currentColorNumber) {
            const mustacheNumberMatch = key.match(/Face-Hair-\d+/);
            if (mustacheNumberMatch) {
                const mustacheNumber = mustacheNumberMatch[0];

                const matchingMustacheColor = mustacheAssets.find(({ key }) =>
                    key.includes(mustacheNumber) && key.includes(`Hair-Color-${currentColorNumber}`)
                );

                if (matchingMustacheColor) {
                    setSelectedMustacheColor(matchingMustacheColor);
                } else {
                    setSelectedMustacheColor(null);
                }
            } else {
                console.warn('Could not extract mustache number from key');
                setSelectedMustacheColor(null);
            }
        } else {
            setSelectedMustacheColor(null);
        }
    };



    const handleMustacheColorChange = (swatch) => {
        const colorNumberMatch = swatch.match(/Hair-Color-(\d+)/);
        if (!colorNumberMatch) {
            console.warn('Could not extract color number from swatch');
            return;
        }
        const colorNumber = colorNumberMatch[1];

        if (!selectedMustacheLinework) {
            console.warn('No mustache linework selected');
            return;
        }

        const mustacheNumberMatch = selectedMustacheLinework.key.match(/Face-Hair-\d+/);
        if (!mustacheNumberMatch) {
            console.warn('Could not extract mustache number from selectedMustacheLinework');
            return;
        }
        const mustacheNumber = mustacheNumberMatch[0];

        const matchingMustacheColor = mustacheAssets.find(({ key }) =>
            key.includes(mustacheNumber) && key.includes(`Hair-Color-${colorNumber}`)
        );

        if (matchingMustacheColor) {
            setSelectedMustacheColor(matchingMustacheColor);
        } else {
            console.warn(`No matching mustache color found for ${mustacheNumber} and Hair-Color-${colorNumber}`);
            setSelectedMustacheColor(null);
        }
    };

    const handleBeardLineworkChange = ({ asset, key }) => {
        setSelectedBeardLinework({ asset, key });

        const currentColorNumberMatch = selectedBeardColor?.key.match(/Hair-Color-(\d+)/);
        const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;

        if (currentColorNumber) {
            const beardNumberMatch = key.match(/Face-Hair-\d+/);
            if (beardNumberMatch) {
                const beardNumber = beardNumberMatch[0];

                const matchingBeardColor = beardAssets.find(({ key }) =>
                    key.includes(beardNumber) && key.includes(`Hair-Color-${currentColorNumber}`)
                );

                if (matchingBeardColor) {
                    setSelectedBeardColor(matchingBeardColor);
                } else {
                    setSelectedBeardColor(null);
                }
            } else {
                console.warn('Could not extract beard number from key');
                setSelectedBeardColor(null);
            }
        } else {
            setSelectedBeardColor(null);
        }
    };


    // Handle beard color change
    const handleBeardColorChange = (swatch) => {
        const colorNumberMatch = swatch.match(/Hair-Color-(\d+)/);
        if (!colorNumberMatch) {
            console.warn('Could not extract color number from swatch');
            return;
        }
        const colorNumber = colorNumberMatch[1];

        if (!selectedBeardLinework) {
            console.warn('No beard linework selected');
            return;
        }

        const beardNumberMatch = selectedBeardLinework.key.match(/Face-Hair-\d+/);
        if (!beardNumberMatch) {
            console.warn('Could not extract beard number from selectedBeardLinework');
            return;
        }
        const beardNumber = beardNumberMatch[0];

        const matchingBeardColor = beardAssets.find(({ key }) =>
            key.includes(beardNumber) && key.includes(`Hair-Color-${colorNumber}`)
        );

        if (matchingBeardColor) {
            setSelectedBeardColor(matchingBeardColor);
        } else {
            console.warn(`No matching beard color found for ${beardNumber} and Hair-Color-${colorNumber}`);
            setSelectedBeardColor(null);
        }
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

    const handleEyeMakeupChange = (colorNumber) => {
        // Find the eye makeup asset corresponding to the color number
        const matchingEyeMakeup = eyeMakeupAssets.makeup.find(({ key }) =>
            key.includes(`Makeup-Color-${colorNumber}`)
        );

        if (matchingEyeMakeup) {
            setSelectedEyeMakeup(matchingEyeMakeup);
        } else {
            console.warn(`No matching eye makeup found for Color-${colorNumber}`);
            setSelectedEyeMakeup(null);
        }
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
        setSelectedShoulderLinework(linework);

        // Extract shoulder type from linework
        const shoulderTypeMatch = linework.match(/(Thin|Broad|Narrow)-Shoulder/);
        if (shoulderTypeMatch) {
            const shoulderType = shoulderTypeMatch[1];
            const shoulderTypeLower = shoulderType.toLowerCase();
            setSelectedShoulderType(shoulderTypeLower);

            // Update shoulder skin tone to match the new shoulder type
            if (selectedHeadSkinTone) {
                const selectedToneNumberMatch = selectedHeadSkinTone.match(/Skin-Tone-(\d+)/);
                if (selectedToneNumberMatch) {
                    const selectedToneNumber = selectedToneNumberMatch[1];

                    // Find the matching shoulder skin tone asset
                    const matchingShoulderSkinTone = shoulderAssets.colors.find(
                        (file) => file.includes(`${shoulderType}-Shoulder-Skin-Tone-${selectedToneNumber}`)
                    );

                    if (matchingShoulderSkinTone) {
                        setSelectedShoulderSkinTone(matchingShoulderSkinTone);
                    } else {
                        console.warn(`No matching shoulder skin tone found for ${shoulderType}-Shoulder-Skin-Tone-${selectedToneNumber}`);
                    }
                }
            }

            // Update shirt linework and color to match the new shoulder type
            if (selectedShirtLinework) {
                const shirtNumberMatch = selectedShirtLinework.match(/Top-(\d+)/);
                if (shirtNumberMatch) {
                    const shirtNumber = shirtNumberMatch[1];

                    // Find matching shirt linework for the new shoulder type
                    const matchingShirtLinework = shirtAssets.linework[shoulderTypeLower]?.find(
                        (shirt) => shirt.includes(`Top-${shirtNumber}`)
                    );

                    if (matchingShirtLinework) {
                        setSelectedShirtLinework(matchingShirtLinework);

                        // Try to maintain the same shirt color
                        const currentColorNumberMatch = selectedShirtColor?.match(/Color-(\d+)/);
                        const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;

                        if (currentColorNumber) {
                            const matchingShirtColor = shirtAssets.colors[shoulderTypeLower]?.find(
                                (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                            );

                            if (matchingShirtColor) {
                                setSelectedShirtColor(matchingShirtColor);
                            } else {
                                setSelectedShirtColor(null);
                            }
                        } else {
                            setSelectedShirtColor(null);
                        }
                    } else {
                        setSelectedShirtLinework(null);
                        setSelectedShirtColor(null);
                    }
                } else {
                    setSelectedShirtLinework(null);
                    setSelectedShirtColor(null);
                }
            }
        } else {
            console.warn('Could not extract shoulder type from linework');
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




    const handleShirtColorChange = (swatchKey) => {
        const colorNumberMatch = swatchKey.match(/Clothes-Color-(\d+)/);
        if (!colorNumberMatch) {
            console.warn('Could not extract color number from swatch key');
            return;
        }
        const colorNumber = colorNumberMatch[1];

        if (!selectedShirtLinework) {
            console.warn('No shirt linework selected');
            return;
        }

        const shirtNumberMatch = selectedShirtLinework.match(/Top-(\d+)/);
        if (!shirtNumberMatch) {
            console.warn('Could not extract shirt number from selectedShirtLinework');
            return;
        }
        const shirtNumber = shirtNumberMatch[1];

        const shoulderType = selectedShoulderLinework.match(/(Thin|Broad|Narrow)-Shoulder/)[1].toLowerCase();

        // Find the matching shirt color asset
        const matchingShirtColor = shirtAssets.colors[shoulderType]?.find(colorAsset =>
            colorAsset.includes(`Top-${shirtNumber}`) && colorAsset.includes(`Color-${colorNumber}`)
        );

        if (matchingShirtColor) {
            setSelectedShirtColor(matchingShirtColor);
        } else {
            console.warn(`No matching shirt color found for shirtNumber ${shirtNumber}, colorNumber ${colorNumber}, shoulderType ${shoulderType}`);
            setSelectedShirtColor(null);
        }
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

    const handleLipColorChange = (colorNumber) => {
        if (selectedLipShape) {
            const selectedLipNumber = selectedLipShape.key.match(/Lip-Shape-(\d+)/)[1];

            // Find the lip color asset corresponding to the selected lip number and color number
            const matchingLipColor = lipAssets.find(({ key }) => {
                const lipNumberMatch = key.match(/Lip-(\d+)\//);
                const colorNumberMatch = key.match(/Color-(\d+)/);
                return (
                    lipNumberMatch &&
                    colorNumberMatch &&
                    lipNumberMatch[1] === selectedLipNumber &&
                    colorNumberMatch[1] === colorNumber
                );
            });

            if (matchingLipColor) {
                setSelectedLipColor(matchingLipColor);
            } else {
                console.warn(`No matching lip color found for Lip-${selectedLipNumber} and Color-${colorNumber}`);
                setSelectedLipColor(null);
            }
        }
    };



    const handleLipShapeChange = ({ asset, key }) => {
        setSelectedLipShape({ asset, key });

        // Check if a lip color is already selected
        if (selectedLipColor) {
            // Extract the color number from the previously selected lip color
            const prevColorNumberMatch = selectedLipColor.key.match(/Color-(\d+)/);
            if (prevColorNumberMatch) {
                const colorNumber = prevColorNumberMatch[1];

                // Extract the new lip number from the selected lip shape
                const newLipNumberMatch = key.match(/Lip-Shape-(\d+)/);
                if (newLipNumberMatch) {
                    const newLipNumber = newLipNumberMatch[1];

                    // Find the matching lip color for the new lip shape with the same color number
                    const matchingLipColor = lipAssets.find(({ asset, key }) => {
                        const lipNumberMatch = key.match(/Lip-(\d+)\//);
                        const colorNumberMatch = key.match(/Color-(\d+)/);
                        if (lipNumberMatch && colorNumberMatch) {
                            const lipNumber = lipNumberMatch[1];
                            const lipColorNumber = colorNumberMatch[1];
                            return lipNumber === newLipNumber && lipColorNumber === colorNumber;
                        }
                        return false;
                    });

                    // If a matching lip color is found, apply it
                    if (matchingLipColor) {
                        setSelectedLipColor(matchingLipColor);
                    } else {
                        // If no matching color is found, reset the lip color
                        setSelectedLipColor(null);
                    }
                } else {
                    // If the new lip number can't be extracted, reset the lip color
                    setSelectedLipColor(null);
                }
            } else {
                // If the previous color number can't be extracted, reset the lip color
                setSelectedLipColor(null);
            }
        } else {
            // If no lip color was previously selected, you might choose a default color or leave it null
            setSelectedLipColor(null);
        }
    };


    // removal section

    // SafeSpace.js

    // Hair
    const handleRemoveHairLinework = () => {
        setSelectedHairLinework(null);
        setSelectedHairColor(null);
    };

    const handleRemoveHairColor = () => {
        setSelectedHairColor(null);
    };

    // Chin
    const handleRemoveChinLinework = () => {
        setSelectedChinLinework(null);
        setSelectedChinSkinTone(null);
    };

    // Shirt
    const handleRemoveShirtLinework = () => {
        setSelectedShirtLinework(null);
        setSelectedShirtColor(null);
    };

    // Mustache
    const handleRemoveMustacheLinework = () => {
        setSelectedMustacheLinework(null);
        setSelectedMustacheColor(null);
    };

    // Chest Volume
    const handleRemoveChestVolume = () => {
        setShowChestVolume(false);
    };

    // Beard
    const handleRemoveBeardLinework = () => {
        setSelectedBeardLinework(null);
        setSelectedBeardColor(null);
    };

    // Ear
    const handleRemoveEarLinework = () => {
        setSelectedEarLinework(null);
        setSelectedEarSkinTone(null);
    };

    // Face Scar
    const handleRemoveFaceScar = () => {
        setSelectedFaceScar(null);
    };

    // Front Layer Fringe
    const handleRemoveFrontLayerFringeLinework = () => {
        setSelectedFrontLayerFringeLinework(null);
        setSelectedFrontLayerFringeColor(null);
    };

    // Secondary Fringe
    const handleRemoveSecondaryFringeLinework = () => {
        setSelectedSecondaryFringeLinework(null);
        setSelectedSecondaryFringeColor(null);
    };

    // Body Scar
    const handleRemoveBodyScar = () => {
        setSelectedBodyScar(null);
    };

    // Background
    const handleRemoveBackground = () => {
        setSelectedBackground(null);
    };

    // Accessory
    const handleRemoveAccessory = () => {
        setSelectedAccessory(null);
    };

    // Cheekbone
    const handleRemoveCheekbone = () => {
        setSelectedCheekbone(null);
    };

    // Upper Eyelash
    const handleRemoveUpperEyelash = () => {
        setSelectedUpperEyelash(null);
    };

    // Lower Eyelash
    const handleRemoveLowerEyelash = () => {
        setSelectedLowerEyelash(null);
    };
    
    // nose apex
    const handleRemoveNoseApex = () => {
        setSelectedNoseApex(null);
    };

    // nose bridge
    const handleRemoveNoseBridge = () => {
        setSelectedNoseBridge(null);
    };

    // eye color
    const handleRemoveEyeColor = () => {
        setSelectedEyeColor(null);
    };

    // eyeball
    const handleRemoveEyeball = () => {
        setSelectedEyeball(null);
    };

    // eye shape
    const handleRemoveEyeShape = () => {
        setSelectedEyeShape(null);
    };

    // eye makeup
    const handleRemoveEyeMakeup = () => {
        setSelectedEyeMakeup(null);
    };

    // eye socket shadow
    const handleRemoveEyeSocketShadow = () => {
        setSelectedEyeSocketShadow(null);
    };

    // mouth expression
    const handleRemoveMouthExpression = () => {
        setSelectedMouthExpression(null);
    };

    // lip shape
    const handleRemoveLipShape = () => {
        setSelectedLipShape(null);
        setSelectedLipColor(null);
    };

    // lip color
    const handleRemoveLipColor = () => {
        setSelectedLipColor(null);
    };

    // cleft
    const handleRemoveCleft = () => {
        setIsCleft(false);
    };

    // Utility function to select a random item from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Set default chin linework
useEffect(() => {
    if (!selectedChinLinework && chinAssets.linework.length > 0) {
        const defaultChin = chinAssets.linework.find(file => file.includes('Chin-1') && !file.includes('Cleft'));
        setSelectedChinLinework(defaultChin);
    }
}, [selectedChinLinework, chinAssets.linework]);

// Set default ear linework
useEffect(() => {
    if (!selectedEarLinework && earAssets.linework.length > 0) {
        const defaultEar = earAssets.linework.find(file => file.includes('Ear-7'));
        setSelectedEarLinework(defaultEar);
    }
}, [selectedEarLinework, earAssets.linework]);

// Ensure default shoulder linework and shoulder type are set
useEffect(() => {
    if (!selectedShoulderLinework && shoulderAssets.linework.length > 0) {
        const defaultLinework = shoulderAssets.linework.find(linework => linework.includes('Thin-Shoulder-1'));
        if (defaultLinework) {
            setSelectedShoulderLinework(defaultLinework);
            setSelectedShoulderType('thin');
        }
    }
}, [selectedShoulderLinework, shoulderAssets.linework]);

// Set head skin tone to tone number 22
useEffect(() => {
    if (!selectedHeadSkinTone && headAssets.colors.length > 0) {
        const toneNumber = '22'; // Set the skin tone number to 22

        // Update skin tone for the head
        const matchingHeadSkinTone = headAssets.colors.find(file =>
            file.includes(`Skin-Tone-${toneNumber}`)
        );
        setSelectedHeadSkinTone(matchingHeadSkinTone);
    }
}, [selectedHeadSkinTone, headAssets.colors]);

// Update chin skin tone when chin linework or head skin tone changes
useEffect(() => {
    if (selectedChinLinework && selectedHeadSkinTone) {
        const toneNumberMatch = selectedHeadSkinTone.match(/Skin-Tone-(\d+)/);
        if (toneNumberMatch) {
            const toneNumber = toneNumberMatch[1];
            const chinNumberMatch = selectedChinLinework.match(/Chin-(\d+)/);
            if (chinNumberMatch) {
                const chinNumber = chinNumberMatch[1];
                const matchingChinSkinTone = chinAssets.colors.find(file =>
                    file.includes(`Chin-${chinNumber}-Skin-Tone-${toneNumber}`)
                );
                setSelectedChinSkinTone(matchingChinSkinTone);
            }
        }
    }
}, [selectedChinLinework, selectedHeadSkinTone, chinAssets.colors]);

// Update ear skin tone when ear linework or head skin tone changes
useEffect(() => {
    if (selectedEarLinework && selectedHeadSkinTone) {
        const toneNumberMatch = selectedHeadSkinTone.match(/Skin-Tone-(\d+)/);
        if (toneNumberMatch) {
            const toneNumber = toneNumberMatch[1];
            const earNumberMatch = selectedEarLinework.match(/Ear-(\d+)/);
            if (earNumberMatch) {
                const earNumber = earNumberMatch[1];
                const matchingEarSkinTone = earAssets.colors.find(file =>
                    file.includes(`Ear-${earNumber}-Skin-Tone-${toneNumber}`)
                );
                setSelectedEarSkinTone(matchingEarSkinTone);
            }
        }
    }
}, [selectedEarLinework, selectedHeadSkinTone, earAssets.colors]);

// Update shoulder skin tone when shoulder linework or head skin tone changes
useEffect(() => {
    if (selectedShoulderLinework && selectedHeadSkinTone) {
        const toneNumberMatch = selectedHeadSkinTone.match(/Skin-Tone-(\d+)/);
        if (toneNumberMatch) {
            const toneNumber = toneNumberMatch[1];
            const shoulderTypeMatch = selectedShoulderLinework.match(/(Thin|Broad|Narrow)-Shoulder/);
            if (shoulderTypeMatch) {
                const shoulderType = shoulderTypeMatch[1];
                const matchingShoulderSkinTone = shoulderAssets.colors.find(file =>
                    file.includes(`${shoulderType}-Shoulder-Skin-Tone-${toneNumber}`)
                );
                setSelectedShoulderSkinTone(matchingShoulderSkinTone);
            }
        }
    }
}, [selectedShoulderLinework, selectedHeadSkinTone, shoulderAssets.colors]);


    return (
        <div className="safe-space">
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
                            className="character-layer shirt-color"
                        />
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

{selectedLipShape && (
    <img
        src={selectedLipShape.asset}
        alt="Selected Lip Shape"
        className="character-layer lip-linework"
        style={{ zIndex: selectedLipColor ? 0 : 36 }}
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
    {noseApexAssets.apex.map((apex, index) => {
        const isSelected = selectedNoseApex === apex;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button onClick={() => handleNoseApexChange(apex)} className="UI-tile-button">
                    <img src={apex} alt={`Nose Apex ${index}`} />
                    {/* Conditionally render CloseButton if this nose apex is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveNoseApex()} />
                    )}
                </button>
            </div>
        );
    })}
</div>

{/* Nose Bridge Options */}
<div className="option-category">
    <h3>Nose Bridge</h3>
    {noseBridgeAssets.bridge.map((bridge, index) => {
        const isSelected = selectedNoseBridge === bridge;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button onClick={() => handleNoseBridgeChange(bridge)} className="UI-tile-button">
                    <img src={bridge} alt={`Nose Bridge ${index}`} />
                    {/* Conditionally render CloseButton if this nose bridge is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveNoseBridge()} />
                    )}
                </button>
            </div>
        );
    })}
</div>


{/* Face Scar Options */}
<div className="option-category">
    <h3>Face Scars</h3>
    {faceScarAssets.scars.map((scarAsset, index) => {
        const isSelected = selectedFaceScar === scarAsset;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button onClick={() => handleFaceScarChange(scarAsset)} className="UI-tile-button">
                    <img src={scarAsset} alt={`Face Scar ${index}`} />
                    {/* Conditionally render CloseButton if this face scar is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveFaceScar()} />
                    )}
                </button>
            </div>
        );
    })}
</div>

{/* Body Scar Options */}
<div className="option-category">
    <h3>Body Scars</h3>
    {bodyScarAssets.scars.map((scarAsset, index) => {
        const isSelected = selectedBodyScar === scarAsset;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button onClick={() => handleBodyScarChange(scarAsset)} className="UI-tile-button">
                    <img src={scarAsset} alt={`Body Scar ${index}`} />
                    {/* Conditionally render CloseButton if this body scar is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveBodyScar()} />
                    )}
                </button>
            </div>
        );
    })}
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
    {eyelashAssets.eyelashes
        .filter(asset => asset.includes('Upper-Eyelash'))
        .map((upperEyelashAsset, index) => {
            const isSelected = selectedUpperEyelash === upperEyelashAsset;

            return (
                <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                    <button onClick={() => handleUpperEyelashChange(upperEyelashAsset)} className="UI-tile-button">
                        <img src={upperEyelashAsset} alt={`Upper Eyelash ${index}`} />
                        {/* Conditionally render CloseButton if this upper eyelash is selected */}
                        {isSelected && (
                            <CloseButton onClick={() => handleRemoveUpperEyelash()} />
                        )}
                    </button>
                </div>
            );
        })}
</div>


{/* Lower Eyelash Options */}
<div className="option-category">
    <h3>Lower Eyelashes</h3>
    {eyelashAssets.eyelashes
        .filter(asset => asset.includes('Lower-Eyelash'))
        .map((lowerEyelashAsset, index) => {
            const isSelected = selectedLowerEyelash === lowerEyelashAsset;

            return (
                <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                    <button onClick={() => handleLowerEyelashChange(lowerEyelashAsset)} className="UI-tile-button">
                        <img src={lowerEyelashAsset} alt={`Lower Eyelash ${index}`} />
                        {/* Conditionally render CloseButton if this lower eyelash is selected */}
                        {isSelected && (
                            <CloseButton onClick={() => handleRemoveLowerEyelash()} />
                        )}
                    </button>
                </div>
            );
        })}
</div>



{/* Eye Socket Shadow Options */}
<div className="option-category">
    <h3>Eye Socket Shadows</h3>
    {eyeSocketShadowAssets.socketShadows.map((socketShadow, index) => {
        const isSelected = selectedEyeSocketShadow === socketShadow;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button onClick={() => handleEyeSocketShadowChange(socketShadow)} className="UI-tile-button">
                    <img src={socketShadow} alt={`Eye Socket Shadow ${index}`} />
                    {/* Conditionally render CloseButton if this eye socket shadow is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveEyeSocketShadow()} />
                    )}
                </button>
            </div>
        );
    })}
</div>


<div className="option-category">
    <h3>Eye Makeup</h3>
    {(() => {
        // Get available eye makeup color numbers
        const availableEyeMakeupColorNumbers = Array.from(
            new Set(
                eyeMakeupAssets.makeup
                    .map(({ key }) => {
                        const colorNumberMatch = key.match(/Makeup-Color-(\d+)/);
                        return colorNumberMatch ? colorNumberMatch[1] : null;
                    })
                    .filter(Boolean)
            )
        );

        // Render swatches for available colors
        return availableEyeMakeupColorNumbers.map((colorNumber) => {
            // Find the swatch with this color number
            const swatch = makeupColorSwatches.find(({ key }) =>
                key.includes(`Makeup-Color-${colorNumber}`)
            );

            // Determine if this colorNumber is selected
            const isSelected = selectedEyeMakeup && selectedEyeMakeup.key.includes(`Makeup-Color-${colorNumber}`);

            if (swatch) {
                return (
                    <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={colorNumber}>
                        <button onClick={() => handleEyeMakeupChange(colorNumber)} className='UI-tile-button'>
                            <img src={swatch.asset} alt={`Eye Makeup Color ${colorNumber}`} />
                            {isSelected && (
                                <CloseButton onClick={() => handleRemoveEyeMakeup()} />
                            )}
                        </button>
                    </div>
                );
            }
            return null;
        });
    })()}
</div>





{/* Accessory Options */}
<div className="option-category">
    <h3>Accessories</h3>
    {accessoryAssets.accessories.map((accessoryAsset, index) => {
        const isSelected = selectedAccessory === accessoryAsset;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button
                    onClick={() => handleAccessoryChange(accessoryAsset)}
                    className='UI-tile-button'
                >
                    <img src={accessoryAsset} alt={`Accessory ${index}`} />
                    {/* Conditionally render CloseButton if this accessory is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveAccessory()} />
                    )}
                </button>
            </div>
        );
    })}
</div>


{/* Mouth Expression Options */}
<div className="option-category">
    <h3>Mouth Expressions</h3>
    {mouthExpressionAssets.map((expression, index) => {
        const isSelected = selectedMouthExpression === expression;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button
                    onClick={() => handleMouthExpressionChange(expression)}
                    className='UI-tile-button'
                >
                    <img src={expression} alt={`Mouth Expression ${index}`} />
                    {/* Conditionally render CloseButton if this mouth expression is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveMouthExpression()} />
                    )}
                </button>
            </div>
        );
    })}
</div>


{/* Lip Shape Options */}
<div className="option-category">
    <h3>Lip Shapes</h3>
    {lipShapeAssets.map(({ asset, key }, index) => {
        const isSelected = selectedLipShape?.key === key;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button
                    onClick={() => handleLipShapeChange({ asset, key })}
                    className='UI-tile-button'
                >
                    <img src={asset} alt={`Lip Shape ${index}`} />
                    {/* Conditionally render CloseButton if this lip shape is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveLipShape()} />
                    )}
                </button>
            </div>
        );
    })}
</div>




{/* Lip Color Options */}
{selectedLipShape && (
    <div className="option-category">
        <h3>Lip Colors</h3>
        {(() => {
            // Get the selected lip number
            const selectedLipNumber = selectedLipShape.key.match(/Lip-Shape-(\d+)/)[1];

            // Get available lip colors for the selected lip shape
            const availableLipColors = lipAssets.filter(({ key }) => {
                const lipNumberMatch = key.match(/Lip-(\d+)\//);
                return lipNumberMatch && lipNumberMatch[1] === selectedLipNumber;
            });

            // Get unique color numbers
            const availableColorNumbers = Array.from(
                new Set(
                    availableLipColors
                        .map(({ key }) => {
                            const colorNumberMatch = key.match(/Color-(\d+)/);
                            return colorNumberMatch ? colorNumberMatch[1] : null;
                        })
                        .filter(Boolean)
                )
            );

            // Render swatches for available colors
            return availableColorNumbers.map((colorNumber) => {
                // Find the swatch with this color number
                const swatch = makeupColorSwatches.find(({ key }) =>
                    key.includes(`Makeup-Color-${colorNumber}`)
                );

                // Determine if this colorNumber is selected
                const isSelected = selectedLipColor && selectedLipColor.key.includes(`Color-${colorNumber}`);

                if (swatch) {
                    return (
                        <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={colorNumber}>
                            <button onClick={() => handleLipColorChange(colorNumber)} className='UI-tile-button'>
                                <img src={swatch.asset} alt={`Lip Color ${colorNumber}`} />
                                {isSelected && (
                                    <CloseButton onClick={() => handleRemoveLipColor()} />
                                )}
                            </button>
                        </div>
                    );
                }
                return null;
            });
        })()}
    </div>
)}





{/* Cheekbone Options */}
<div className="option-category">
    <h3>Cheekbones</h3>
    {cheekboneAssets.cheekbones.map((cheekboneAsset, index) => {
        const isSelected = selectedCheekbone === cheekboneAsset;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button
                    onClick={() => handleCheekboneChange(cheekboneAsset)}
                    className='UI-tile-button'
                >
                    <img src={cheekboneAsset} alt={`Cheekbone ${index}`} />
                    {/* Conditionally render CloseButton if this cheekbone is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveCheekbone()} />
                    )}
                </button>
            </div>
        );
    })}
</div>



                    {/* Hair Linework Options */}
                    <div className="option-category">
                        <h3>Hair Linework</h3>
                        {hairAssets && hairAssets.linework.map((hairLinework, index) => {
                            const isSelected = selectedHairLinework === hairLinework;

                            return (
                                <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                                    <button
                                        onClick={() => handleHairLineworkChange(hairLinework)}
                                        className='UI-tile-button'
                                    >
                                        <img src={hairLinework} alt={`Hair Linework ${index}`} />
                                        {/* Conditionally render CloseButton if this hairLinework is selected */}
                                        {isSelected && (
                                            <CloseButton onClick={() => handleRemoveHairLinework()} />
                                        )}
                                    </button>
                                </div>
                            );
                        })}
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
        .map((fringeLinework, index) => {
            const isSelected = selectedFrontLayerFringeLinework === fringeLinework;

            return (
                <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                    <button
                        onClick={() => handleFrontLayerFringeLineworkChange(fringeLinework)}
                        className='UI-tile-button'
                    >
                        <img src={fringeLinework} alt={`Front Layer Fringe Linework ${index}`} />
                        {/* Conditionally render CloseButton if this fringe linework is selected */}
                        {isSelected && (
                            <CloseButton onClick={() => handleRemoveFrontLayerFringeLinework()} />
                        )}
                    </button>
                </div>
            );
        })}
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
        .map((fringeLinework, index) => {
            const isSelected = selectedSecondaryFringeLinework === fringeLinework;

            return (
                <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                    <button
                        onClick={() => handleSecondaryFringeLineworkChange(fringeLinework)}
                        className='UI-tile-button'
                    >
                        <img src={fringeLinework} alt={`Secondary Fringe Linework ${index}`} />
                        {/* Conditionally render CloseButton if this fringe linework is selected */}
                        {isSelected && (
                            <CloseButton onClick={() => handleRemoveSecondaryFringeLinework()} />
                        )}
                    </button>
                </div>
            );
        })}
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
    {mustacheAssets
        .filter(({ key }) => !key.includes('Hair-Color'))
        .map(({ asset, key }, index) => {
            const isSelected = selectedMustacheLinework?.key === key;

            return (
                <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                    <button
                        onClick={() => handleMustacheLineworkChange({ asset, key })}
                        className='UI-tile-button'
                    >
                        <img src={asset} alt={`Mustache Linework ${index}`} />
                        {/* Conditionally render CloseButton if this mustache is selected */}
                        {isSelected && (
                            <CloseButton onClick={() => handleRemoveMustacheLinework()} />
                        )}
                    </button>
                </div>
            );
        })}
</div>



                    {/* Mustache Color Options */}
                    {selectedMustacheLinework && (
                        <div className="option-category">
                            <h3>Mustache Colors</h3>
                            {hairColorSwatches.map((swatch, index) => (
                                <button key={index} onClick={() => handleMustacheColorChange(swatch)}>
                                    <img src={swatch} alt={`Mustache Color ${index}`} />
                                </button>
                            ))}
                        </div>
                    )}


{/* Beard Linework Options */}
<div className="option-category">
    <h3>Beards</h3>
    {beardAssets
        .filter(({ key }) => !key.includes('Hair-Color'))
        .map(({ asset, key }, index) => {
            const isSelected = selectedBeardLinework?.key === key;

            return (
                <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                    <button
                        onClick={() => handleBeardLineworkChange({ asset, key })}
                        className='UI-tile-button'
                    >
                        <img src={asset} alt={`Beard Linework ${index}`} />
                        {/* Conditionally render CloseButton if this beard is selected */}
                        {isSelected && (
                            <CloseButton onClick={() => handleRemoveBeardLinework()} />
                        )}
                    </button>
                </div>
            );
        })}
</div>


                    {/* Beard Color Options */}
                    {selectedBeardLinework && (
                        <div className="option-category">
                            <h3>Beard Colors</h3>
                            {hairColorSwatches.map((swatch, index) => (
                                <button key={index} onClick={() => handleBeardColorChange(swatch)}>
                                    <img src={swatch} alt={`Beard Color ${index}`} />
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
    {shirtAssets.linework[selectedShoulderType]?.map((linework, index) => {
        // Extract shirt number from the linework filename
        const lineworkShirtNumberMatch = linework.match(/Top-(\d+)/);
        const lineworkShirtNumber = lineworkShirtNumberMatch ? lineworkShirtNumberMatch[1] : null;

        // Extract shirt number from the selected shirt linework
        const selectedShirtNumberMatch = selectedShirtLinework?.match(/Top-(\d+)/);
        const selectedShirtNumber = selectedShirtNumberMatch ? selectedShirtNumberMatch[1] : null;

        const isSelected = lineworkShirtNumber === selectedShirtNumber;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={lineworkShirtNumber || index}>
                <button
                    onClick={() => handleShirtLineworkChange(linework)}
                    className='UI-tile-button'
                >
                    <img src={linework} alt={`Shirt Linework ${lineworkShirtNumber}`} />
                    {/* Conditionally render CloseButton if this shirt linework is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveShirtLinework()} />
                    )}
                </button>
            </div>
        );
    })}
</div>




                    {selectedShirtLinework && (
                        <div className="option-category">
                            <h3>Shirt Colors</h3>
                            {clothesColorSwatches.map(({ asset, key }, index) => (
                                <button key={index} onClick={() => handleShirtColorChange(key)}>
                                    <img src={asset} alt={`Shirt Color ${index}`} />
                                </button>
                            ))}
                        </div>
                    )}



{/* Background Options */}
<div className="option-category">
    <h3>Backgrounds</h3>
    {backgroundAssets.backgrounds.map((backgroundAsset, index) => {
        const isSelected = selectedBackground === backgroundAsset;

        return (
            <div className={`UI-tile ${isSelected ? 'selected' : ''}`} key={index}>
                <button
                    onClick={() => handleBackgroundChange(backgroundAsset)}
                    className='UI-tile-button'
                >
                    <img src={backgroundAsset} alt={`Background ${index}`} />
                    {/* Conditionally render CloseButton if this background is selected */}
                    {isSelected && (
                        <CloseButton onClick={() => handleRemoveBackground()} />
                    )}
                </button>
            </div>
        );
    })}
</div>


                </div>
            </div>
        </div>
    );

};

export default SafeSpace;
