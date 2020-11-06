import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveTodoList(username) {
    return this.http.get<Todos[]>(`http://localhost:8080/users/${username}/todos`);

  }

  deletePost(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  
  retrieveTodo(username, id){
    return this.http.get<Todos>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  
  updateTodo(username, id, todos){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todos)
  }

  createTodo(username, todos){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todos)
  }

}
