import { Injectable } from '@angular/core';
import { HttpHelperService } from '../../../core/services/http-helper.service';
import { LoginModel } from '../models/login.model';
import { TokenModel } from '../../../core/models/token.model';
import { AuthService } from '../../../core/services/auth.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpHelperService,
    private authService: AuthService
  ) { }

  public login(data: LoginModel) {
    return this.httpService.post<TokenModel>('auth/login', data).pipe(
      tap((response) => {
        // Save the token using AuthService
        if (response.accessToken) {
          this.authService.setAccessToken(response.accessToken);
          this.authService.setRefreshToken(response.refreshToken);
        }
      })
    );
  }
}
