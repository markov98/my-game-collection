import { Injectable, OnDestroy, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, User, user, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;
  currUser: User | null = null;

  get isLogged(): boolean {
    console.log(this.currUser);

    return !!this.currUser;
  }


  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      this.currUser = aUser;
    })
  }

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    signOut(this.auth);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
