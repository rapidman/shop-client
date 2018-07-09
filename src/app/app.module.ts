import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UICarouselModule} from 'ui-carousel';

import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {
  MatAutocompleteModule,
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
  MatTooltipModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from './main/main.component';
import {NewsComponent} from './news/news.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {AboutComponent} from './about/about.component';
import {SharedModule} from "./shared/shared.module";


const appRoutes: Routes = [
  // {path: '', redirectTo: '/main', pathMatch: 'full'},
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
    path: '',
    redirectTo: '/category',
    pathMatch: 'full'
  },
];

export const routedComponents = [MainComponent, NewsComponent];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewsComponent,
    FeedbackComponent,
    AboutComponent,
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
    UICarouselModule,
    SharedModule,
    // ProductDashboardModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppModule {
}

