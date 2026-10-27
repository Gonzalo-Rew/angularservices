import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../../models/Persona';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private _http: HttpClient) {}

  url = environment.urlApiPersonas;

  getPersonas(): Observable<Persona[]> {
    return this._http.get<Persona[]>(this.url);
  }

  getPersonasPromise(): Promise<Persona[]> {
    return new Promise((resolve) => {
      this._http.get(this.url).subscribe((personas) => {
        resolve(personas as Persona[]);
      });
    });
  }

  async getPersonasAsync(): Promise<Persona[]> {
    return firstValueFrom(this._http.get<Persona[]>(this.url));
  }
}
