import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAwKEYK6ITlG98ot9llf17ANxkunuXPtgU',
  authDomain: ' bloggy-21132.firebaseio.com',
  databaseURL: 'https://bloggy-21132.firebaseio.com/',
  storageBucket: 'gs://bloggy-21132.appspot.com',
  messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
