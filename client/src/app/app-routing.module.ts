import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Relish Time App',
    },
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipe.module').then((m) => m.RecipesModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
