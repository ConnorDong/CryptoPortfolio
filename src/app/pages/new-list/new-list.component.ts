import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Router} from '@angular/router'
import {List} from 'src/app/models/list.model'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }
  createList(title: string) {
    title = title.trim();
    if(title=="") {
      return;
    }
    this.taskService.createFolder(title).subscribe((list: List) =>{
      //go back
      this.router.navigate(['/lists', list._id]);
    })
  }

}
