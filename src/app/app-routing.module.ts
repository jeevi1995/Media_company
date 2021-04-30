import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouteGuard } from './route-guard';

const routes: Routes = [
  { path: 'gallary', component: GalleryComponent, canActivate:[RouteGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
