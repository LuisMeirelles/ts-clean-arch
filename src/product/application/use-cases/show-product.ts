import {ProductGateway} from '../../domain/gateways/product.gateway';
import {Product} from '../../domain/entities/product';

export class ShowProductUseCase {
    constructor(private readonly gateway: ProductGateway) {
    }

    public async execute(id: Product['id']) {
        return await this.gateway.findById(id);
    }
}