import { Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

export const routes: Routes = [
    {component:HomeComponent, path:'', data: { animation: 'HomePage' }},
    {component:CardListComponent, path:'list', data: { animation: 'CardListPage' }},
    {component:CardDetailsComponent, path:'list/:id', data: { animation: 'CardDetailPage' }},
    {component:PageAboutComponent, path:'about',        data: { animation: 'AboutPage' }
}
];
