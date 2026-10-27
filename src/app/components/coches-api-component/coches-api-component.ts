import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CochesService } from '../../services/coches.service';
import { Coche } from '../../../models/Coche';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
  public arrayCoches!: Array<Coche>;

  constructor(private _cochesService: CochesService,
    private _cdr: ChangeDetectorRef
  ) {}
  async ngOnInit(): Promise<void> {
    this.arrayCoches = await this._cochesService.getCoches();
    this._cdr.detectChanges();
  }
}
