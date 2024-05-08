import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"register", component: RegisterationComponent},
    {path:"profile", component: ProfileComponent},
    {path:"home", component: HomeComponent},
    {path:"login", component: LoginComponent},
];
