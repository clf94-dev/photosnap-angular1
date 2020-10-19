import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule, Route} from "@angular/router"
import { FeaturesComponent } from './components/pages/features/features.component'
import { HomeComponent } from './components/pages/home/home.component'
import { PricingComponent } from './components/pages/pricing/pricing.component'
import { StoriesComponent } from './components/pages/stories/stories.component'

const appRoutes: Routes=[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'pricing', component:PricingComponent},
    {path:'stories', component:StoriesComponent},
    {path:'features', component:FeaturesComponent},
];
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders<Route> =RouterModule.forRoot(appRoutes);