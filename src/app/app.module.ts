import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllFeaturesComponent } from './components/all-features/all-features.component';
import { AllStoriesComponent } from './components/all-stories/all-stories.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeaturesHomeComponent } from './components/features-home/features-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroHomeComponent } from './components/intro-home/intro-home.component';
import { PricingPlansComponent } from './components/pricing-plans/pricing-plans.component';
import { StoriesHomeComponent } from './components/stories-home/stories-home.component';
import { TopFeaturesComponent } from './components/top-features/top-features.component';
import { TopPricingComponent } from './components/top-pricing/top-pricing.component';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllFeaturesComponent,
    AllStoriesComponent,
    CtaComponent,
    FeaturesHomeComponent,
    FooterComponent,
    IntroHomeComponent,
    PricingPlansComponent,
    StoriesHomeComponent,
    TopFeaturesComponent,
    TopPricingComponent,
    TopStoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
