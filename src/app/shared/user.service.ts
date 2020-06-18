import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
          const uName = user.username;
          newUsers.push({ email, uName });
        }
        return newUsers;
      }),
      tap(users => console.log(users))
    );
  }

  getUserByEmail(email: string) {
    return this.http.get<any[]>(`${this.url}?email=${email}`); // Que seria a mesma coisa que passar o email como argumento na url
  }

  getUserByUsername(uName: string) {
    // return this.http.get<any[]>(`${this.url}?username=${uName}`);

    // Or using HttpParams
    return this.http.get<any[]>(this.url, {
      params: new HttpParams().set('username', uName)
    });

  }

}
