import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {mainRoutes} from "./main-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    MatIconModule,
    MatButtonModule
  ]
})
export class MainModule { }
