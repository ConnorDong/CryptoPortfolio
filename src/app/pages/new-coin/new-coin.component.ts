import { TmplAstElement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Params } from '@angular/router';
import { Coin } from 'src/app/models/coin.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-coin',
  templateUrl: './new-coin.component.html',
  styleUrls: ['./new-coin.component.scss']
})
export class NewCoinComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router ) { }
  listId: string

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.listId = params.listId;
      }
    )
  }
  createCoin(title:string) {
    if(title=="") {
      return;
    }
    title = title.trim();
    title = title.toLowerCase();
    this.taskService.createCoin(title, this.listId).subscribe((newCoin: Coin)=>{
      this.router.navigate(['../'], {relativeTo: this.route}, 
      );
    }, (err)=>{
      alert('Coin cannot be created,  Please check spelling. Note not all coins are supported at this time.')
    }
    )

  }

}
