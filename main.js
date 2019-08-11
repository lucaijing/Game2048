
$(document).ready(function(){
    newGame();
})

function newGame() {
    init();
}


function init() {
    for(var i = 0;i < 4;i++){
        for(var j = 0;j < 4 ;j++){
            let cssGridItem='#grid-no-'+i+'-'+j;
            //注意GridItem的css是ID选择器 所以需要加上#
            //console.log(cssGridItem);
            $(cssGridItem).css({"top":getTop(i,j),"left":getLeft(i,j)});
        }
    }
}
