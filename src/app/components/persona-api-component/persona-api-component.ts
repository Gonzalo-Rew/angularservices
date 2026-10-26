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
  ngOnInit(): void {
    this._ps.getPersonas().subscribe((personas) => {
      this.arrayPersonas = personas;
      this._cdr.detectChanges();
    });
  }
}
