<<<<<<< Updated upstream




/**
 * 图型的数据对象
 */
class shapeData {
    constructor() {
        // 1 -- 文字
        // 2 -- 表格
        // 3 -- 甘特图
        this.type = 1;


    }

}

class shape {
    constructor() {
        // 
        this.shape_type = 1;

        //图像动态绘制的级别:默认绘制所有内容;
        // 1 -- 绘制所有内容
        // 2 -- 绘制图形,不绘制图像,文字
        // 3 -- 绘制图形\文字,不绘制图像

        this.draw_level = 1;

        this.position = { x: 0, y: 0 };
        this.size = { width: 100, height: 80 };

        this.border = 1;
        this.border_color = "#ffaaee";

        // 0 -- 默认状态
        // 1 -- 选中状态
        // 2 -- 拾起状态
        // 
        // 9 -- 锁定状态

        this.state = 0;

        //图形包含的数据内容
        this.data = new shapeData();

        //本对象绘制图像的缓存
        this.cache = null;

        this.ctx = null;
    }


    /**
     * 绘制本对象的全部内容到canvas上; 
     */
    draw() {
        switch (this.draw_level) {
            case 1:
                this.drawShape();
                this.drawText();
                this.drawImage();
                break;
            case 2:
                this.drawShape();
                break;
            case 3:
                this.drawShape();
                this.drawText();
                break;
        }
    }

    /**
     * 绘制图型部分,速度比较慢
     */
    drawShape() {


    }

    /**
     * 绘制图像部分,注意切成绘制目标大小一致的图像再绘制
     */
    drawImage() {

    }

    drawText() {

    }

}

class circle extends shape {
    constructor() { }

    draw() {

    }


}

class rectangle extends shape {
    constructor() {

    }
}



/**
 * 应用上下文件环境
 */
class content {

    constructor() {
        this.main_ctxnull;
    }


}

class engine {

    /**
     * 正在绘制图形
     */
    onDrawing() {

    }

    /**
     * 拖动移动图形
     */
    onMoveingShape() {

    }

    /**
     * 所在内容在窗口内平移
     */
    onMoveingAll() {

    }
=======
class Shage{

    
    


>>>>>>> Stashed changes
}