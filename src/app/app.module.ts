import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout.component';
import { LoginLayoutComponent } from './login-layout.component';
import { CasesModule } from './cases/cases.module';
import { HeaderComponent } from './header.component';
import { APP_ROUTES } from './app.routes';





@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FontAwesomeModule,
        CasesModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES,{ enableTracing: false })
    ],
    declarations: [
        AppComponent,
        MainLayoutComponent,
        LoginLayoutComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
