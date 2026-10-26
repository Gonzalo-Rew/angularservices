import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComicsService } from './services/comics.service';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonaApiComponent } from './components/persona-api-component/persona-api-component';
import { MenuRutasComponet } from './components/menu-rutas-componet/menu-rutas-componet';

@NgModule({
  declarations: [App, ComicsComponent, PersonaApiComponent, MenuRutasComponet],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(), provideBrowserGlobalErrorListeners(), ComicsService],
  bootstrap: [App],
})
export class AppModule {}
