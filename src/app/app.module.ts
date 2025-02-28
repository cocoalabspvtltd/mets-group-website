import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './view/contact/contact.component';
import { EventsComponent } from './view/events/events.component';
import { RouterModule } from "@angular/router";
import { SliderComponent } from './view/slider/slider.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { CorporateComponent } from './view/corporate/corporate.component';
import { AcademicBoardComponent } from './view/academic-board/academic-board.component';
import { CoursesComponent } from './view/courses/courses.component';
import { PlacementCellComponent } from './view/placement-cell/placement-cell.component';
import { LandingComponent } from './view/landing/landing.component';
import { AchievementsComponent } from './view/achievements/achievements.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './view/blog/blog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './view/popup/popup.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventsComponent,
    SliderComponent,
    GalleryComponent,
    CorporateComponent,
    AcademicBoardComponent,
    CoursesComponent,
    PlacementCellComponent,
    LandingComponent,
    AchievementsComponent,
    BlogComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,RouterModule,MatDialogModule,

    AppRoutingModule,HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot() ,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule 
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
