import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: string;

  constructor(private auth: Auth) {
  }

  async register(email: string, password: string) {
    console.log(email + password)
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      if (user){
        localStorage.setItem('user-email', <string>this.auth.currentUser!.email);
        this.getUserInformationFromLocalStorage()
      }
      return user;
    } catch (e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth).then((response) => {
      localStorage.removeItem('user-email');
    });
  }

  getUserInformationFromLocalStorage(){
    const userEmail = <string>localStorage.getItem('user-email');
    this.currentUser = userEmail;
  }

  isAuthenticated(){
    if (localStorage.getItem('user-email')){
      return true;
    } else {
      return false;
    }
  }
}
