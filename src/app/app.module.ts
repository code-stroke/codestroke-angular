import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout.component';
import { LoginLayoutComponent } from './login-layout.component';
import { CasesModule } from './cases/cases.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FontAwesomeModule,
        //CasesModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MainLayoutComponent,
        LoginLayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
