import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productinfo } from '../../model/productinfo.model';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    url: string = "";
    product?: Productinfo;
    error: any = "";
    count: number = 1;
    forms: boolean = true;
    counter: boolean = false;

    constructor(
        private productservice: ProductsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // this.url = this.router.url.split('/')[1];
        if (this.router.url.split('/')[1] === 'product') {
            // console.log(this.router.url.split('/')[2]);
            this.getProductById(this.router.url.split('/')[2]);
        }
    }
    getProductById(id: any) {

        this.productservice.getProductById(id)
            .subscribe((data: any) => {
                this.product = {
                    id: data.responseData.id,
                    title: data.responseData.title,
                    image: data.responseData.image,
                    stock: data.responseData.stock,
                    price: data.responseData.price,
                    createdAt: data.responseData.createdAt,
                }
                // console.log(this.product);

            }),
            (e: any) => {
                this.error = e;
            };
    }

    addToCart(val: number) {
        // console.log(val);
        if (val > 6) {
            window.alert("Can not enter grater than 6");
            return;
        }
        this.forms = false;
        this.counter = true;
        this.count = val;
    }

    decrement() {
        if (this.count == 1) {
            this.forms = true;
            this.counter = false;
            return;
        }

        --this.count;
    }
    increment() {
        if (this.count == 6) {
            window.alert("Can not enter grater than 6");
            return;
        }
        ++this.count;
    }


}
