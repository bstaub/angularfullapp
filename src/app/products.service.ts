export class ProductsService {
  private products = ['A Book in Service'];

  addProduct(productName: string) {
    this.products.push(productName);
  }

  getProducts() {
    return [...this.products];
  }
}
