import { Component } from '@angular/core';
import { AngularFire,  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: FirebaseListObservable<any>;
  results: FirebaseListObservable<any>;
  searchSubject: Subject<any>;

  constructor(af: AngularFire) {
    console.log();
    this.posts = af.database.list('/posts');
    this.searchSubject = new Subject();
    this.results = af.database.list('/posts', {
      query: {
        orderByChild: 'title',
        equalTo: this.searchSubject
      }
    });
  }
  addItem(title: string, summary: string, body: string) {
    this.posts.push({ title: title, summary: summary, body: body, created_at: firebase.database.ServerValue.TIMESTAMP });
  }
  updateItem(key: string, newTitle: string) {
    this.posts.update(key, { title: newTitle });
  }
  deleteItem(key: string) {
    this.posts.remove(key);
  }
  deleteEverything() {
    this.posts.remove();
  }
  search(text: string) {
    this.searchSubject.next(text);
  }
}
