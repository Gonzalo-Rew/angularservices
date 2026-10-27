import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Empleado } from '../../models/Empleado';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlantillaService {
  constructor(private _http: HttpClient) {}

  url = environment.urlApiPlantilla;

  async getFunciones(): Promise<string[]> {
    let request = 'api/Plantilla/Funciones';
    return firstValueFrom(this._http.get<string[]>(this.url + request));
  }

  async getPlantillaByFuncion(funcion: string): Promise<Empleado[]> {
    let request = `api/Plantilla/PlantillaFuncion/${funcion}`;
    return firstValueFrom(this._http.get<Empleado[]>(this.url + request));
  }

  async getPlantillaByFunciones(funciones: string[]): Promise<Empleado[]> {
    let content = funciones.map((funcion) => `funcion=${encodeURIComponent(funcion)}`).join('&');
    let request = `api/Plantilla/PlantillaFunciones?${content}`;
    return firstValueFrom(this._http.get<Empleado[]>(this.url + request));
  }
}
