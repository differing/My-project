import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appInterceptorProvider } from './app-inteceptor';
import { SharedModule } from './shared/shared.module';
import { NotificationComponent } from './core/notification/notification.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        AuthComponent,
        NotificationComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule], providers: [appInterceptorProvider, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
