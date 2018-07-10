import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']
})

export class ProductsComponent {
  productName = 'a book';
  isDisabled = true;
  constructor() {
     setTimeout(() => {
       // this.productName = 'after 3 seconds a tree appears!';
       this.isDisabled = false;
     }, 3000);
  }
}
