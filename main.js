let board = new Array();
let score=0;

$(document).ready(function(){
    newGame();
})


function inputLeft() {
    for (let i=0;i<4;i++){//向左累加相同数字,注意即使相同的数字之间空几格也可以
        for (let j=0;j<3;j++){
            // if (board[i][j]==board[i][j+1]){
            //     board[i][j]=board[i][j]*2;
            //     //别忘记要清空右边的数字
            //     board[i][j+1]=0;
            // }
            let k=0;let sum=0;
            for(k=j+1;k<4;k++){//找到第一个与board[i][j]相等的数字board[i][k], 并把board[i][j]...board[i][k]累加起来=sum
                if(board[i][j]==board[i][k]){
                    sum=0;
                    for(let z=j;z<=k;z++){
                        sum+=board[i][z];
                    }
                    break;
                }
            }
            if((sum==board[i][j]*2)&&sum!=0){//如果可以移动的话
                board[i][j]=board[i][j]*2;
                score+=board[i][j];
                board[i][k]=0;
            }
        }
    }
    let newBoard=new Array();
    for (let i=0;i<4;i++){
        newBoard[i] = new Array();
        for (let j=0;j<4;j++){
            newBoard[i][j] = 0;
        }
    }

    for (let i=0;i<4;i++){//向左移动,newboard保存向左移动的数组
        let count=0;
        for (let j=0;j<4;j++){
            if (board[i][j]!=0){
                newBoard[i][count++]=board[i][j];
            }
        }
    }
    for (let i=0;i<4;i++){
        for (let j=0;j<4;j++){
                board[i][j]=newBoard[i][j];
        }
    }
}

function isGameOver() {
    let flag = false;//flag为false表示游戏不可继续，true表示游戏可以继续
    for (let i=0;i<4;i++){
        for (let j=0;j<4;j++){
            if (board[i][j] == 0){//有空余格子
                flag = true;break;
            }
            if(j<3){
                if ((board[i][j+1] == board[i][j])){//一行里有相同的可以消除
                    flag = true; break;
                }
            }
            if(i<3){
                if ((board[i+1][j] == board[i][j])){//一列里有相同的可以消除
                    flag = true; break;
                }
            }
        }
    }
    console.log(flag)
    if(!flag){alert("Game Over!");}

}

function inputRight() {
    for (let i=0;i<4;i++){//向右累加相同数字,注意即使相同的数字之间空几格也可以
        for (let j=3;j>0;j--){
            let k=0;let sum=0;
            for(k=j-1;k>=0;k--){//找到第一个与board[i][j]相等的数字board[i][k], 并把board[i][j]...board[i][k]累加起来=sum
                if(board[i][j]==board[i][k]){
                    sum=0;
                    for(let z=k;z<=j;z++){
                        sum+=board[i][z];
                    }
                    break;
                }
            }
            if((sum==board[i][j]*2)&&sum!=0){
                board[i][j]=board[i][j]*2;
                score+=board[i][j];
                board[i][k]=0;
            }
        }
    }
    let newBoard=new Array();
    for (let i=0;i<4;i++){
        newBoard[i] = new Array();
        for (let j=0;j<4;j++){
            newBoard[i][j] = 0;
        }
    }

    for (let i=0;i<4;i++){//向you移动,newboard保存向左移动的数组
        let count=3;
        for (let j=3;j>=0;j--){
            if (board[i][j]!=0){
                newBoard[i][count--]=board[i][j];
            }
        }
    }
    for (let i=0;i<4;i++){
        for (let j=0;j<4;j++){
            board[i][j]=newBoard[i][j];
        }
    }

    updateBoardView();
}

