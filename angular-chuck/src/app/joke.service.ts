import { Category } from './category';
import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { JOKES } from './mock-jokes';
import { CATEGORIES } from './mock-jokes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class JokeService {

  constructor(private messageService: MessageService) { }

  getJokes(): Observable<Joke[]> {
    this.messageService.add('JokeService: fetched jokes');
    return of(JOKES);
  }

  getCategories(): Observable<Category[]> {
    this.messageService.add('JokeService: fetched categories');
    return of(CATEGORIES);
  }
}
