import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})

export class ProductsComponent implements OnInit {
  productName = 'a book';
  isDisabled = true;
  products = [];
  constructor(private productsService: ProductsService) {
     setTimeout(() => {
       // this.productName = 'after 3 seconds a tree appears!';
       this.isDisabled = false;
     }, 3000);
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddProduct(form) {
    // this.products.push(this.productName);
    if (form.valid) {
      this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
    console.log(form);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
