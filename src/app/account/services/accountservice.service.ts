import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
import { BehaviorSubject } from 'rxjs';

const backEndUrl = environment.apiURL + "/user";

@Injectable({
    providedIn: 'root'
})
export class AccountserviceService {
    public err = new BehaviorSubject<any>(null);
    constructor(private http: HttpClient, private router: Router) { }

    signUp(data: any) {
        // console.log("hello:"+backEndUrl);
        console.log("hi");

        this.http.post<{ message: string; token: string; result: any }>(backEndUrl + "/signup", data)
            .subscribe(
                (responsedata) => {
                    console.log(responsedata);
                    this.err.next(null), this.router.navigate(['/signin']);
                },
                (err: any) => {
                    this.err.next(err);
                }
            )



    }
}
