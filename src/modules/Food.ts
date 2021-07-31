/*
 * @Description: 食物类
 * @Autor: Pony
 * @Date: 2021-07-18 13:40:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-25 17:08:50
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
    //修改食物的位置
    changePlace() {
        //区域最大值为300
        const left = Math.floor(Math.random() * 30) * 10 //X
        const top = Math.floor(Math.random() * 30) * 10 //Y
        this._element.style.left = `${left}px`;
        this._element.style.top = `${top}px`
    }


}
export default Food