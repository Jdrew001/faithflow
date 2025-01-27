import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { LoginService } from './login/services/login.service';
import { LoginFormService } from './login/services/login-form.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    LoginFormService
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
