import { Component, OnInit } from '@angular/core';
import { Productinfo } from '../../model/productinfo.model';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    error: any;
    products: Productinfo[] = [];
    constructor(private productservice: ProductsService) { }

    ngOnInit(): void {
        this.productservice.getProducts();
        this.productservice.getProductUpdateListener()
            .subscribe((products: Productinfo[]) => {
                this.products = products;
                // console.log(this.products);
            }, (e) => {
                this.error = e;
            })
    }


}
