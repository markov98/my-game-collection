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

  get isLogged(): boolean { 
    return !!this.auth.currentUser;
  }

  get user() : User | null {
    return this.auth.currentUser;
  }

  getIdToken() {
    if (!this.user) {
        return Promise.resolve(undefined);
    }
    
    return this.user.getIdToken().catch(() => undefined);
}

  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      console.log(this.auth.currentUser);
    });

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
