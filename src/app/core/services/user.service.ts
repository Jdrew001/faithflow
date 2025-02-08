import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { UserInformation } from '../models/user-information.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userInformation: UserInformation = {};
  get userInformation(): UserInformation {
    return this._userInformation;
  }
  set userInformation(value: UserInformation) {
    this._userInformation = value;
  }

  constructor(
    private httpHelperService: HttpHelperService
  ) { }

  getUserInformation() {
    this.httpHelperService.get<UserInformation>('auth/userInformation').subscribe((response) => {
      this.userInformation = response
      console.log(this.userInformation);
    });
  }
}
