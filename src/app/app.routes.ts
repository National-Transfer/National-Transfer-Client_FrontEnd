import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ProfileComponent } from './profile/profile.component';
import { RecentTransfersComponent } from './recent-transfers/recent-transfers.component';

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
