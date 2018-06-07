import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { TrialComponent } from './trial/trial.component';

const LAYOUT_ROUTES = [
    navbarRoute,
    { path: 'trials', component: TrialComponent },
    { path: 'trials/:id', component: TrialComponent },
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class MatchminerCurateAppRoutingModule {}
