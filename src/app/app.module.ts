import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {UICarouselModule} from 'ui-carousel';

import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {CarService} from "./shared/car/car.service";
import {HttpClientModule} from "@angular/common/http";
import {CarListComponent} from './car-list/car-list.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GiphyService} from "./shared/giphy/giphy.service";
import {CarEditComponent} from './car-edit/car-edit.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from './main/main.component';
import {NewsComponent} from './news/news.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {AboutComponent} from './about/about.component';
import {CatalogComponent} from './shared/catalog/catalog.component';
import {SearchAutocompleteComponent} from './shared/search-autocomplete/search-autocomplete.component';
import {SearchResultComponent} from './shared/search-result/search-result.component';
import {DetailComponent} from './detail/detail.component';
import {InfiniteCarouselComponent} from './shared/infinite-carousel/infinite-carousel.component';
import {DetailService} from "./shared/service/detail/detail.service";
import {CatalogService} from "./shared/service/catalog/catalog.service";


const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {
    path: 'main',
    component: MainComponent, data: {state: 'home'}
  },
  {
    path: 'news',
    component: NewsComponent, data: {state: 'news'}
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
    path: 'search-result/:query',
    component: SearchResultComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
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

export const routedComponents = [MainComponent, NewsComponent];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    MainComponent,
    NewsComponent,
    FeedbackComponent,
    AboutComponent,
    CatalogComponent,
    SearchAutocompleteComponent,
    SearchResultComponent,
    DetailComponent,
    InfiniteCarouselComponent,
    routedComponents
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
    ReactiveFormsModule,
    MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    // MatTreeModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    }),
    UICarouselModule
  ],
  exports: [RouterModule],
  providers: [CarService, GiphyService, DetailService, CatalogService],
  bootstrap: [AppComponent]
})

export class AppModule {
}

