import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Empleado } from '../../../models/Empleado';
import { PlantillaService } from '../../services/plantilla.service';

@Component({
  selector: 'app-plantilla-funcion-multiple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent {
  public arrayEmpleados: Array<Empleado> = [];
  public arrayFunciones: Array<string> = [];
  public funcionesSeleccionadas: Array<string> = [];

  constructor(
    private _plantillaService: PlantillaService,
    private _cdf: ChangeDetectorRef,
  ) {

  }

  async ngOnInit(): Promise<void> {
    if (this.arrayFunciones.length === 0) {
      try {
        this.arrayFunciones = await this._plantillaService.getFunciones();
        this._cdf.detectChanges();
      } catch (error) {
        console.error('Error fetching funciones:', error);
      }
    }
  }

  async buscarPlantilla(): Promise<void> {
    if (this.funcionesSeleccionadas.length > 0) {
      this._plantillaService
        .getPlantillaByFunciones(this.funcionesSeleccionadas)
        .then((empleados) => {
          this.arrayEmpleados = empleados;
          this._cdf.detectChanges();
        })
        .catch((error) => {
          console.error('Error fetching plantilla:', error);
        });
    } else {
      console.warn('No has seleccionado una función');
    }
  }
}
