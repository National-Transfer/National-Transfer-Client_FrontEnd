import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BeneficiariesComponent } from './components/beneficiaries/beneficiaries.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecentTransfersComponent } from './components/recent-transfers/recent-transfers.component';

export const routes: Routes = [
    {
        path: '', component: NavigationComponent, children: [
            {
                path: 'home', component: HomePageComponent
            },
            {
                path: 'beneficiaries', component: BeneficiariesComponent
            },
            {
                path: 'profile', component: ProfileComponent
            },
            {
                path: 'recent-transfers', component: RecentTransfersComponent
            }
        ]
    }
];
