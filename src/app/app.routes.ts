import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './service/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { ExamComponent } from './pages/exam/exam.component';
import { UserComponent } from './pages/user/user.component';


export const routes: Routes = [
    {
        path: '', redirectTo:'home' , pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent,
        children:[
            {
                path:'home',
                component:HomeComponent,
                canActivate: [authGuard]
            }
        ]

    },
    {
        path:'sidenav',
        component:SidenavComponent,
        children:[
            {
                path:'sidenav',
                component:DashboardComponent,
                canActivate: [authGuard]
            }
        ]
        
    },
    {
        path:'layout',
        component:LayoutComponent,
        children:[
            {
                path:'layout',
                component:LayoutComponent,
                canActivate: [authGuard]
            }
        ]
        
    },
    {
        path:'exam',
        component:ExamComponent,
        children:[
            {
                path:'exam',
                component:ExamComponent,
                canActivate: [authGuard]
            }
        ]
        
    }, {
        path:'user',
        component:UserComponent,
        children:[
            {
                path:'user',
                component:UserComponent,
                canActivate: [authGuard]
            }
        ]
        
    }
];
