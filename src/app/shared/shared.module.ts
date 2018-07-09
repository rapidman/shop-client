import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from "./catalog/catalog.component";
import {DetailService} from "./service/detail/detail.service";
import {CatalogService} from "./service/catalog/catalog.service";
import {RouterModule, Routes} from "@angular/router";
import {SearchResultComponent} from "./search-result/search-result.component";
import {InfiniteCarouselComponent} from "./infinite-carousel/infinite-carousel.component";
import {SearchAutocompleteComponent} from "./search-autocomplete/search-autocomplete.component";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatDividerModule,
  MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule, MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {UICarouselModule} from "ui-carousel";

const routes: Routes = [
  {
    path: 'search-result/:query',
    component: SearchResultComponent
  },
];

@NgModule({
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
    UICarouselModule,
    // MatTreeModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule, CatalogComponent, InfiniteCarouselComponent, SearchAutocompleteComponent, SearchResultComponent ],
  declarations: [CatalogComponent, InfiniteCarouselComponent, SearchAutocompleteComponent, SearchResultComponent],
  providers: [DetailService, CatalogService],
})
export class SharedModule {
}