// ANGULAR
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// MODULE
import {AppRoutingModule} from './app-routing.module';

// COMPONENT
import {AppComponent} from './app.component';
import {FirstComponentComponent} from './first-component/first-component.component';
import {AppareilComponent} from './appareil/appareil.component';
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';


// SERVICE
import {AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    NotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
