import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnalysisComponent} from "./analysis.component";
import {RouterModule} from "@angular/router";
import {analysisRoutes} from "./analysis-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(analysisRoutes),
  ]
})
export class AnalysisModule { }
