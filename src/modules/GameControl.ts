/*
 * @Description: 
 * @Autor: Pony
 * @Date: 2021-07-18 13:40:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-31 13:28:42
 */
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {

    // 声明类
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = '' //按下的键盘方向
    isLive:boolean=true //是否开始
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    /**
     * @description: 初始化
     * @param {*}
     * @return {*}
     */
    init() {
        //绑定键盘事件
        document.addEventListener('keydown', this.keyDownHand.bind(this))
        this.run()
    }
    /**
     * @description: 键盘事件
     * @param {KeyboardEvent} 
     * @return {*}
     */
    keyDownHand({ key }: KeyboardEvent) {
        this.direction = key
        // this.run()
    }
    /**
     * @description: 移动
     * @param {*}
     * @return {*}
     */
    run() {
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向来计算X值和Y值（未更新）
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加 
                X += 10;
                break;
        }

       /**
        * 检查蛇是否吃到食物
        */
       this.checkEatFood(X,Y)
   

       try {
           
           this.snake.X=X
           this.snake.Y=Y
       } catch (error) {
           alert(error.message)
           //终止游戏
           this.isLive=false
       }


       if(this.isLive){
          setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
       }
    }
    /**
     * @description: 检查蛇是否吃到食物
     * @param {*}
     * @return {*}
     */    
    checkEatFood(x:number,y:number){
        if(x===this.food.X&&y===this.food.Y){
            this.food.changePlace()//重置食物的位置
            this.scorePanel.addScore() //分数增加 1
            this.snake.addBody()// 蛇的身体增加一节
        }

    }
}
export default GameControl;