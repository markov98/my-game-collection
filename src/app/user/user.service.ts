import { Injectable, OnDestroy, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, User, signInWithEmailAndPassword, signOut, idToken } from '@angular/fire/auth';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private auth: Auth = inject(Auth);
  idToken$ = idToken(this.auth);
  idTokenSubscription: Subscription;
  token: string | null = null;

  get isLogged(): boolean {
    return !!this.auth.currentUser;
  }

  get user(): User | null {
    return this.auth.currentUser;
  }


  constructor() {
    this.idTokenSubscription = this.idToken$.subscribe((result: string | null) => { 
      this.token = result;
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
    this.idTokenSubscription.unsubscribe();
  }
}
