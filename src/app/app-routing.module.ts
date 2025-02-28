import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/views/home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',                  redirectTo   : 'home', pathMatch: 'full'    },
  { path: 'home',              component   :  HomeComponent                },
]

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
