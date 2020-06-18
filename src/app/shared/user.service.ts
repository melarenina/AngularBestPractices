import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(this.url).pipe(
      map(users => { // Pra pegar apenas os emails do usuário
        const newUsers = [];
        for (let user of users) {
          const email = user.email;
          newUsers.push({ email });
        }
        return newUsers;
      }),
      tap(users => console.log(users))
    );
  }

  getUserByEmail(email: string) {
    return this.http.get<any[]>(`${this.url}?email=${email}`); // Que seria a mesma coisa que passar o email como argumento na url
  }
}
