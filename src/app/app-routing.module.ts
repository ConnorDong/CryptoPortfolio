import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderViewComponent } from './pages/folder-view/folder-view.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { NewCoinComponent } from './pages/new-coin/new-coin.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'new-list', component: NewListComponent}, 
  {path: 'lists/:listId/new-coin', component: NewCoinComponent},
  {path: 'lists', component: FolderViewComponent},
  {path: 'lists/:listId', component: FolderViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
