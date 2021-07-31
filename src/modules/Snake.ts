/*
 * @Description: 蛇类
 * @Autor: Pony
 * @Date: 2021-07-18 13:40:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-31 14:14:28
 */
class Snake {
    element: HTMLElement //容器
    head: HTMLElement //蛇头的dom头部
    bodies: any //身体

    constructor() {
        this.head = <any>document.querySelector('#snake div')
        this.element = document.getElementById("snake")!
        this.bodies = this.element.getElementsByTagName('div')!
    }

    // 获取 X 坐标
    get X() {
        return this.head.offsetLeft
    }
    // 获取 Y 的坐标
    get Y() {
        return this.head.offsetTop
    }
    set X(X: number) {
        // 否则无法新增
        if (this.X === X) {
            return
        }

        /**
         * 检查有没有撞到墙  区域值 0~290
         * 抛出异常  控制类捕获这个异常控制游戏的进行与停止
         */
        if (X < 0 || X > 290) {
            throw new Error("蛇撞墙了");
        }

        //检查蛇是否掉头移动  左右移动
        if(this.bodies[1]&&this.bodies[1].offsetLeft===X){
             if(X>this.X){
                 //如果新值X大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                X=this.X-10
             }else{
                X=this.X+10
             }
        }

        //身体移动
        this.moveBody()
        this.head.style.left = X + 'px'

        //检查有没有撞到自己
        this.checkHeadBody()
    }
    set Y(Y: number) {


        // 否则无法新增
        if (this.Y === Y) {
            return
        }

        /**
         * 检查有没有撞到墙  区域值 0~290
         * 抛出异常  控制类捕获这个异常控制游戏的进行与停止
         */
        if (Y < 0 || Y > 290) {
            throw new Error("蛇撞墙了");

        }
        //检查蛇是否掉头移动  上下移动
        if(this.bodies[1]&&this.bodies[1].offsetTop===Y){
            if(Y>this.Y){
                //如果新值X大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                Y=this.Y-10
            }else{
                Y=this.Y+10
            }
        }

        //身体移动
        this.moveBody()
        this.head.style.top = Y + 'px'

        //检查有没有撞到自己
        this.checkHeadBody()

    }
    //增加身体
    addBody() {
        let node = document.createElement('div')
        this.element.appendChild(node)
    }
    /**
     * @description: 蛇身体移动
     * @param {*}
     * @return {*}
     */
    moveBody() {
        /**
            *     第4节 = 第3节的位置
            *     第3节 = 第2节的位置
            *     第2节 = 蛇头的位置
         */
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    /**
     * @description: 检查蛇头有没有撞到自己
     * @param {*}
     * @return {*}
     */
    checkHeadBody() {
        //不包含蛇头
        for (let index = 1; index < this.bodies.length; index++) {
            const element = this.bodies[index];
            if (this.X === element.offsetLeft && this.Y === this.element.offsetTop) {
                throw new Error("蛇头撞到自己了");

            }

        }
    }


}
export default Snake;