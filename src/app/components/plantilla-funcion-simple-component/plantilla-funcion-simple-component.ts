import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Empleado } from '../../../models/Empleado';
import { PlantillaService } from '../../services/plantilla.service';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit {
  public arrayEmpleados: Array<Empleado> = [];
  public arrayFunciones: Array<string> = [];
  public funcionSeleccionada: string = '';

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

  async buscarPlantilla(funcion: string): Promise<void> {
    this.funcionSeleccionada = funcion;

    if (funcion) {
      this._plantillaService
        .getPlantillaByFuncion(funcion)
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
