import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountserviceService } from '../../services/accountservice.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    isLoginMode = true;
    isLoading = false;
    error: any = null;

    constructor(private authService: AccountserviceService) { }

    ngOnInit(): void { }
    onSignUp(form: NgForm) {
        if (form.invalid) {
            return;
        }
        const formData: any = {
            email: form.value.email,
            name: form.value.name,
            mobile: form.value.mobile,
            password: form.value.password,
            join_time: new Date()
        }
        console.table(formData);
        this.authService.signUp(formData);
    }


}
