// utilities/loadAssets.js

export const loadHeadAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        linework: values.filter((_, index) => keys[index].includes('Head') && !keys[index].includes('Skin-Tone')),
        colors: values.filter((_, index) => keys[index].includes('Skin-Tone'))
    };
    return assets;
};

export const loadChinAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        linework: values.filter((_, index) => keys[index].includes('Chin') && !keys[index].includes('Skin-Tone')),
        colors: values.filter((_, index) => keys[index].includes('Skin-Tone'))
    };
    return assets;
};

export const loadEarAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        linework: values.filter((_, index) => keys[index].includes('Ear') && !keys[index].includes('Skin-Tone')),
        colors: values.filter((_, index) => keys[index].includes('Skin-Tone'))
    };
    return assets;
};

export const loadHairAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        linework: values.filter((_, index) => keys[index].includes('Hair') && !keys[index].includes('Hair-Color')),  // Only linework (no colors)
        colors: values.filter((_, index) => keys[index].includes('Hair-Color'))  // Only colors
        
    };
    return assets;
};

export const loadFaceScarAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        scars: values.filter((_, index) => keys[index].includes('Face-Scar'))  // Only scars
    };
    return assets;
};

// Load front layer fringe assets
export const loadFrontLayerFringeAssets = (requireContext) => {
    return requireContext.keys().map(requireContext);
};

// Load secondary fringe assets
export const loadSecondaryFringeAssets = (requireContext) => {
    return requireContext.keys().map(requireContext);
};

export const loadBodyScarAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        scars: values.filter((_, index) => keys[index].includes('Body-Scar'))  // Only body scars
    };
    return assets;
};

export const loadBackgroundAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        backgrounds: values.filter((_, index) => keys[index].includes('Background'))  // Only background files
    };
    return assets;
};

export const loadAccessoryAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        accessories: values.filter((_, index) => keys[index].includes('Glasses'))  // Only accessories, e.g. glasses
    };
    return assets;
};

export const loadCheekboneAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        cheekbones: values.filter((_, index) => keys[index].includes('Cheek-Bone'))  // Only cheekbones
    };
    return assets;
};

export const loadEyelashAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        eyelashes: values.filter((_, index) => keys[index].includes('Eyelash'))  // Only eyelashes
    };
    return assets;
};

export const loadEyeColorAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        colors: values.filter((_, index) => keys[index].includes('Amber') || 
                                            keys[index].includes('Blues') || 
                                            keys[index].includes('Greens') || 
                                            keys[index].includes('Indigos') ||
                                            keys[index].includes('Pinks') ||
                                            keys[index].includes('Purples') ||
                                            keys[index].includes('Teals'))  // Only eye colors
    };
    return assets;
};

export const loadEyeballAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        eyeballs: values.filter((_, index) => keys[index].includes('Eyeball'))
    };
    return assets;
};

export const loadEyeShapeAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        shapes: values.filter((_, index) => keys[index].includes('Eye-Shape'))
    };
    return assets;
};

export const loadEyeSocketShadowAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        socketShadows: values.filter((_, index) => keys[index].includes('Eye-Socket-Shadows'))
    };
    return assets;
};

export const loadShoulderAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        linework: values.filter((_, index) => keys[index].includes('Shoulder-') && !keys[index].includes('Chest-Volume') && !keys[index].includes('Skin-Tone')),
        colors: values.filter((_, index) => keys[index].includes('Skin-Tone'))
    };
    return assets;
};

export const loadChestVolumeAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        narrow: values.find((_, index) => keys[index].includes('Narrow-Chest-Volume')),
        broad: values.find((_, index) => keys[index].includes('Broad-Shoulder-Chest-Volume')),
        thin: values.find((_, index) => keys[index].includes('Thin-Shoulder-Chest-Volume')),
    };
    return assets;
};

// loadAssets.js

