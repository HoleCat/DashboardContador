import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-tabladetalle',
  templateUrl: './tabladetalle.component.html',
  styleUrls: ['./tabladetalle.component.sass']
})
export class TabladetalleComponent implements OnInit {
  hidden = 0;
  public detalle: any;
  displayedColumns = [
    'ruc',
    'tipodocumento',
    'numerodocumento',
    'fecha',
    'moneda',
    'concepto',
    'contabilidad',
    'centrocosto',
    'monto',
    'igv'
    ];
  constructor(private register: RegistroService) { }

  ngOnInit(): void {
    try {
      this.register.detalle.subscribe(resp => {
        this.detalle = resp;
      } );
    } catch (error) {
      alert('ERROR');
    }

    if (this.detalle !== '') {
      this.hidden = 1;
    }
  }

}
