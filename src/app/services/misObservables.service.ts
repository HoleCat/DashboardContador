import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isNumber } from 'util';

@Injectable({providedIn: 'root'})

export class MiObservableService {

    public idLiquidacion: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() { }

    public enviarIdLiquidacion(value: number) {

        this.idLiquidacion.next( value);

    }

}
