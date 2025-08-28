import ValidaCpf from "./ValidaCpf.js";  

export default class GeraCpf {
    rand(min = 10000000000, max = 99999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    constructor() {
        this.num = this.rand()
    }

}

