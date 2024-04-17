import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NoSuchPageComponent } from './no-such-page/no-such-page.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/list'},
  {path:'list',component:ContactsListComponent},
  {path:'add',component:ContactFormComponent},
  {path:'**',component:NoSuchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
