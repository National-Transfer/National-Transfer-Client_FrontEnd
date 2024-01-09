import { Route } from "@angular/router";
import { BeneficiariesComponent } from "./beneficiaries/beneficiaries.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProfileComponent } from "./profile/profile.component";
import { RecentTransfersComponent } from "./recent-transfers/recent-transfers.component";
import { ServeTransferComponent } from "./serve-transfer/serve-transfer.component";
import { IssueTransferWalletComponent } from "./issue-transfer-wallet/issue-transfer-wallet.component";


export const APP_ROUTES: Route[] = [
    {
        path: '', component: NavigationComponent, children: [
            {
                path: '', component: HomePageComponent
            },
            {
                path: 'beneficiaries', component: BeneficiariesComponent
            },
            {
                path: 'profile', component: ProfileComponent
            },
            {
                path: 'recent-transfers', component: RecentTransfersComponent
            },
            {
                path: 'serve-transfer', component: ServeTransferComponent
            },
            {
                path: 'emission-Transfer', component: IssueTransferWalletComponent
            }
        ]
    } 
]