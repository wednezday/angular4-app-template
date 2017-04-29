/* =========================================================================================
 * Import Library Angular 2 
 * ========================================================================================= */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

/* =========================================================================================
 * Import Service
 * ========================================================================================= */

import { Config } from './config/client';
import { AppService } from './services/app.service';
import { AppRoutingModule } from './app.routing';

/* =========================================================================================
 * Import Librarys
 * ========================================================================================= */

import { ApiLibrary } from './librarys/api.library';
import { CookieLibrary } from './librarys/cookie.library';
import { SecurityLibrary } from './librarys/security.library';

/* =========================================================================================
 * Import Component
 * ========================================================================================= */

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';

/* =========================================================================================
 * Module
 * ========================================================================================= */

@NgModule ({
    imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule ],
    declarations: [ AppComponent, MainComponent ],
    providers: [ Config, AppService, ApiLibrary, CookieLibrary, SecurityLibrary ],
    bootstrap: [ AppComponent ]
})

/* =========================================================================================
 * Class
 * ========================================================================================= */

export class AppModule { }