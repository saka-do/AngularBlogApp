import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndCoditionsComponent } from './pages/terms-and-coditions/terms-and-coditions.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'category', component: SingleCategoryComponent},
  {path:'post', component: SinglePostComponent},

  {path:'terms-and-conditions', component: TermsAndCoditionsComponent},
  {path:'about',component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
