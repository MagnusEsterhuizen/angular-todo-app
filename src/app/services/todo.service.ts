import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './../models/Todo';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  itemsUrl: string = "https://jsonplaceholder.typicode.com/todos";
  itemsLimit: number = 5;

  constructor(private http: HttpClient) { }

  getItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.itemsUrl}?_limit=${this.itemsLimit}`);
  }

  completeItem(item: Todo): Observable<any> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put(url, item, httpOptions);
  }

  deleteItem(item: Todo): Observable<any> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.delete(url, httpOptions);
  }

  addItem(item: Todo): Observable<any> {
    const url = `${this.itemsUrl}`;
    return this.http.post<Todo>(url, item, httpOptions);
  }

}
