import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { ExamComponent } from './pages/exam/exam.component';
import { CreateExamComponent } from './pages/create-exam/create-exam.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'sidenav',component:SidenavComponent},
  {path:'exam',component:ExamComponent},
  {path:'create_exam',component:CreateExamComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}