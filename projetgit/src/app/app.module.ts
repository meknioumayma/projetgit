import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InecriptionComponent } from './inecription/inecription.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PagedeuxComponent } from './pagedeux/pagedeux.component';
import { PagetroisComponent } from './pagetrois/pagetrois.component';
import { PagequatreComponent } from './pagequatre/pagequatre.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InecriptionComponent,
    PageComponent,
    HeaderComponent,
    PagedeuxComponent,
    PagetroisComponent,
    PagequatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule ,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
