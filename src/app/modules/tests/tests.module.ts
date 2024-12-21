import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {testsRoutes} from './tests-routing.module';
import {TestsComponent} from "./tests.component";
import {RouterModule} from "@angular/router";
import {FuseCardModule} from "../../../@fuse/components/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import { DetailComponent } from './detail/detail.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
      TestsComponent,
      DetailComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(testsRoutes),
        FuseCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatRadioModule,
    ]
})
export class TestsModule { }
