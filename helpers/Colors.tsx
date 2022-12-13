export function threeHexToSixHex(color: string){
    if(color.indexOf("#") !== -1) color = color.substring(color.indexOf("#")+1);

    if (color.length === 3) {
        return `#${color.split('').map(function (hex) {
            return hex + hex;
        }).join('')}`;
    }

    return `#${color}`;
}