import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GamesModule } from './games/games.module';
import { env } from '../env/env';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component'
import { AppInterceptor } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(env.firebase)),
    provideAuth(() => getAuth()),
    BrowserModule,
    CoreModule,
    GamesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
