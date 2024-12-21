import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'main'},
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'main'},
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [

            {path: 'main', loadChildren: () => import('app/modules/main/main.module').then(m => m.MainModule)},
            {path: 'tests', loadChildren: () => import('app/modules/tests/tests.module').then(m => m.TestsModule)},
            {path: 'professions', loadChildren: () => import('app/modules/professions/professions.module').then(m => m.ProfessionsModule)},
            {path: 'psychologists', loadChildren: () => import('app/modules/psychologists/psychologists.module').then(m => m.PsychologistsModule)},
            {path: 'analysis', loadChildren: () => import('app/modules/analysis/analysis.module').then(m => m.AnalysisModule)},
            {path: 'pages', children: [
                {path: 'profile', loadChildren: () => import('app/modules/auth/profile/profile.module').then(m => m.ProfileModule)},
            ]},
            {path: '**', redirectTo: 'main'}
        ]
    }
];
