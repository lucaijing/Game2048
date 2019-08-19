# Game2048 with html5,css3,js
[在线浏览作品](https://lucaijing.github.io/2048/ "在线浏览作品")
https://lucaijing.github.io/2048/
由于设置问题，所以在另外一个项目下设置了gitPage。

## 游戏设计
#### 模块
- GameIndex.html
- 2048.css	—— css样式
- main.js & support.js —— js函数

#### 实现思路
	对应的值存放在数组中，通过处理数组来进行上下左右的移动；
	每次移动都使用updateVie()函数更新前端界面（使用jQuery选择器设置元素）


## 难点
####1、使用css position（定位）来确定格子的位置。
	将4*4的每个小格子设置自己的ID（i-j：i行j列）；
	将css的position属性设置为绝对位置；
	top值和left值，通过自己的id进行计算。
####2、使用jQuery读取键盘的方向键输入
	方向键被按下，触发keydown事件。
	event.which读取按下键的ASCII值。
####3、上下左右如何移动的思路
以向左移动为例。
	1.遍历每一行
	2.找到每一行中数字相等的两个位置，检测是否可以累加（中间的值是否为空）
	3.整体左移
