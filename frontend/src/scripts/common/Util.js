const getRandomRGBColorExcludeDuplicate = (colorArr, transparency) => {
    let newColor = getRandomRGBColor(transparency);
    while(colorArr.length > 1 && colorArr.includes(newColor)) {
        newColor = getRandomRGBColor(transparency);
    }
    return newColor;
}

const getRandomRGBColor = (transparency) => {
    if(isStringEmpty(transparency))
        transparency = 0.1;

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const appliedRGBA = 'rgba('+red+','+green+','+blue+','+transparency+')';
    const RGBA = 'rgba('+red+','+green+','+blue+','+1+')';
    return {
        appliedRGBA: appliedRGBA,
        RGBA: RGBA
    }
}

export const isStringEmpty = (str) => {
    return str === null || str === undefined || str.length === 0;
}

export const getRandomRGBColorArray = (idx, transparency) => {
    const colorArr = [];
    for(let i = 0 ; i < idx ; ++i) {
        const newColor = getRandomRGBColorExcludeDuplicate(colorArr, transparency);
        colorArr.push(newColor);
    }
    return colorArr;
}

export const getResultJson = (result) => {
    return result.data.resultJson;
}