import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productinfo } from '../model/productinfo.model';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

const backendUrl = environment.apiURL + "/product";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products: Productinfo[] = [];
    private productsUpdate = new Subject<Productinfo[]>();
    public err = new BehaviorSubject<any>(null);
    constructor(private http: HttpClient, private router: Router) { }

    getProductUpdateListener() {
        return this.productsUpdate.asObservable();
    }


    addProduct(data: Productinfo) {
        this.http.post<{ message: string, responseData: Productinfo }>(backendUrl, data)
            .subscribe((response) => {
                this.err.next(null);
                // console.log(response.responseData);
                // console.log(response.message);

                this.router.navigate(["/products"]);
            }), (err: any) => {
                this.err.next(err);
            }

    }
    getProducts() {
        this.http.get<{ message: string, responseData: Productinfo[] }>(backendUrl)
            .pipe(
                map((allData) => {
                    // console.log("hi");
                    return allData.responseData.map((data: any) => {
                        return {
                            id: data._id,
                            title: data.title,
                            image: data.image,
                            stock: data.stock,
                            price: data.price,
                            createdAt: data.createdAt
                        }
                    })
                })
            ).subscribe(
                (transformedPosts) => {
                    this.err.next(null);
                    // this.products = transformedPosts;
                    // this.productsUpdate.next([...this.products]);
                    this.productsUpdate.next([...transformedPosts]);
                },
                (err) => {
                    this.err.next(err);
                }
            );
    }
    getProductById(id: any) {
        // console.log("hi");
        
        return this.http.get<{ message: string, responseData: Productinfo }>(backendUrl + `/${id}`);
    }

}
