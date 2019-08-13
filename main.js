let board = new Array();

$(document).ready(function(){
    newGame();
})

function newGame() {
    init();
    generateOneNum();
    generateOneNum();
}

function init() {
    //格子背景布局
    for(let i = 0;i < 4;i++){
        for(let j = 0;j < 4 ;j++){
            let cssGridItem='#grid-no-'+i+'-'+j;
            //注意GridItem的css是ID选择器 所以需要加上#
            //console.log(cssGridItem);
            $(cssGridItem).css({"top":getTop(i,j),"left":getLeft(i,j)});
        }
    }
    //初始化数值board
    for(let i = 0; i < 4; i++){
        board[i] = new Array();
        for (let j = 0; j < 4; j++){
            board[i][j] = 0;
        }
    }
    //更新16格数值
    updateBoardView();
}

function updateBoardView() {
    $(".number-item").remove();
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            //传入 格子数字 的语句
            let idName = 'number-no-'+i+'-'+j;
            let insertDiv = '<div class="number-item" id="'+idName+'"></div>';
            $("#grid-container").append(insertDiv);
            let findById = '#' + idName;
            $(findById).css({"top":getTop(i,j), "left":getLeft(i,j)});
            if (board[i][j] != 0){
                let number = board[i][j];
                $(findById).text(number);
                $(findById).css({"background": getBackground(number), "color":"#776e65", "font-size":"50px", "font-family":"Arial",
                });
            }
        }
    }
}

function generateOneNum() {

    let showNum = Math.random() > 0.5 ? 2 : 4;
    // console.log(showNum);
    let iNum = Math.floor(Math.random()*4);//随机生成0-3的位置 行
    let jNum = Math.floor(Math.random()*4);//随机生成0-3的位置 列
    while (true){
        if (board[iNum][jNum] == 0){
            break;
        }
        iNum = Math.floor(Math.random()*4);
        jNum = Math.floor(Math.random()*4);
    }
    board[iNum][jNum] = showNum;
    // let out = 'board' + iNum + ',' + jNum + ' is ' + board[iNum][jNum];
    // console.log(out);
    // console.log('///');

    // for(let i = 0; i < 4; i++){
    //     for (let j = 0; j < 4; j++){
    //         console.log(board[i][j]+',');
    //     }
    // }
    updateBoardView();
}