function inputTop() {
    for (let i=0;i<4;i++){//向上累加相同数字,注意即使相同的数字之间空几格也可以
        for (let j=0;j<4;j++){// i 列，j行，k行
            let k=0;let sum=0;
            for(k=j+1;k<4;k++){//找到第一个与board[i][j]相等的数字board[i][k], 并把board[i][j]...board[i][k]累加起来=sum
                if(board[j][i]==board[k][i]){
                    sum=0;
                    for(let z=j;z<=k;z++){
                        sum+=board[z][i];
                    }
                    break;
                }
            }
            if((sum==board[j][i]*2)&&sum!=0){
                board[j][i]=board[j][i]*2;
                score+=board[j][i];
                board[k][i]=0;
            }
        }
    }
    let newBoard=new Array();
    for (let i=0;i<4;i++){
        newBoard[i] = new Array();
        for (let j=0;j<4;j++){
            newBoard[i][j] = 0;
        }
    }

    for (let i=0;i<4;i++){//向上移动,newboard保存向左移动的数组
        let count=0;//i列 j行
        for (let j=0;j<4;j++){
            if (board[j][i]!=0){
                newBoard[count++][i]=board[j][i];
            }
        }
    }
    for (let i=0;i<4;i++){
        for (let j=0;j<4;j++){
            board[i][j]=newBoard[i][j];
        }
    }

    updateBoardView();
}

function inputBottom() {
    for (let i=0;i<4;i++){//向上累加相同数字,注意即使相同的数字之间空几格也可以
        for (let j=3;j>=0;j--){// i 列，j行，k行
            let k=0;let sum=0;
            for(k=3;k>j;k--){//找到第一个与board[i][j]相等的数字board[i][k], 并把board[i][j]...board[i][k]累加起来=sum
                if(board[j][i]==board[k][i]){
                    sum=0;
                    for(let z=j;z<=k;z++){
                        sum+=board[z][i];
                    }
                    break;
                }
            }
            if((sum==board[j][i]*2)&&sum!=0){
                board[j][i]=board[j][i]*2;
                score+=board[j][i];
                board[k][i]=0;
            }
        }
    }
    let newBoard=new Array();
    for (let i=0;i<4;i++){
        newBoard[i] = new Array();
        for (let j=0;j<4;j++){
            newBoard[i][j] = 0;
        }
    }

    for (let i=0;i<4;i++){//向下移动,newboard保存向左移动的数组
        let count=3;//i列 j行
        for (let j=3;j>=0;j--){
            if (board[j][i]!=0){
                newBoard[count--][i]=board[j][i];
            }
        }
    }
    for (let i=0;i<4;i++){
        for (let j=0;j<4;j++){
            board[i][j]=newBoard[i][j];
        }
    }

    updateBoardView();
}

$(document).keydown(function (event){//按下方向键
    isGameOver();
    switch (event.which) {
        case 37:
            inputLeft();
            generateOneNum();
            break;//左
        case 38:
            inputTop();
            generateOneNum();
            break;//上
        case 39:
            inputRight();
            generateOneNum();
            //console.log('right')
            break;//右
        case 40:
            inputBottom();
            generateOneNum();
            //console.log('bottom')
            break;//下
    }

})

function newGame() {
    init();
    generateOneNum();
    generateOneNum();
}

function init() {
    //格子背景布局
    score=0;
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

function updateBoardView() {//刷新游戏界面
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
                $(findById).css({"background": getBackground(number), "color":getFontColor(number)
                    , "display":"none"
                    });//文字垂直居中：将行高line-height设置为方格高度
            }
            // $(findById).animate({
            //     top:getTop(i,j),
            //     left:getLeft(i,j)
            // })
        }

    }

    $(".number-item").fadeIn();//动画效果：淡入 与display none搭配使用
    $("#score").text(score);
    // 将display设置为none不显示，使用动画效果【显示】class为number-item的元素
}

function generateOneNum() {

    let showNum = Math.random() > 0.5 ? 2 : 4;
    // console.log(showNum);
    let iNum = Math.floor(Math.random()*4);//随机生成0-3的位置 行
    let jNum = Math.floor(Math.random()*4);//随机生成0-3的位置 列
    let count=0;
    while (count<30){
        if (board[iNum][jNum] == 0){
            break;
        }
        iNum = Math.floor(Math.random()*4);
        jNum = Math.floor(Math.random()*4);
        count++;
    }
    if(count<=30){
        board[iNum][jNum] = showNum;
    }
    else{
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(board[i][j]==0){
                    board[i][j]=showNum;
                }
            }
        }
    }
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
