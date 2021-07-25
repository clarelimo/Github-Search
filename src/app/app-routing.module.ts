import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'search',component:SearchComponent},
  {path:'header',component:HeaderComponent},
  {path: '', redirectTo:"/user", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
