import { Component } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../../models/Persona';
import { OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-persona-api-component',
  standalone: false,
  styleUrl: './persona-api-component.css',
  templateUrl: './persona-api-component.html',
})
export class PersonaApiComponent implements OnInit {
  public arrayPersonas!: Array<Persona>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _ps: PersonasService,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      this.arrayPersonas = await this._ps.getPersonasAsync();
      this._cdr.detectChanges();
    } catch (error) {
      console.error('Error fetching personas:', error);
    }

    /*this._ps.getPersonasPromise().then((personas) => {
      this.arrayPersonas = personas;
      this._cdr.detectChanges();
    }).catch((error) => {
      console.error('Error fetching personas:', error);
    });*/

    /*this._ps.getPersonas().subscribe({
      next: (personas) => {
        this.arrayPersonas = personas;
        this._cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching personas:', error);
      }
    });*/
  }
}
