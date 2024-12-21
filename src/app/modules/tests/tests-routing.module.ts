import {Route} from '@angular/router';
import {TestsComponent} from "./tests.component";
import {DetailComponent} from "./detail/detail.component";

export const testsRoutes: Route[] = [
  {
    path     : '',
    component: TestsComponent,
  },
  {
    path: ':testKey',
    component: DetailComponent,
  },
];
