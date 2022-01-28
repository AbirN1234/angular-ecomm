import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Productinfo } from '../../model/productinfo.model';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

    form !: FormGroup;
    constructor(private productservice: ProductsService) { }

    ngOnInit(): void {
        this.createForm();
    }
    createForm() {
        this.form = new FormGroup({
            title: new FormControl(null, { validators: [Validators.required, Validators.minLength(5)], }),
            image: new FormControl(null, { validators: [Validators.required], }),
            stock: new FormControl(null, { validators: [Validators.required] }),
            price: new FormControl(null, { validators: [Validators.required] }),
        });
    }
    onSavePost() {
        if (this.form.invalid) {
            return;
        }
        const formData: any = {
            title: this.form.value.title,
            image: this.form.value.image,
            stock: this.form.value.stock,
            price: this.form.value.price,
        };
        console.log(formData);
        this.productservice.addProduct(formData)
        this.form.reset();

    }

}
