import { Injectable, OnDestroy, inject } from '@angular/core';
import { Auth , createUserWithEmailAndPassword, User, user} from '@angular/fire/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;
  currUser: User | null = null;

  get isLogged() : boolean {
    console.log(this.currUser);
    
    return !!this.currUser;
  }


  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
     this.currUser = aUser;
    })
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string) {
    const userCredentials = await signInWithEmailAndPassword(this.auth, email, password);
    return userCredentials;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
