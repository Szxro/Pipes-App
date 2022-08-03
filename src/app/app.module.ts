import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing Module
import { AppRouterModule } from './app-router.module';

//Components
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';

//Change to Local Date
import LocalDO from '@angular/common/locales/es-DO';
import LocalJP from "@angular/common/locales/ja";
import {registerLocaleData} from '@angular/common';
registerLocaleData(LocalDO);
registerLocaleData(LocalJP);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    ComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es-DO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
