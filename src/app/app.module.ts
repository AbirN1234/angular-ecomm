import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { AppbannerComponent } from './appbanner/appbanner.component';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/services/products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './account/account.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PagenotfoundComponent,
        FooterComponent,
        AppbannerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ProductsModule,
        StaticpagesModule,
        AccountModule,
        AppRoutingModule
    ],
    providers: [
        ProductsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
