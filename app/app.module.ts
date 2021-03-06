import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { CompletenessPipe } from './completeness.pipe';
import { KegComponent } from './keg.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    NewKegComponent,
    CompletenessPipe,
    KegComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
