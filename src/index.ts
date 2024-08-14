import {ListProductsUseCase} from './product/application/use-cases/list-products';
import {ProductInMemoryGateway} from './product/infra/gateways/product-in-memory.gateway';

const productGateway = new ProductInMemoryGateway();
const useCase = new ListProductsUseCase(productGateway);

useCase.execute()
    .then(products => console.log(products.map(product => product.toPlainObject())))
