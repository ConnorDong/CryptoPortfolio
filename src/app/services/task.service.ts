import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';
import {Coin} from 'src/app/models/coin.model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService) { }

  createFolder(title: String) {
    //create a web request to create a folder
    return this.webRequestService.post('api/lists', {title});
  }

  getLists() {
    return this.webRequestService.get('api/lists');
  }
  getCoins(listId: string) {
    return this.webRequestService.get(`api/lists/${listId}/coins/`);
  }
    
  createCoin(title: String, listId: string) {
    //create a web request to create a Coin
    return this.webRequestService.post(`api/lists/${listId}/coins`, {title});
  }
  complete(coin: Coin) {
    return this.webRequestService.patch(`api/lists/${coin._listID}/coins/${coin._id}`, {
      completed: !coin.completed
    });
  }
  deleteCoin(listId: string, taskId: string) {
    return this.webRequestService.delete(`api/lists/${listId}/coins/${taskId}`);
  }

  deleteList(id: string) {
    return this.webRequestService.delete(`api/lists/${id}`);
  }

}
