import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 组件
import { HomeComponent } from './../components/home/home.component';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from './../components/login/register.component';
import { DashboardComponent } from './../components/home/dashboard.component';
import { ProfileComponent } from './../components/user/profile.component';
import { PayComponent } from './../components/pay/pay.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'pay',
                component: PayComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);