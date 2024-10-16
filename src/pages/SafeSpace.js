import React, { useState, useEffect } from 'react';
import { loadEyeColorSwatches, loadEyebrowAssets, loadClothesColorSwatches, loadMakeupColorSwatches, loadLipShapeAssets, skinToneSwatches, hairColorSwatches, loadFrontLayerFringeAssets, loadSecondaryFringeAssets, loadMouthExpressionAssets, loadLipAssets, loadNoseApexAssets, loadNoseBridgeAssets, loadShirtAssets, loadShoulderAssets, loadChestVolumeAssets, loadEyeballAssets, loadEyeShapeAssets, loadEyeMakeupAssets, loadEyeSocketShadowAssets, loadHeadAssets, loadChinAssets, loadEarAssets, loadHairAssets, loadFaceScarAssets, loadBodyScarAssets, loadBackgroundAssets, loadAccessoryAssets, loadBeardAssets, loadMustacheAssets, loadCheekboneAssets, loadEyelashAssets, loadEyeColorAssets } from '../utilities/loadAssets';
import './SafeSpace.css'; // Assuming you're using the provided CSS
import { auth, db } from '../firebase-config'; // Adjust the path if needed
import { doc, setDoc, getDoc } from 'firebase/firestore';


const SafeSpace = () => {
    // State for selected skin tone, chin linework, and cleft option
    const [selectedHeadSkinTone, setSelectedHeadSkinTone] = useState(null);
    const [selectedChinSkinTone, setSelectedChinSkinTone] = useState(null);
    const [selectedChinLinework, setSelectedChinLinework] = useState(null);
    const [selectedEarLinework, setSelectedEarLinework] = useState(null);
    const [selectedEarSkinTone, setSelectedEarSkinTone] = useState(null);
    const [selectedHairLinework, setSelectedHairLinework] = useState(null);
    const [selectedHairColor, setSelectedHairColor] = useState(null);
    const [selectedFaceScars, setSelectedFaceScars] = useState([]);
    const [selectedFrontLayerFringeLinework, setSelectedFrontLayerFringeLinework] = useState(null);
    const [selectedFrontLayerFringeColor, setSelectedFrontLayerFringeColor] = useState(null);

    const [selectedSecondaryFringeLinework, setSelectedSecondaryFringeLinework] = useState(null);
    const [selectedSecondaryFringeColor, setSelectedSecondaryFringeColor] = useState(null);

    const [selectedBodyScars, setSelectedBodyScars] = useState([]);
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
    const [selectedEyeShape, setSelectedEyeShape] = useState(null);
    const [selectedEyeMakeup, setSelectedEyeMakeup] = useState(null);
    const [selectedEyeSocketShadow, setSelectedEyeSocketShadow] = useState(null);
    // Shoulder and chest volume states
    const [selectedShoulderLinework, setSelectedShoulderLinework] = useState('/static/media/Narrow-Shoulder-1.757145b45a2fef3f8869.png');
    const [selectedShoulderSkinTone, setSelectedShoulderSkinTone] = useState(null);
    const [showChestVolume, setShowChestVolume] = useState(false);
    const [selectedShoulderType, setSelectedShoulderType] = useState('narrow'); // Can be 'narrow', 'broad', or 'thin'
    // shirt states
    const [selectedShirtLinework, setSelectedShirtLinework] = useState(null);
    const [selectedShirtColor, setSelectedShirtColor] = useState(null);
    const [selectedNoseApex, setSelectedNoseApex] = useState(null);
    const [selectedNoseBridge, setSelectedNoseBridge] = useState(null);
    const [selectedMouthExpression, setSelectedMouthExpression] = useState(null);
    const [selectedLipColor, setSelectedLipColor] = useState(null);

    const [selectedLipShape, setSelectedLipShape] = useState(null);
    const [selectedEyebrow, setSelectedEyebrow] = useState(null);
    const [selectedSkinToneSwatch, setSelectedSkinToneSwatch] = useState(null);

    // Shirt States
    const [selectedBaseShirtLinework, setSelectedBaseShirtLinework] = useState(null);
    const [selectedBaseShirtColor, setSelectedBaseShirtColor] = useState(null);
    const [selectedMidShirtLinework, setSelectedMidShirtLinework] = useState(null);
    const [selectedMidShirtColor, setSelectedMidShirtColor] = useState(null);
    const [selectedOuterShirtLinework, setSelectedOuterShirtLinework] = useState(null);
    const [selectedOuterShirtColor, setSelectedOuterShirtColor] = useState(null);
    const [shirtAssets, setShirtAssets] = useState({});




    // key states
    const [selectedHairLineworkKey, setSelectedHairLineworkKey] = useState(null);



    const handleSaveAvatar = async () => {
        if (!auth.currentUser) {
            alert('You need to be logged in to save your avatar.');
            return;
        }

        // Collect all avatar state variables into avatarData
        const avatarData = {
            selectedSkinToneSwatch,
            selectedHeadSkinTone,
            selectedShoulderSkinTone,
            selectedEarSkinTone,
            selectedShoulderSkinTone,
            selectedChinSkinTone,
            selectedShoulderLinework,
            selectedShoulderType,
            showChestVolume,
            selectedChinLinework,
            isCleft,
            selectedEarLinework,
            selectedHairLinework,
            selectedHairColor,
            selectedFrontLayerFringeLinework,
            selectedFrontLayerFringeColor,
            selectedSecondaryFringeLinework,
            selectedSecondaryFringeColor,
            selectedFaceScars,
            selectedBodyScars,
            selectedAccessory,
            selectedMustacheLinework,
            selectedMustacheColor,
            selectedBeardLinework,
            selectedBeardColor,
            selectedCheekbone,
            selectedUpperEyelash,
            selectedLowerEyelash,
            selectedEyeColor,
            selectedEyeShape,
            selectedEyeMakeup,  // Make sure this field exists and is saved
            selectedEyeSocketShadow,
            selectedBackground,
            selectedBaseShirtLinework,
            selectedBaseShirtColor,
            selectedMidShirtLinework,
            selectedMidShirtColor,
            selectedOuterShirtLinework,
            selectedOuterShirtColor,
            selectedMouthExpression,
            selectedLipShape,  // Make sure this field exists and is saved
            selectedLipColor,
            selectedNoseApex,
            selectedNoseBridge,
            selectedEyebrow,


        };

        try {
            const userDocRef = doc(db, `users/${auth.currentUser.uid}`);
            await setDoc(userDocRef, { avatarData }, { merge: true });
            alert('Avatar saved successfully!');
        } catch (error) {
            console.error('Error saving avatar:', error);
            alert('Failed to save avatar. Please try again.');
        }
    };



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

    const eyebrowAssets = loadEyebrowAssets(require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/3-Face-Parts/Eyebrows', true, /\.(png|jpe?g|svg)$/));

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

        // Load eye color swatches
        const eyeColorSwatches = loadEyeColorSwatches(
            require.context(
                '../media/Tasia-Pixel-Project-Revision-1056x1056/14-Color-Swatches',
                false,
                /Eye-Color-\d+\.(png|jpe?g|svg)$/
            )
        );


    // Handle skin tone change
    const handleSkinToneClick = (swatch) => {
        setSelectedSkinToneSwatch(swatch);  // Set the clicked swatch as selected
        handleSkinToneChange(swatch);  // Call your existing function to handle the skin tone change

    };

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
        // hairLinework is a string (image URL)
        setSelectedHairLinework(hairLinework);

        // Extract the hair number from the image URL
        const hairMatch = hairLinework.match(/Hair-\d+/);
        const hairNumber = hairMatch ? hairMatch[0] : null;

        const currentColorNumber = selectedHairColor?.match(/Color-(\d+)/)?.[1];

        // Find matching hair color
        const matchingHairColor = hairAssets.colors.find((colorAsset) => {
            const includesHairNumber = hairNumber ? colorAsset.includes(hairNumber) : false;
            const includesColorNumber = currentColorNumber ? colorAsset.includes(`Color-${currentColorNumber}`) : true;
            return includesHairNumber && includesColorNumber;
        });

        setSelectedHairColor(matchingHairColor || null);
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

    const handleEyeColorChange = (swatch) => {
        const colorNumber = swatch.match(/Eye-Color-(\d+)/)[1]; // Extract the color number

        if (selectedEyeColor) {
            const matchingEyeColor = eyeColorAssets.find(
                (color) => color.includes(`Eye-Color-${colorNumber}`) && color.includes(selectedEyeColor.match(/Eye-\d+/)[0])
            );

            if (matchingEyeColor) {
                setSelectedEyeColor(matchingEyeColor); // Set the matching eye color
            } else {
                console.warn("No matching eye color found.");
            }
        } else {
            console.warn("No eye linework selected yet.");
        }
    };

    const handleFaceScarChange = (faceScar) => {
        setSelectedFaceScars(prevScars => {
            if (prevScars.includes(faceScar)) {
                // Remove the scar if it's already selected
                return prevScars.filter(scar => scar !== faceScar);
            } else {
                // Add the scar if it's not selected
                return [...prevScars, faceScar];
            }
        });
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
        setSelectedBodyScars((prevScars) => {
            if (prevScars.includes(bodyScar)) {
                // Remove the scar if it's already selected
                return prevScars.filter((scar) => scar !== bodyScar);
            } else {
                // Add the scar if it's not selected
                return [...prevScars, bodyScar];
            }
        });
    };


    const handleBackgroundChange = (backgroundAsset) => {
        setSelectedBackground(backgroundAsset);
        document.querySelector('.character-preview').style.backgroundImage = `url(${backgroundAsset})`;
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

    // shirt logic

    const handleBaseShirtLineworkChange = (linework) => {
        setSelectedBaseShirtLinework(linework);

        // Update base shirt color to match the new linework and current color
        const shoulderType = selectedShoulderType;
        const shirtNumberMatch = linework.match(/Top-(\d+)/);
        if (shirtNumberMatch) {
            const shirtNumber = shirtNumberMatch[1];
            const currentColorNumberMatch = selectedBaseShirtColor?.match(/Color-(\d+)/);
            const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;
            if (currentColorNumber) {
                const matchingShirtColor = shirtAssets[shoulderType]['base-layer'].colors.find(
                    (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                );
                if (matchingShirtColor) {
                    setSelectedBaseShirtColor(matchingShirtColor);
                } else {
                    setSelectedBaseShirtColor(null);
                }
            } else {
                setSelectedBaseShirtColor(null);
            }
        } else {
            setSelectedBaseShirtColor(null);
        }
    };

    const handleBaseShirtColorChange = (swatchKey) => {
        const colorNumberMatch = swatchKey.match(/Clothes-Color-(\d+)/);
        if (!colorNumberMatch) {
            console.warn('Could not extract color number from swatch key');
            return;
        }
        const colorNumber = colorNumberMatch[1];

        if (!selectedBaseShirtLinework) {
            console.warn('No base shirt linework selected');
            return;
        }

        const shirtNumberMatch = selectedBaseShirtLinework.match(/Top-(\d+)/);
        if (!shirtNumberMatch) {
            console.warn('Could not extract shirt number from selectedBaseShirtLinework');
            return;
        }
        const shirtNumber = shirtNumberMatch[1];

        const shoulderType = selectedShoulderType;

        const matchingShirtColor = shirtAssets[shoulderType]['base-layer'].colors.find(colorAsset =>
            colorAsset.includes(`Top-${shirtNumber}`) && colorAsset.includes(`Color-${colorNumber}`)
        );

        if (matchingShirtColor) {
            setSelectedBaseShirtColor(matchingShirtColor);
        } else {
            console.warn(`No matching base shirt color found for shirtNumber ${shirtNumber}, colorNumber ${colorNumber}, shoulderType ${shoulderType}`);
            setSelectedBaseShirtColor(null);
        }
    };

    const handleMidShirtLineworkChange = (linework) => {
        setSelectedMidShirtLinework(linework);

        // Update mid shirt color to match the new linework and current color
        const shoulderType = selectedShoulderType;
        const shirtNumberMatch = linework.match(/Top-(\d+)/);
        if (shirtNumberMatch) {
            const shirtNumber = shirtNumberMatch[1];
            const currentColorNumberMatch = selectedMidShirtColor?.match(/Color-(\d+)/);
            const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;
            if (currentColorNumber) {
                const matchingShirtColor = shirtAssets[shoulderType]['mid-layer'].colors.find(
                    (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                );
                if (matchingShirtColor) {
                    setSelectedMidShirtColor(matchingShirtColor);
                } else {
                    setSelectedMidShirtColor(null);
                }
            } else {
                setSelectedMidShirtColor(null);
            }
        } else {
            setSelectedMidShirtColor(null);
        }
    };



    const handleMidShirtColorChange = (swatchKey) => {
        const colorNumberMatch = swatchKey.match(/Clothes-Color-(\d+)/);
        if (!colorNumberMatch) {
            console.warn('Could not extract color number from swatch key');
            return;
        }
        const colorNumber = colorNumberMatch[1];

        if (!selectedMidShirtLinework) {
            console.warn('No mid shirt linework selected');
            return;
        }

        const shirtNumberMatch = selectedMidShirtLinework.match(/Top-(\d+)/);
        if (!shirtNumberMatch) {
            console.warn('Could not extract shirt number from selectedMidShirtLinework');
            return;
        }
        const shirtNumber = shirtNumberMatch[1];

        const shoulderType = selectedShoulderType;

        const matchingShirtColor = shirtAssets[shoulderType]['mid-layer'].colors.find((colorAsset) =>
            colorAsset.includes(`Top-${shirtNumber}`) && colorAsset.includes(`Color-${colorNumber}`)
        );

        if (matchingShirtColor) {
            setSelectedMidShirtColor(matchingShirtColor);
        } else {
            console.warn(
                `No matching mid shirt color found for shirtNumber ${shirtNumber}, colorNumber ${colorNumber}, shoulderType ${shoulderType}`
            );
            setSelectedMidShirtColor(null);
        }
    };



    const handleOuterShirtLineworkChange = (linework) => {
        setSelectedOuterShirtLinework(linework);

        // Update outer shirt color to match the new linework and current color
        const shoulderType = selectedShoulderType;
        const shirtNumberMatch = linework.match(/Top-(\d+)/);
        if (shirtNumberMatch) {
            const shirtNumber = shirtNumberMatch[1];
            const currentColorNumberMatch = selectedOuterShirtColor?.match(/Color-(\d+)/);
            const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;
            if (currentColorNumber) {
                const matchingShirtColor = shirtAssets[shoulderType]['outer-layer'].colors.find(
                    (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                );
                if (matchingShirtColor) {
                    setSelectedOuterShirtColor(matchingShirtColor);
                } else {
                    setSelectedOuterShirtColor(null);
                }
            } else {
                setSelectedOuterShirtColor(null);
            }
        } else {
            setSelectedOuterShirtColor(null);
        }
    };



    const handleOuterShirtColorChange = (swatchKey) => {
        const colorNumberMatch = swatchKey.match(/Clothes-Color-(\d+)/);
        if (!colorNumberMatch) {
            console.warn('Could not extract color number from swatch key');
            return;
        }
        const colorNumber = colorNumberMatch[1];

        if (!selectedOuterShirtLinework) {
            console.warn('No outer shirt linework selected');
            return;
        }

        const shirtNumberMatch = selectedOuterShirtLinework.match(/Top-(\d+)/);
        if (!shirtNumberMatch) {
            console.warn('Could not extract shirt number from selectedOuterShirtLinework');
            return;
        }
        const shirtNumber = shirtNumberMatch[1];

        const shoulderType = selectedShoulderType;

        const matchingShirtColor = shirtAssets[shoulderType]['outer-layer'].colors.find((colorAsset) =>
            colorAsset.includes(`Top-${shirtNumber}`) && colorAsset.includes(`Color-${colorNumber}`)
        );

        if (matchingShirtColor) {
            setSelectedOuterShirtColor(matchingShirtColor);
        } else {
            console.warn(
                `No matching outer shirt color found for shirtNumber ${shirtNumber}, colorNumber ${colorNumber}, shoulderType ${shoulderType}`
            );
            setSelectedOuterShirtColor(null);
        }
    };



    useEffect(() => {
        const shoulderType = selectedShoulderType; // 'thin', 'broad', or 'narrow'

        // Update Base Layer Shirt
        if (selectedBaseShirtLinework) {
            const shirtNumberMatch = selectedBaseShirtLinework.match(/Top-(\d+)/);
            if (shirtNumberMatch) {
                const shirtNumber = shirtNumberMatch[1];
                const matchingLinework = shirtAssets[shoulderType]['base-layer'].linework.find((linework) =>
                    linework.includes(`Top-${shirtNumber}`)
                );
                setSelectedBaseShirtLinework(matchingLinework || null);

                const currentColorNumberMatch = selectedBaseShirtColor?.match(/Color-(\d+)/);
                const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;

                if (currentColorNumber) {
                    const matchingColor = shirtAssets[shoulderType]['base-layer'].colors.find(
                        (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                    );
                    setSelectedBaseShirtColor(matchingColor || null);
                }
            }
        }

        // Update Mid Layer Shirt
        if (selectedMidShirtLinework) {
            const shirtNumberMatch = selectedMidShirtLinework.match(/Top-(\d+)/);
            if (shirtNumberMatch) {
                const shirtNumber = shirtNumberMatch[1];
                const matchingLinework = shirtAssets[shoulderType]['mid-layer'].linework.find((linework) =>
                    linework.includes(`Top-${shirtNumber}`)
                );
                setSelectedMidShirtLinework(matchingLinework || null);

                const currentColorNumberMatch = selectedMidShirtColor?.match(/Color-(\d+)/);
                const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;

                if (currentColorNumber) {
                    const matchingColor = shirtAssets[shoulderType]['mid-layer'].colors.find(
                        (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                    );
                    setSelectedMidShirtColor(matchingColor || null);
                }
            }
        }

        // Update Outer Layer Shirt
        if (selectedOuterShirtLinework) {
            const shirtNumberMatch = selectedOuterShirtLinework.match(/Top-(\d+)/);
            if (shirtNumberMatch) {
                const shirtNumber = shirtNumberMatch[1];
                const matchingLinework = shirtAssets[shoulderType]['outer-layer'].linework.find((linework) =>
                    linework.includes(`Top-${shirtNumber}`)
                );
                setSelectedOuterShirtLinework(matchingLinework || null);

                const currentColorNumberMatch = selectedOuterShirtColor?.match(/Color-(\d+)/);
                const currentColorNumber = currentColorNumberMatch ? currentColorNumberMatch[1] : null;

                if (currentColorNumber) {
                    const matchingColor = shirtAssets[shoulderType]['outer-layer'].colors.find(
                        (color) => color.includes(`Top-${shirtNumber}`) && color.includes(`Color-${currentColorNumber}`)
                    );
                    setSelectedOuterShirtColor(matchingColor || null);
                }
            }
        }
    }, [
        selectedShoulderType,
        selectedBaseShirtLinework,
        selectedBaseShirtColor,
        selectedMidShirtLinework,
        selectedMidShirtColor,
        selectedOuterShirtLinework,
        selectedOuterShirtColor,
        shirtAssets,
    ]);





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

    const handleNoseApexChange = (apex) => {
        setSelectedNoseApex(apex);
    };

    // Function to handle the change of eyebrow
    const handleEyebrowChange = (eyebrow) => {
        setSelectedEyebrow(eyebrow);
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

    const getEyeballForEyeColor = (eyeColorAsset) => {
        const eyeColorNumberMatch = eyeColorAsset.match(/Eye-Color-(\d+)/);
        if (eyeColorNumberMatch) {
            const eyeColorNumber = eyeColorNumberMatch[1];

            const matchingEyeball = eyeballAssets.eyeballs.find((asset) =>
                asset.includes(`Eyeball-${eyeColorNumber}`)
            );

            if (matchingEyeball) {
                return matchingEyeball;
            } else {
                console.warn(`No matching eyeball found for Eye-Color-${eyeColorNumber}`);
                return null;
            }
        } else {
            console.warn('Could not extract eye color number from eyeColorAsset');
            return null;
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

    // Remove all face scars (if you want a button to clear all scars)
    const handleRemoveAllFaceScars = () => {
        setSelectedFaceScars([]);
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
    const handleRemoveSpecificBodyScar = (bodyScar) => {
        setSelectedBodyScars((prevScars) => prevScars.filter((scar) => scar !== bodyScar));
    };


    // Background
    const handleRemoveBackground = () => {
        setSelectedBackground('/path-to-your-default-background-image.jpg'); // Reset to default
        document.querySelector('.character-preview').style.backgroundImage = `url(/path-to-your-default-background-image.jpg)`; // Set to default background
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
        // Remove this line if present:
        // setSelectedEyeball(null);
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
        setSelectedLipShape(null);
        setSelectedLipColor(null);
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

    // eyebrow
    const handleRemoveEyebrow = () => {
        setSelectedEyebrow(null);
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

    useEffect(() => {
        const fetchAvatarData = async (user) => {
            if (user) {
                const userDocRef = doc(db, `users/${user.uid}`);
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
                    setSelectedBackground(avatarData.selectedBackground || null);
                    if (avatarData.selectedBackground) {
                        document.querySelector('.character-preview').style.backgroundImage = `url(${avatarData.selectedBackground})`;
                    }

                }

            }
        };


        // Use Firebase's onAuthStateChanged to ensure the user is correctly detected on page load
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchAvatarData(user);  // Fetch the avatar data when the user is authenticated
            }
        });

        // Cleanup the subscription to avoid memory leaks
        return () => unsubscribe();
    }, []);

    // function to reset the character to default values
    const resetCharacter = () => {
        // Resetting all states to their default values
        setSelectedHairLinework(null);
        setSelectedHairColor(null);
        setSelectedChinLinework(null);
        setSelectedChinSkinTone(null);
        setSelectedEarLinework(null);
        setSelectedEarSkinTone(null);
        setSelectedHeadSkinTone(null);
        setSelectedShoulderLinework(null);
        setSelectedShoulderType(null);
        setSelectedShoulderSkinTone(null);
        setSelectedShirtLinework(null);
        setSelectedShirtColor(null);
        setSelectedBaseShirtLinework(null);
        setSelectedBaseShirtColor(null);
        setSelectedMidShirtLinework(null);
        setSelectedMidShirtColor(null);
        setSelectedOuterShirtLinework(null);
        setSelectedOuterShirtColor(null);
        setSelectedMustacheLinework(null);
        setSelectedMustacheColor(null);
        setShowChestVolume(false);
        setSelectedBeardLinework(null);
        setSelectedBeardColor(null);
        setSelectedFrontLayerFringeLinework(null);
        setSelectedFrontLayerFringeColor(null);
        setSelectedSecondaryFringeLinework(null);
        setSelectedSecondaryFringeColor(null);
        setSelectedBodyScars([]);
        setSelectedAccessory(null);
        setSelectedCheekbone(null);
        setSelectedUpperEyelash(null);
        setSelectedLowerEyelash(null);
        setSelectedEyeColor(null);
        setSelectedEyeShape(null);
        setSelectedEyeMakeup(null);
        setSelectedEyeSocketShadow(null);
        setSelectedNoseApex(null);
        setSelectedNoseBridge(null);
        setSelectedMouthExpression(null);
        setSelectedLipShape(null);
        setSelectedLipColor(null);
        setIsCleft(false);
        setSelectedEyebrow(null);
        setSelectedFaceScars([]);
        setSelectedBackground(null);
      
        console.log('Character reset to default values');
      };

      
    return (
        <div className="safe-space">
            <div className='option-quick-menu small-quick-menu'>
                <button className='quick-link big-button save-button' onClick={handleSaveAvatar}>Save Avatar</button>
                <button className='quick-link big-button reset-button' onClick={resetCharacter}>Reset Avatar</button>
            </div>

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

                    {/* Render eyeball and selected eye color */}
                    {selectedEyeColor && (
                        <>
                            {/* Render eyeball */}
                            <img
                                src={eyeballAssets.eyeballs[0]}  // Access the single eyeball asset
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

                    {/* Render Chest Volume if applicable */}
                    {getChestVolume() && (
                        <div className="chest-volume-display">
                            <img
                                src={getChestVolume()}
                                alt="Chest Volume"
                                className='character-layer chest-volume' />
                        </div>
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

                <div className="customization-options">
                    <div className='option-quick-menu'>
                        <h2>Quick Links</h2>
                        {/* quick link for head */}
                        <a href="#skin" className="quick-link">
                            Skin Tone
                        </a>
                        {/* quick link for hair */}
                        <a href="#shoulders" className="quick-link">
                            Shoulders
                        </a>
                        {/* quick link for face */}
                        <a href="#chin" className="quick-link">
                            Chin
                        </a>
                        {/* quick link for nose */}
                        <a href="#nose" className="quick-link">
                            Nose
                        </a>
                        {/* quick link for scars */}
                        <a href="#scars" className="quick-link">
                            Scars
                        </a>
                        {/* quick link for eyes */}
                        <a href="#eyes" className="quick-link">
                            Eyes
                        </a>
                        {/* quick link for glasses */}
                        <a href="#glasses" className="quick-link">
                            Glasses
                        </a>
                        {/* quick link for mouth */}
                        <a href="#mouth" className="quick-link">
                            Mouth
                        </a>
                        {/* quick link for cheeks */}
                        <a href="#cheeks" className="quick-link">
                            Cheeks
                        </a>
                        {/* quick link for hair */}
                        <a href="#hair" className="quick-link">
                            Hair
                        </a>
                        {/* quick link for facial hair */}
                        <a href="#facial-hair" className="quick-link">
                            Facial Hair
                        </a>
                        {/* quick link for ears */}
                        <a href="#ears" className="quick-link">
                            Ears
                        </a>
                        {/* quick link for shirts */}
                        <a href="#tops" className="quick-link">
                            Shirts
                        </a>
                        {/* quick link for backgrounds */}
                        <a href="#backgrounds" className="quick-link">
                            Backgrounds
                        </a>
                    </div>

                    <div className='options-container'>
                        <h2>Customize Your Character</h2>

                        {/* Skin Tone Options */}
                        <div className="option-category">
                            <h3 id='skin'>Skin Tone Options</h3>
                            {skinToneSwatches.map((swatch, index) => (
                                <button
                                    key={index}
                                    className={`UI-tile-button color-swatch ${selectedSkinToneSwatch === swatch ? 'selected' : ''}`}
                                    onClick={() => handleSkinToneClick(swatch)}
                                >
                                    <img src={swatch} alt={`Skin Tone ${index}`} />
                                </button>
                            ))}
                        </div>

                        {/* UI for Shoulder Linework */}
                        {/* UI for Shoulder Linework */}
                        <div className="option-category">
                            <h3 id='shoulders'>Shoulders</h3>
                            <div>
                                {[...shoulderAssets.linework]
                                    .sort((a, b) => {
                                        const extractShoulderType = (filename) => {
                                            if (filename.includes('Narrow-Shoulder')) return 0;
                                            if (filename.includes('Thin-Shoulder')) return 1;
                                            if (filename.includes('Broad-Shoulder')) return 2;
                                            return 3; // If none of the types match
                                        };

                                        const typeA = extractShoulderType(a);
                                        const typeB = extractShoulderType(b);

                                        return typeA - typeB;
                                    })
                                    .map((linework, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleShoulderLineworkChange(linework)}
                                            className={`UI-tile-button ${selectedShoulderLinework === linework ? 'selected' : ''}`}
                                        >
                                            <img src={linework} alt={`Shoulder Linework ${index}`} />
                                        </button>
                                    ))}
                            </div>
                        </div>




                        {/* UI for Chest Volume */}
                        <div className="option-category">
                            <h3>Chest Volume</h3>
                            <button
                                onClick={toggleChestVolume}
                                className={`UI-tile-button removeable ${showChestVolume === true ? 'selected' : ''}`}
                            >
                                {showChestVolume ? 'Chest Volume Added' : 'Add Chest Volume'}
                            </button>
                        </div>

                        {/* UI for Chin Linework */}
                        <div className="option-category">
                            <h3 id='chin'>Chin Linework</h3>
                            {chinAssets.linework
                                .filter(lineworkAsset => !lineworkAsset.includes('Cleft')) // Exclude cleft options
                                .sort((a, b) => {
                                    const chinNumberA = parseInt(a.match(/Chin-(\d+)/)[1], 10);
                                    const chinNumberB = parseInt(b.match(/Chin-(\d+)/)[1], 10);
                                    return chinNumberA - chinNumberB;
                                })
                                .map((lineworkAsset, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleChinLineworkChange(lineworkAsset)}
                                        className={`UI-tile-button ${selectedChinLinework === lineworkAsset ? 'selected' : ''}`}>
                                        <img src={lineworkAsset} alt={`Chin Linework ${index}`} />
                                    </button>
                                ))}
                        </div>


                        {/* Cleft Option */}
                        <div className="option-category">
                            <h3>Cleft Chin</h3>
                            <button
                                onClick={handleCleftToggle}
                                className={`UI-tile-button removeable ${isCleft === true ? 'selected' : ''}`}>
                                {isCleft ? 'Cleft Added' : 'Add Cleft'}
                            </button>
                        </div>

                        {/* UI for Nose Apex */}
                        <div className="option-category">
                            <h3 id='nose'>Nose Apex</h3>
                            <div>
                                {noseApexAssets.apex.map((apex, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (selectedNoseApex === apex) {
                                                handleRemoveNoseApex(); // Remove nose apex if it's already selected
                                            } else {
                                                handleNoseApexChange(apex); // Change to the newly selected nose apex
                                            }
                                        }}
                                        className={`UI-tile-button removeable ${selectedNoseApex === apex ? 'selected' : ''}`}
                                    >
                                        <img src={apex} alt={`Nose Apex ${index}`} />
                                    </button>
                                ))}
                            </div>
                        </div>



                        {/* UI for Nose Bridge */}
                        <div className="option-category">
                            <h3>Nose Bridge</h3>
                            <div>
                                {noseBridgeAssets.bridge.map((bridge, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (selectedNoseBridge === bridge) {
                                                handleRemoveNoseBridge(); // Remove nose bridge if it's already selected
                                            } else {
                                                handleNoseBridgeChange(bridge); // Change to the newly selected nose bridge
                                            }
                                        }}
                                        className={`UI-tile-button removeable ${selectedNoseBridge === bridge ? 'selected' : ''}`}
                                    >
                                        <img src={bridge} alt={`Nose Bridge ${index}`} />
                                    </button>
                                ))}
                            </div>
                        </div>



                        {/* UI for Face Scars */}
                        {/* UI for Face Scars */}
                        <div className="option-category">
                            <h3 id='scars'>Face Scars</h3>
                            <div>
                                {faceScarAssets.scars.map((scarAsset, index) => {
                                    const isSelected = selectedFaceScars.includes(scarAsset);
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleFaceScarChange(scarAsset)}
                                            className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={scarAsset} alt={`Face Scar ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>



                        {/* UI for Body Scars */}
                        <div className="option-category">
                            <h3>Body Scars</h3>
                            <div>
                                {bodyScarAssets.scars.map((scarAsset, index) => {
                                    const isSelected = selectedBodyScars.includes(scarAsset);
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleBodyScarChange(scarAsset)}
                                            className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={scarAsset} alt={`Body Scar ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* UI for Eye Shapes */}
                        <div className="option-category">
                            <h3 id='eyes'>Eye Shapes</h3>
                            <div>
                                {eyeShapeAssets.shapes.map((eyeShapeAsset, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (selectedEyeShape === eyeShapeAsset) {
                                                handleRemoveEyeShape(); // Remove eye shape if it's already selected
                                            } else {
                                                handleEyeShapeChange(eyeShapeAsset); // Change to the newly selected eye shape
                                            }
                                        }}
                                        className={`UI-tile-button removeable ${selectedEyeShape === eyeShapeAsset ? 'selected' : ''}`}
                                    >
                                        <img src={eyeShapeAsset} alt={`Eye Shape ${index}`} />
                                    </button>
                                ))}
                            </div>
                        </div>


                        {/* UI for Eye Colors */}
                        <div className="option-category">
                            <h3>Eye Color Options</h3>
                            <div>
                                {eyeColorSwatches.map((swatch, index) => {
                                    const isSelected = selectedEyeColor === swatch;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleEyeColorChange(swatch)}
                                            className={`UI-tile-button color-swatch ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={swatch} alt={`Eye Color ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* UI for Upper Eyelashes */}
                        <div className="option-category">
                            <h3>Upper Eyelashes</h3>
                            <div>
                                {eyelashAssets.eyelashes
                                    .filter(asset => asset.includes('Upper-Eyelash'))
                                    .map((upperEyelashAsset, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (selectedUpperEyelash === upperEyelashAsset) {
                                                    handleRemoveUpperEyelash(); // Remove upper eyelash if it's already selected
                                                } else {
                                                    handleUpperEyelashChange(upperEyelashAsset); // Change to the newly selected upper eyelash
                                                }
                                            }}
                                            className={`UI-tile-button removeable ${selectedUpperEyelash === upperEyelashAsset ? 'selected' : ''}`}
                                        >
                                            <img src={upperEyelashAsset} alt={`Upper Eyelash ${index}`} />
                                        </button>
                                    ))}
                            </div>
                        </div>



                        {/* UI for Lower Eyelashes */}
                        <div className="option-category">
                            <h3>Lower Eyelashes</h3>
                            <div>
                                {eyelashAssets.eyelashes
                                    .filter(asset => asset.includes('Lower-Eyelash'))
                                    .map((lowerEyelashAsset, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (selectedLowerEyelash === lowerEyelashAsset) {
                                                    handleRemoveLowerEyelash(); // Remove lower eyelash if it's already selected
                                                } else {
                                                    handleLowerEyelashChange(lowerEyelashAsset); // Change to the newly selected lower eyelash
                                                }
                                            }}
                                            className={`UI-tile-button removeable ${selectedLowerEyelash === lowerEyelashAsset ? 'selected' : ''}`}
                                        >
                                            <img src={lowerEyelashAsset} alt={`Lower Eyelash ${index}`} />
                                        </button>
                                    ))}
                            </div>
                        </div>

                        {/* UI for Eye Socket Shadows */}
                        <div className="option-category">
                            <h3>Eye Socket Shadows</h3>
                            <div>
                                {eyeSocketShadowAssets.socketShadows.map((socketShadow, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (selectedEyeSocketShadow === socketShadow) {
                                                handleRemoveEyeSocketShadow(); // Remove eye socket shadow if it's already selected
                                            } else {
                                                handleEyeSocketShadowChange(socketShadow); // Change to the newly selected eye socket shadow
                                            }
                                        }}
                                        className={`UI-tile-button removeable ${selectedEyeSocketShadow === socketShadow ? 'selected' : ''}`}
                                    >
                                        <img src={socketShadow} alt={`Eye Socket Shadow ${index}`} />
                                    </button>
                                ))}
                            </div>
                        </div>


                        {/* UI for Eyebrows */}
                        <div className="option-category">
                            <h3>Eyebrows</h3>
                            <div>
                                {eyebrowAssets.linework.map((eyebrowAsset, index) => {
                                    const isSelected = selectedEyebrow === eyebrowAsset.asset;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (isSelected) {
                                                    handleRemoveEyebrow(); // Remove eyebrow if it's already selected
                                                } else {
                                                    handleEyebrowChange(eyebrowAsset.asset); // Change to the newly selected eyebrow
                                                }
                                            }}
                                            className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={eyebrowAsset.asset} alt={`Eyebrow ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* UI for Eye Makeup */}
                        <div className="option-category">
                            <h3>Eye Makeup</h3>
                            <div>
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
                                                <button
                                                    key={colorNumber}
                                                    onClick={() => {
                                                        if (isSelected) {
                                                            handleRemoveEyeMakeup(); // Remove eye makeup if it's already selected
                                                        } else {
                                                            handleEyeMakeupChange(colorNumber); // Change to the newly selected eye makeup color
                                                        }
                                                    }}
                                                    className={`UI-tile-button removeable color-swatch ${isSelected ? 'selected' : ''}`}
                                                >
                                                    <img src={swatch.asset} alt={`Eye Makeup Color ${colorNumber}`} />
                                                </button>
                                            );
                                        }
                                        return null;
                                    });
                                })()}
                            </div>
                        </div>


                        {/* UI for Accessories */}
                        <div className="option-category">
                            <h3 id='glasses'>Accessories</h3>
                            <div>
                                {accessoryAssets.accessories.map((accessoryAsset, index) => {
                                    const isSelected = selectedAccessory === accessoryAsset;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (isSelected) {
                                                    handleRemoveAccessory(); // Remove accessory if it's already selected
                                                } else {
                                                    handleAccessoryChange(accessoryAsset); // Change to the newly selected accessory
                                                }
                                            }}
                                            className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={accessoryAsset} alt={`Accessory ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* UI for Mouth Expressions */}
                        <div className="option-category">
                            <h3 id='mouth'>Mouth Expressions</h3>
                            <div>
                                {mouthExpressionAssets.map((expression, index) => {
                                    const isSelected = selectedMouthExpression === expression;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (isSelected) {
                                                    handleRemoveMouthExpression(); // Remove mouth expression if it's already selected
                                                } else {
                                                    handleMouthExpressionChange(expression); // Change to the newly selected mouth expression
                                                }
                                            }}
                                            className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={expression} alt={`Mouth Expression ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>


                        {/* UI for Lip Shapes */}
                        {selectedMouthExpression && (

<div className="option-category">
    <h3>Lip Shapes</h3>
    <div>
        {lipShapeAssets.map(({ asset, key }, index) => {
            const isSelected = selectedLipShape?.key === key;

            return (
                <button
                    key={index}
                    onClick={() => {
                        if (isSelected) {
                            handleRemoveLipShape(); // Remove lip shape if it's already selected
                        } else {
                            handleLipShapeChange({ asset, key }); // Change to the newly selected lip shape
                        }
                    }}
                    className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                >
                    <img src={asset} alt={`Lip Shape ${index}`} className='lips' />
                </button>
            );
        })}
    </div>
</div>


                        )}

                        {/* UI for Lip Colors */}
                        {selectedLipShape && (
                            <div className="option-category">
                                <h3>Lip Colors</h3>
                                <div>
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
                                                    <button
                                                        key={colorNumber}
                                                        onClick={() => {
                                                            if (isSelected) {
                                                                handleRemoveLipColor(); // Remove lip color if it's already selected
                                                            } else {
                                                                handleLipColorChange(colorNumber); // Change to the newly selected lip color
                                                            }
                                                        }}
                                                        className={`UI-tile-button removeable color-swatch ${isSelected ? 'selected' : ''}`}
                                                    >
                                                        <img src={swatch.asset} alt={`Lip Color ${colorNumber}`} />
                                                    </button>
                                                );
                                            }
                                            return null;
                                        });
                                    })()}
                                </div>
                            </div>
                        )}


                        {/* UI for Cheekbones */}
                        <div className="option-category">
                            <h3 id='cheeks'>Cheekbones</h3>
                            <div>
                                {cheekboneAssets.cheekbones.map((cheekboneAsset, index) => {
                                    const isSelected = selectedCheekbone === cheekboneAsset;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (isSelected) {
                                                    handleRemoveCheekbone(); // Remove cheekbone if it's already selected
                                                } else {
                                                    handleCheekboneChange(cheekboneAsset); // Change to the newly selected cheekbone
                                                }
                                            }}
                                            className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={cheekboneAsset} alt={`Cheekbone ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="option-category">
                            <h3 id='hair'>Hair Linework</h3>
                            <div>
                                {hairAssets && hairAssets.linework.map((hairLinework, index) => {
                                    const isSelected = selectedHairLinework === hairLinework;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (isSelected) {
                                                    handleRemoveHairLinework(); // Remove hair linework if it's already selected
                                                } else {
                                                    handleHairLineworkChange(hairLinework); // Pass the image URL directly
                                                }
                                            }}
                                            className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={hairLinework} alt={`Hair Linework ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>




                        <div className="option-category">
                            <h3>Hair Color Options</h3>
                            <div>
                                {hairColorSwatches.map((swatch, index) => {
                                    const isSelected = selectedHairColor === swatch;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleHairColorChange(swatch)}
                                            className={`UI-tile-button color-swatch ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={swatch} alt={`Hair Color ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>




                        {/* UI for Front Layer Fringe */}
                        <div className="option-category">
                            <h3>Front Layer Fringe</h3>
                            <div>
                                {frontLayerFringeAssets && frontLayerFringeAssets
                                    .filter(asset => !asset.includes('Hair-Color')) // Ensure only linework assets are shown
                                    .map((fringeLinework, index) => {
                                        const isSelected = selectedFrontLayerFringeLinework === fringeLinework;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    if (isSelected) {
                                                        handleRemoveFrontLayerFringeLinework(); // Remove fringe linework if it's already selected
                                                    } else {
                                                        handleFrontLayerFringeLineworkChange(fringeLinework); // Change to the newly selected fringe linework
                                                    }
                                                }}
                                                className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                            >
                                                <img src={fringeLinework} alt={`Front Layer Fringe Linework ${index}`} />
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>

                        {/* UI for Front Layer Fringe Colors */}
                        {selectedFrontLayerFringeLinework && (
                            <div className="option-category">
                                <h3>Front Layer Fringe Colors</h3>
                                <div>
                                    {hairColorSwatches.map((swatch, index) => (
                                        <button
                                            key={index}
                                            className='UI-tile-button color-swatch removeable'
                                            onClick={() => handleFrontLayerFringeColorChange(swatch)}
                                        >
                                            <img src={swatch} alt={`Front Fringe Color ${index}`} className='fringe-color' />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* UI for Secondary Fringe Linework */}
                        <div className="option-category">
                            <h3>Secondary Fringe</h3>
                            <div>
                                {secondaryFringeAssets && secondaryFringeAssets
                                    .filter(asset => !asset.includes('Hair-Color')) // Ensure only linework assets are shown
                                    .map((fringeLinework, index) => {
                                        const isSelected = selectedSecondaryFringeLinework === fringeLinework;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    if (isSelected) {
                                                        handleRemoveSecondaryFringeLinework(); // Remove fringe linework if it's already selected
                                                    } else {
                                                        handleSecondaryFringeLineworkChange(fringeLinework); // Change to the newly selected fringe linework
                                                    }
                                                }}
                                                className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                            >
                                                <img src={fringeLinework} alt={`Secondary Fringe Linework ${index}`} />
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>

                        {/* UI for Secondary Fringe Colors */}
                        {selectedSecondaryFringeLinework && (
                            <div className="option-category">
                                <h3>Secondary Fringe Colors</h3>
                                <div>
                                    {hairColorSwatches.map((swatch, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSecondaryFringeColorChange(swatch)}
                                            className='UI-tile-button color-swatch'
                                        >
                                            <img src={swatch} alt={`Secondary Fringe Color ${index}`} className='secondary-fringe-color' />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}



                        {/* UI for Mustache Linework */}
                        <div className="option-category">
                            <h3 id='facial-hair'>Mustaches</h3>
                            <div>
                                {mustacheAssets
                                    .filter(({ key }) => !key.includes('Hair-Color')) // Ensure only linework assets are shown
                                    .map(({ asset, key }, index) => {
                                        const isSelected = selectedMustacheLinework?.key === key;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    if (isSelected) {
                                                        handleRemoveMustacheLinework(); // Remove mustache linework if it's already selected
                                                    } else {
                                                        handleMustacheLineworkChange({ asset, key }); // Change to the newly selected mustache linework
                                                    }
                                                }}
                                                className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                            >
                                                <img src={asset} alt={`Mustache Linework ${index}`} />
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>

                        {/* UI for Mustache Colors */}
                        {selectedMustacheLinework && (
                            <div className="option-category">
                                <h3>Mustache Colors</h3>
                                <div>
                                    {hairColorSwatches.map((swatch, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleMustacheColorChange(swatch)}
                                            className='UI-tile-button color-swatch'
                                        >
                                            <img src={swatch} alt={`Mustache Color ${index}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}


                        {/* UI for Beard Linework */}
                        <div className="option-category">
                            <h3>Beards</h3>
                            <div>
                                {beardAssets
                                    .filter(({ key }) => !key.includes('Hair-Color')) // Ensure only linework assets are shown
                                    .map(({ asset, key }, index) => {
                                        const isSelected = selectedBeardLinework?.key === key;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    if (isSelected) {
                                                        handleRemoveBeardLinework(); // Remove beard linework if it's already selected
                                                    } else {
                                                        handleBeardLineworkChange({ asset, key }); // Change to the newly selected beard linework
                                                    }
                                                }}
                                                className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                            >
                                                <img src={asset} alt={`Beard Linework ${index}`} />
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>

                        {/* UI for Beard Colors */}
                        {selectedBeardLinework && (
                            <div className="option-category">
                                <h3>Beard Colors</h3>
                                <div>
                                    {hairColorSwatches.map((swatch, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleBeardColorChange(swatch)}
                                            className='UI-tile-button color-swatch'
                                        >
                                            <img src={swatch} alt={`Beard Color ${index}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}



                        {/* UI for Ear Linework */}
                        <div className="option-category">
                            <h3 id='ears'>Ear Linework</h3>
                            <div>
                                {earAssets.linework
                                    .filter(lineworkAsset => lineworkAsset.includes('Ear') && !lineworkAsset.includes('Skin-Color')) // Exclude skin-tone options
                                    .map((lineworkAsset, index) => (
                                        <button key={index} onClick={() => handleEarLineworkChange(lineworkAsset)} className='UI-tile-button'>
                                            <img src={lineworkAsset} alt={`Ear Linework ${index}`} />
                                        </button>
                                    ))}
                            </div>
                        </div>

                        {/* Base Layer Shirt Linework Selection */}
                        {shirtAssets &&
                            shirtAssets[selectedShoulderType] &&
                            shirtAssets[selectedShoulderType]['base-layer'] &&
                            shirtAssets[selectedShoulderType]['base-layer'].linework &&
                            shirtAssets[selectedShoulderType]['base-layer'].linework.length > 0 && (
                                <div className="option-category">
                                    <h3 id='tops'>Base Layer Shirts</h3>
                                    <div>
                                        {shirtAssets[selectedShoulderType]['base-layer'].linework.map((linework, index) => {
                                            const isSelected = selectedBaseShirtLinework === linework;
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        if (isSelected) {
                                                            setSelectedBaseShirtLinework(null);
                                                            setSelectedBaseShirtColor(null);
                                                        } else {
                                                            handleBaseShirtLineworkChange(linework);
                                                        }
                                                    }}
                                                    className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                                >
                                                    <img src={linework} alt={`Base Shirt Linework ${index}`} />
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}


                        {/* Base Layer Shirt Colors */}
                        {selectedBaseShirtLinework && (
                            <div className="option-category">
                                <h3>Base Shirt Colors</h3>
                                <div>
                                    {clothesColorSwatches.map(({ asset, key }, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleBaseShirtColorChange(key)}
                                            className='UI-tile-button color-swatch'
                                        >
                                            <img src={asset} alt={`Base Shirt Color ${index}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Mid Layer Shirt Linework Selection */}
                        {shirtAssets &&
                            shirtAssets[selectedShoulderType] &&
                            shirtAssets[selectedShoulderType]['mid-layer'] &&
                            shirtAssets[selectedShoulderType]['mid-layer'].linework &&
                            shirtAssets[selectedShoulderType]['mid-layer'].linework.length > 0 && (
                                <div className="option-category">
                                    <h3>Mid Layer Shirts</h3>
                                    <div>
                                        {shirtAssets[selectedShoulderType]['mid-layer'].linework.map((linework, index) => {
                                            const isSelected = selectedMidShirtLinework === linework;
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        if (isSelected) {
                                                            setSelectedMidShirtLinework(null);
                                                            setSelectedMidShirtColor(null);
                                                        } else {
                                                            handleMidShirtLineworkChange(linework);
                                                        }
                                                    }}
                                                    className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                                >
                                                    <img src={linework} alt={`Mid Shirt Linework ${index}`} />
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        {/* Mid Layer Shirt Colors */}
                        {selectedMidShirtLinework && (
                            <div className="option-category">
                                <h3>Mid Shirt Colors</h3>
                                <div>
                                    {clothesColorSwatches.map(({ asset, key }, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleMidShirtColorChange(key)}
                                            className="UI-tile-button color-swatch"
                                        >
                                            <img src={asset} alt={`Mid Shirt Color ${index}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Outer Layer Shirt Linework Selection */}
                        {shirtAssets &&
                            shirtAssets[selectedShoulderType] &&
                            shirtAssets[selectedShoulderType]['outer-layer'] &&
                            shirtAssets[selectedShoulderType]['outer-layer'].linework &&
                            shirtAssets[selectedShoulderType]['outer-layer'].linework.length > 0 && (
                                <div className="option-category">
                                    <h3>Outer Layer Shirts</h3>
                                    <div>
                                        {shirtAssets[selectedShoulderType]['outer-layer'].linework.map((linework, index) => {
                                            const isSelected = selectedOuterShirtLinework === linework;
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        if (isSelected) {
                                                            setSelectedOuterShirtLinework(null);
                                                            setSelectedOuterShirtColor(null);
                                                        } else {
                                                            handleOuterShirtLineworkChange(linework);
                                                        }
                                                    }}
                                                    className={`UI-tile-button removeable ${isSelected ? 'selected' : ''}`}
                                                >
                                                    <img src={linework} alt={`Outer Shirt Linework ${index}`} />
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        {/* Outer Layer Shirt Colors */}
                        {selectedOuterShirtLinework && (
                            <div className="option-category">
                                <h3>Outer Shirt Colors</h3>
                                <div>
                                    {clothesColorSwatches.map(({ asset, key }, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleOuterShirtColorChange(key)}
                                            className="UI-tile-button color-swatch"
                                        >
                                            <img src={asset} alt={`Outer Shirt Color ${index}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}




                        {/* Background Options */}
                        <div className="option-category">
                            <h3 id='backgrounds'>Backgrounds</h3>
                            <div>
                                {backgroundAssets.backgrounds.map((backgroundAsset, index) => {
                                    const isSelected = selectedBackground === backgroundAsset;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (isSelected) {
                                                    handleRemoveBackground(); // Deselect background, fallback to default
                                                } else {
                                                    handleBackgroundChange(backgroundAsset); // Change background
                                                }
                                            }}
                                            className={`UI-tile-button character-background ${isSelected ? 'selected' : ''}`}
                                        >
                                            <img src={backgroundAsset} alt={`Background ${index}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SafeSpace;
