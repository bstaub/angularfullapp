import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})

export class ProductsComponent {
  productName = 'a book';
  isDisabled = true;
  products = ['A Book', 'A Tree'];
  constructor() {
     setTimeout(() => {
       // this.productName = 'after 3 seconds a tree appears!';
       this.isDisabled = false;
     }, 3000);
  }

  onAddProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
      this.products.push(form.value.productName);
    }
    console.log(form);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
