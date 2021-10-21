import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import {Coin} from 'src/app/models/coin.model'
import {List} from 'src/app/models/list.model'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss']
})
export class FolderViewComponent implements OnInit {
  lists: List[];
  coins : Coin[];
  selectedListId: string;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        if(params.listId) {
          this.selectedListId = params.listId;
          this.taskService.getCoins(params.listId).subscribe((coins: Coin[])=>{
            //console.log(params.listId);
            this.coins = coins;
          })
        } else {
          this.coins = undefined;
        }

      }
    )
    this.taskService.getLists().subscribe((lists: List[])=>{

      this.lists = lists;
    })
  }
  onCoinClick(coin: Coin) {
    //we want to set coin to completed
    this.taskService.complete(coin).subscribe((res: any)=>{
      //console.log(res)
      //the coin has been completed
      coin.completed = !coin.completed;
    })
  }
  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }
  onDeleteCoinClick(id: string) {
    this.taskService.deleteCoin(this.selectedListId, id).subscribe((res: any) => {
      this.coins = this.coins.filter(val => val._id !== id);
      console.log(res);
    })
  }
  onLogoutListClick() {
    this.authService.logout();
  }
  onRefreshClick() {
    this.taskService.getCoins(this.route.snapshot.paramMap.get('listId')).subscribe((coins: Coin[])=>{
      //console.log(params.listId);
      this.coins = coins;
      alert('Refreshed');
    })
  }


}
