import { Component, OnInit } from '@angular/core';
import { Liquidacion } from 'src/app/clases/liquidacion/liquidacion';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.sass']
})
export class LiquidacionComponent implements OnInit {

  lcreated = 0;
  aprobadores = [{id: 1, descripcion: 'Jorge Hospinal'}, {id: 2, descripcion: 'Sergio Savaleta'}, {id: 3, descripcion: 'Axel Davis'}];
  constructor(private register: RegistroService) { }

  lmodel = new Liquidacion(1, 1, 'ninguno', 'ninguno', 2000, false, 1, 200, 1000);
  idLiquidacion;

  ngOnInit(): void {
  }

  onSubmit() {
    this.register.insertLiquidacion(this.lmodel).subscribe(
      data => this.register.sendliquidacion(data),
      error => console.log('Error ! ' + error)
    );
  }

}
