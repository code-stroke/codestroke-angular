import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ListContainerComponent } from './list-page/list-container/list-container.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { LoginComponentComponent } from './login-component.component';


@NgModule({
    declarations: [
        AppComponent,
        ListPageComponent,
        ListContainerComponent,
        MainComponentComponent,
        LoginComponentComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
