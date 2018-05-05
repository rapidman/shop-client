import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {CarService} from "./shared/car/car.service";
import {HttpClientModule} from "@angular/common/http";
import { CarListComponent } from './car-list/car-list.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GiphyService} from "./shared/giphy/giphy.service";
import { CarEditComponent } from './car-edit/car-edit.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    MainComponent,
    NewsComponent,
    FeedbackComponent,
    AboutComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
