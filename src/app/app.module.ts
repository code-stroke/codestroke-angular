import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout.component';
import { LoginLayoutComponent } from './login-layout.component';
import { CasesModule } from './cases/cases.module';
import { HeaderComponent } from './header.component';
import { APP_ROUTES } from './app.routes';
import { ClickElsewhereDirective } from './util/click-elsewhere.directive';
import { setServiceLocator } from './util/service-locator';
import { environment } from 'src/environments/environment';
import { LoadingComponent } from './loading.component';
import { PopupComponent } from './popup.component';


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
        HeaderComponent,
        ClickElsewhereDirective,
        LoadingComponent,
        PopupComponent
    ],
    providers: [{provide: LocationStrategy, useClass: environment.location_strategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor (injector : Injector) {
        setServiceLocator(injector);
    }
}
