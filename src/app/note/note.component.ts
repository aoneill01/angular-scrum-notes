import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  dummyItems: string[] = [
    "*This* is a **test**",
    "And `another` test",
    "***Final***"
  ];
  
  @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }

}
