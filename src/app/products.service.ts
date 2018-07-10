import { Subject} from 'rxjs';  // its like an eventEmitter (we setup subscription, get informed about changes..)

export class ProductsService {
  private products = ['A Book in Service'];
  productsUpdated = new Subject();

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next();  // not emit, just next, you could pass next(this.products).., our just use a new fetch!
  }

  getProducts() {
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
    this.productsUpdated.next(); // inform others that products array changed
  }
}
