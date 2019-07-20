import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private current: Note = {
    timestamp: new Date(),
    today: ['*this* `is` a **test**'],
    yesterday: [],
    blockers: []
  };
  private history: Note[] = [];

  constructor() {}

  getCurrent() {
    return this.current;
  }
}
