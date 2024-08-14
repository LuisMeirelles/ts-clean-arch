import {ProductGateway} from "../../domain/gateways/product.gateway";

export class ListProductsUseCase {
    constructor(private readonly gateway: ProductGateway) {
    }

    async execute() {
        return await this.gateway.getAll();
    }
}