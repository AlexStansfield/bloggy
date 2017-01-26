import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public af: AngularFire) {}

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  loginUserPass(user: string, pass: string) {
    this.af.auth.login({ email: user, password: pass });
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
