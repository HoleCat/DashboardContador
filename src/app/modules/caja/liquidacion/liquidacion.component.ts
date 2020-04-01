import { Component, OnInit } from '@angular/core';
import { Liquidacion } from 'src/app/clases/liquidacion/liquidacion';
import { RegistroService } from 'src/app/services/registro.service';
import { MiObservableService } from 'src/app/services/misObservables.service';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.sass']
})
export class LiquidacionComponent implements OnInit {
  lcreated = true;

  aprobadores = [{id: 1, descripcion: 'Jorge Hospinal'}, {id: 2, descripcion: 'Sergio Savaleta'}, {id: 3, descripcion: 'Axel Davis'}];
  constructor(
    private register: RegistroService,
    private miObservable: MiObservableService
    ) { }
  idliquidacion;
  lmodel = new Liquidacion(1, 1, 'ninguno', 'ninguno', 2000, false, 1, 200, 1000);

 

  ngOnInit(): void {
  }

  setIdLiquidacion(id) {
    this.idliquidacion = id;
    console.log('id', id);

    this.miObservable.enviarIdLiquidacion( Number(id) );

    alert('se registro la liquidacion #! : ' + this.idliquidacion);
  }

  onSubmit() {
    this.register.insertLiquidacion(this.lmodel).subscribe(
      data => this.setIdLiquidacion(data),
      error => console.log('Error ! ' + error)
    );
    this.lcreated = false;
  }

}
