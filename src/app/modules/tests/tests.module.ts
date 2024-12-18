import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {testsRoutes} from './tests-routing.module';
import {TestsComponent} from "./tests.component";
import {RouterModule} from "@angular/router";
import {FuseCardModule} from "../../../@fuse/components/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
      TestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(testsRoutes),
    FuseCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class TestsModule { }
