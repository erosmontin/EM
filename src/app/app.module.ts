import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationEntryComponent } from './publication-entry/publication-entry.component';
import { PublicationEntryAuthorsComponent } from './publication-entry-authors/publication-entry-authors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';
import { PublicationCardComponent } from './publication-card/publication-card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PublicationEntryTagsComponent } from './publication-entry-tags/publication-entry-tags.component';



@NgModule({
  declarations: [
    AppComponent,
    PublicationEntryComponent,
    PublicationEntryAuthorsComponent,
    PublicationCardComponent,
    PublicationEntryTagsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
