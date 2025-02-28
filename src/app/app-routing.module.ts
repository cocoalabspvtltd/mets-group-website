import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { EventsComponent } from './view//events/events.component';
import { CommonModule } from '@angular/common';
import { PlacementCellComponent } from './view/placement-cell/placement-cell.component';
import { CoursesComponent } from './view/courses/courses.component';
import { AcademicBoardComponent } from './view/academic-board/academic-board.component';
import { CorporateComponent } from './view/corporate/corporate.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { AchievementsComponent } from './view/achievements/achievements.component';
import { LandingComponent } from './view/landing/landing.component';
import { BlogComponent } from './view/blog/blog.component';

const routes: Routes = [
  { path: '',                  redirectTo   : 'home', pathMatch: 'full'     },
  { path: 'home',              component    :  HomeComponent                },
  { path: 'about',             component    :  AboutComponent               },
  { path: 'events',            component    :  EventsComponent              },
  { path: 'contact',           component    :  ContactComponent             },
  { path: 'placements',        component    :  PlacementCellComponent       },
  { path: 'courses',           component    :  CoursesComponent             },
  { path: 'academic-board',    component    :   AcademicBoardComponent      },
  { path: 'corpotate-board',   component    :  CorporateComponent           },
  { path: 'gallery',           component    :  GalleryComponent             },
  { path: 'achievements',      component    :   AchievementsComponent       },
  { path: 'blog',              component    :   BlogComponent       },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }),CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
