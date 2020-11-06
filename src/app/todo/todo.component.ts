import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Todos } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo : Todos;

  constructor(
    private todoService : TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todos(this.id,'',false, new Date());

    if(this.id!=-1){
    this.todoService.retrieveTodo('padua', this.id).subscribe(
      data => this.todo = data

    );
  }}
  saveTodo(){
    if (this.id === -1) {
        this.todoService.createTodo('padua', this.todo).subscribe(
          data => {
          this.router.navigate(['todos'])
          })
    }
    else {
    this.todoService.updateTodo('padua', this.id, this.todo).subscribe(
      data => {
      this.router.navigate(['todos'])
      })

  }

}}
