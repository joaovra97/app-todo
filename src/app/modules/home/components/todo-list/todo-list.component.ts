import { Component, DoCheck } from '@angular/core';
import { first } from 'rxjs';

//Interfaces
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(last.checked) - Number(first.checked));
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm:boolean = window.confirm("Você deseja realmente Deletar tudo?");

    if(confirm)
      this.taskList = [];
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?");

      if(confirm)
        this.deleteItemTaskList(index);
    }
  }
}
