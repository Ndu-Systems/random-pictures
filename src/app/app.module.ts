import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { FooterComponent } from './footer/footer.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderComponent } from './slider/slider.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeNavComponent,
      IntroSectionComponent,
      FooterComponent,
      ShowCaseComponent,
      HomePageComponent,
      SliderComponent,
      ContactFormComponent,
      ContactUsComponent,
      ServicesComponent,
      GalleryComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
