import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetNewComponent } from './pet-new/pet-new.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full",
  },
  {
    path: "main",
    component: MainPageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  },
  {
    path: "pets",
    component: PetListComponent,
  },
  {
    path: "pets/new",
    component: PetNewComponent,
  },
  {
    path: "pets/:id",
    component: PetDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
