import {Price} from "./types";

export class Product {
    constructor(
        public readonly id: string,
        public name: string,
        public price: Price,
        public stock: number,
        public description: string,
    ) {
    }

    public toPlainObject() {
        return {...this};
    }
}