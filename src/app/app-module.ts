import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { ComicsService } from './services/comics.service';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonaApiComponent } from './components/persona-api-component/persona-api-component';
import { MenuRutasComponet } from './components/menu-rutas-componet/menu-rutas-componet';
import { CochesService } from './services/coches.service';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';
import { PlantillaService } from './services/plantilla.service';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple-component/plantilla-funcion-multiple-component';

@NgModule({
  declarations: [
    App,
    ComicsComponent,
    PersonaApiComponent,
    MenuRutasComponet,
    CochesApiComponent,
    PlantillaFuncionSimpleComponent,
    PlantillaFuncionMultipleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ComicsService,
    CochesService,
    PlantillaService,
  ],
  bootstrap: [App],
})
export class AppModule {}
