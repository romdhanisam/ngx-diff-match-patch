import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent, KeysPipe } from './app.component';
import { DiffMatchPatchModule } from 'projects/ngx-diff-match-patch/src/lib/diffMatchPatch.module';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DiffMatchPatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
