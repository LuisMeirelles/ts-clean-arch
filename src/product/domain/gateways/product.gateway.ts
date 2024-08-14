import {Product} from '../entities/product';

export interface ProductGateway {
    getAll(): Promise<Product[]>;
}