import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { ManufacturerComponent } from './home/manufacturer/manufacturer.component';
import { ProductsComponent } from './home/products/products.component';
import { LoaderComponent } from './loader/loader.component';
      

    

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShowcaseComponent,
    ManufacturerComponent,
    ProductsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ], {scrollPositionRestoration : 'top'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


