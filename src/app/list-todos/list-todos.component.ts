import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todos {

    constructor(
      public id: number,
      public description: string,
      public done: boolean,
      public targetDate: Date

    ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todo: Todos[]
  message: String;
  //   new Todos(1,'test1', false, new Date()),
  //   new Todos(2,'test2test2', false, new Date()),
  //   new Todos(3,'test3test3test33333333333333', false, new Date()),
  
  // ];

  constructor(
    private todoService: TodoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveTodoList('padua').subscribe(
      response => {
        this.todo = response;
      }
    )
  }

  deletePost(id) {
    console.log(`deleting post #${id}`);
    this.todoService.deletePost('padua', id).subscribe(
      response => {
        this.message = `Todo #${id} Deleted Successfully!`
        this.refreshTodos();
      }
    )
  }
  updatePost(id){
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
