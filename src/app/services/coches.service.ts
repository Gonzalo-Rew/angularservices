import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Coche } from '../../models/Coche';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CochesService {
  constructor(private _http: HttpClient) {}

  url = environment.urlApiCoches;

  async getCoches(): Promise<Coche[]> {
    let request = 'webresources/coches';
    return firstValueFrom(this._http.get<Coche[]>(this.url + request));
  }
}
