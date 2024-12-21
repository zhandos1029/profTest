import { Route } from '@angular/router';
import { ProfileComponent } from 'app/modules/auth/profile/profile.component';

export const profileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent
    }
];
