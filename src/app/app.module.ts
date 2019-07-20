import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { ItemizedListComponent } from './itemized-list/itemized-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ItemizedListComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
