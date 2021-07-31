/*
 * @Description: 积分类
 * @Autor: Pony
 * @Date: 2021-07-18 13:40:13
 * @LastEditors: Pony
 * @LastEditTime: 2021-07-31 13:21:26
 */
class ScorePanel {

    score: number = 1 //分数
    level: number = 1//等级

    /**
     * 获取等级和分数所在的dom元素
     */
    scoreDom: HTMLElement
    levelDom: HTMLElement

    /**
     * 变量
     */
    maxLevel: number
    upScore: number
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreDom = document.getElementById('score')!
        this.levelDom = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    /**
     * @description: 加分
     * @param {*}
     * @return {*}
     */
    addScore(){  
        this.scoreDom.innerHTML=++this.score+''//分数自增
        
        //判断分数是否需要升级
        if(this.score%this.upScore===0){
             
            //是否可以升级 (满级)
            if(this.level<this.maxLevel){
                this.levelDom.innerHTML=++this.level+''
            }

        }
    }

}

export default ScorePanel