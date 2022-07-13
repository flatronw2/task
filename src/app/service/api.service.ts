import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Client {
  name: string;
  code: number;
  duration: number;
  numberOfAccounts: number;
  dateOfCreation: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private apiServerUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/clients').pipe(map((res:any) => { 
      return res }
    ))
  }

  public postClient(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:3000/clients', client).pipe(map((res:any) => {
      return res }
    ))
  }

  public updateClient(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/clients/" + id, data);
  }

  public deleteClient(id: number) {
    return this.http.delete<any>("http://localhost:3000/clients/" + id);
  }
}