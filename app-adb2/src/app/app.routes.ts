import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ContactsMasterComponent } from './contacts/contacts-master/contacts-master.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { NoSuchResourceComponent } from './shared/no-such-resource/no-such-resource.component';

export const routes: Routes = [
    {path:"", redirectTo:"/home",pathMatch:'full'},
    {path:"home", component:HomeComponent,data:{label:"Home"}},
    {path:"contacts", component:ContactsMasterComponent,data:{label:"Contacts"},children:[
        {path:"", redirectTo:"list",pathMatch:'full'},
        {path:"list", component:ContactsListComponent,data:{label:"Contacts List"} },
        {path:"add", component:ContactFormComponent,data:{label:"New Contact"}},
        {path:"edit/:cid", component:ContactFormComponent,data:{label:"Edit Contact"}},
    ]},
    {path:"**", component:NoSuchResourceComponent}
];

/*
AppComponent
    |- HeaderComponent
    |- RouterOutletComponent    <--->   HomeComponent
                                <--->   ContactMAsterComponent
                                            |- ContactsSpecificNavbar
                                            |- RouterOutletComponent <--> ContactsListComponent
                                                                     <--> ContactFormComponent
                                <--->   NoSuchResourceComponent

*/