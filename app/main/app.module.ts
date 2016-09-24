import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 路由
import { routing } from './../router/app.routing';

// 组件
import { AppComponent } from './../components/app.component';
import { HomeComponent } from './../components/home/home.component';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from './../components/login/register.component';
import { CommonService } from './../services/common.service';
import { UtilService } from './../services/util.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        CommonService,
        UtilService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }