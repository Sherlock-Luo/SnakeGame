/*
 * @Description: 食物类
 * @Autor: Pony
 * @Date: 2021-07-18 13:40:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-31 14:20:55
 */
class Food {

    //食物的dom'
    private _element: HTMLElement
    constructor() {
        this._element = document.getElementById('food')!
    }
    //获取食物Xd的坐标
    get X() {
        return this._element.offsetLeft
    }
    //获取食物Y的坐标
    get Y() {
        return this._element.offsetTop
    }
    /**
     * @description: 修改食物的位置
     * @param {HTMLCollection} snakeBody  蛇的身体
     * @return {*}
     */
    changePlace(snakeBody: HTMLCollection) {

        /**
         * 食物坐标不能生成在食物上
         * 区域最大值为300
         */
        const left = Math.floor(Math.random() * 30) * 10 //X
        const top = Math.floor(Math.random() * 30) * 10 //Y

        let isSameMake: boolean = false//是否在食物上

        for (let index = 0; index < snakeBody.length; index++) {
            const element = <HTMLElement>snakeBody[index];

            if (left === element.offsetLeft && top === element.offsetTop) {
                isSameMake = true
            }
        }

        if (isSameMake) {
            this.changePlace(snakeBody)
        } else {

            this._element.style.left = `${left}px`;
            this._element.style.top = `${top}px`
        }

    }


}
export default Food