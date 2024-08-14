import {ProductGateway} from '../../domain/gateways/product.gateway';
import {Product} from '../../domain/entities/product';

const products: Product[] = [
    new Product(
        '1',
        'ProductEntity 1',
        {
            currency: 'R$',
            value: 100,
        },
        10,
        'Description of ProductEntity 1'
    ),

    new Product(
        '2',
        'ProductEntity 2',
        {
            currency: 'R$',
            value: 200,
        },
        20,
        'Description of ProductEntity 2'
    ),

    new Product(
        '3',
        'ProductEntity 3',
        {
            currency: 'R$',
            value: 300,
        },
        30,
        'Description of ProductEntity 3'
    ),

    new Product(
        '4',
        'ProductEntity 4',
        {
            currency: 'R$',
            value: 400,
        },
        40,
        'Description of ProductEntity 4'
    ),

    new Product(
        '5',
        'ProductEntity 5',
        {
            currency: 'R$',
            value: 500,
        },
        50,
        'Description of ProductEntity 5'
    ),
];

export class ProductInMemoryGateway implements ProductGateway {
    async getAll(): Promise<Product[]> {
        return products;
    }
}