export const loadShirtAssets = () => {
    const thinShirtContext = require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/9-Thin-Shoulder-Tops', true, /\.(png|jpe?g|svg)$/);
    const broadShirtContext = require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/8-Broad-Shoulder-Tops', true, /\.(png|jpe?g|svg)$/);
    const narrowShirtContext = require.context('../media/Tasia-Pixel-Project-Revision-1056x1056/10-Narrow-Shoulder-Tops', true, /\.(png|jpe?g|svg)$/);

    const thinShirtKeys = thinShirtContext.keys();
    const broadShirtKeys = broadShirtContext.keys();
    const narrowShirtKeys = narrowShirtContext.keys();

    const thinShirtValues = thinShirtKeys.map(thinShirtContext);
    const broadShirtValues = broadShirtKeys.map(broadShirtContext);
    const narrowShirtValues = narrowShirtKeys.map(narrowShirtContext);

    return {
        linework: {
            thin: thinShirtValues.filter((_, index) => thinShirtKeys[index].includes('Thin-Shoulder-Top') && !thinShirtKeys[index].includes('Color')),
            broad: broadShirtValues.filter((_, index) => broadShirtKeys[index].includes('Broad-Shoulder-Top') && !broadShirtKeys[index].includes('Color')),
            narrow: narrowShirtValues.filter((_, index) => narrowShirtKeys[index].includes('Narrow-Shoulder-Top') && !narrowShirtKeys[index].includes('Color')),
        },
        colors: {
            thin: thinShirtValues.filter((_, index) => thinShirtKeys[index].includes('Color')),
            broad: broadShirtValues.filter((_, index) => broadShirtKeys[index].includes('Color')),
            narrow: narrowShirtValues.filter((_, index) => narrowShirtKeys[index].includes('Color')),
        }
    };
};

export const loadNoseApexAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        apex: values.filter((_, index) => keys[index].includes('Nose-Apex')),
    };
    return assets;
};

export const loadNoseBridgeAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        bridge: values.filter((_, index) => keys[index].includes('Nose-Bridge')),
    };
    return assets;
};

export const loadMouthExpressionAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    return values; // Return the array directly
};

// Load hair color swatches
const hairColorContext = require.context(
    '../media/Tasia-Pixel-Project-Revision-1056x1056/14-Color-Swatches', 
    false, 
    /Hair-Color-\d+\.(png|jpe?g|svg)$/  // Adjust the regex to include png, jpeg, jpg, and svg file extensions
);

// Load Front Layer Fringe Assets
export const frontFringeAssets = {
    linework: require.context(
        '../media/Tasia-Pixel-Project-Revision-1056x1056/2-Fringe/FrontLayerFringe', 
        false, 
        /Fringe-\d+\.png$/  // Load linework for the front fringe
    ),
    colors: hairColorContext  // Reuse the previously defined hair color swatches context
};

// Load Secondary Layer Fringe Assets
export const secondaryFringeAssets = {
    linework: require.context(
        '../media/Tasia-Pixel-Project-Revision-1056x1056/2-Fringe/SecondaryFringe', 
        false, 
        /Fringe-\d+\.png$/  // Load linework for the secondary fringe
    ),
    colors: hairColorContext  // Reuse the same hair color swatches
};

// Export the hair color swatches for other components if needed
export const hairColorSwatches = hairColorContext.keys().map(hairColorContext); 

// Load skin tone swatches from the swatch folder
const skinToneContext = require.context(
    '../media/Tasia-Pixel-Project-Revision-1056x1056/14-Color-Swatches', 
    false, 
    /Skin-Tone-\d+\.(png|jpe?g|svg)$/  // Adjust the regex to include png, jpeg, jpg, and svg file extensions
);

export const skinToneSwatches = skinToneContext.keys().map(skinToneContext);

export const loadLipShapeAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    // Map both the asset and its key
    const assets = values.map((asset, index) => ({
        asset,
        key: keys[index], // The key includes the original file path
    }));
    return assets;
};

export const loadLipAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    // Map both the asset and its key
    const assets = values.map((asset, index) => ({
        asset,
        key: keys[index],
    }));
    return assets;
};

// Load makeup color swatches
export const loadMakeupColorSwatches = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    // Map both the asset and its key
    const swatches = values.map((asset, index) => ({
        asset,
        key: keys[index],
    }));
    return swatches;
};

export const loadEyeMakeupAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        makeup: values.map((asset, index) => ({
            asset,
            key: keys[index],
        })),
    };
    return assets;
};

// loadAssets.js

export const loadMustacheAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    return values.map((asset, index) => ({
        asset,
        key: keys[index],
    }));
};

export const loadBeardAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    return values.map((asset, index) => ({
        asset,
        key: keys[index],
    }));
};

export const loadClothesColorSwatches = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const swatches = values.map((asset, index) => ({
        asset,
        key: keys[index],
    }));
    return swatches;
};

export const loadEyebrowAssets = (context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const assets = {
        linework: values.map((asset, index) => ({
            asset,
            key: keys[index],
        })),
    };
    return assets;
};
