import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../../models/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private _http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this._http.get<Persona[]>(
      'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas',
    );
  }
}
