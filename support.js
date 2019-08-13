function getTop(i, j) {
    return 20*(i+1)+i*100;
}

function getLeft(i, j) {
    return 20*(j+1)+100*j;
}

function getBackground(number) {
    let color;
    switch (number) {
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
    }
    return "#cdc0b4";
}

function getFontColor(number) {
    let color;
    switch (number) {
        case 2:
        case 4:return "#776e65";break;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:return "#ffffff";break;
    }
    return "#cdc0b4";
}
