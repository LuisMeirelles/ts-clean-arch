import {ProductInMemoryGateway} from './product/infra/gateways/product-in-memory.gateway';
import {ShowProductUseCase} from './product/application/use-cases/show-product';

const productGateway = new ProductInMemoryGateway();
const useCase = new ShowProductUseCase(productGateway);

useCase.execute('3')
    .then(product => console.log(product.toPlainObject()));
