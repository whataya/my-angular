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
import { DashboardComponent } from './../components/home/dashboard.component';
import { ProfileComponent } from './../components/user/profile.component';
import { PayComponent } from './../components/pay/pay.component';

// 服务
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
        RegisterComponent,
        DashboardComponent,
        ProfileComponent,
        PayComponent
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