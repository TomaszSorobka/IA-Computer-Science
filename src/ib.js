export default class Ib {

    constructor() {

        this.image = document.getElementById("img_ib");

    }


    draw(ctx) {
        ctx.drawImage(this.image, 10, 10, 16, 16);
    }
    

    update() {


    }

}