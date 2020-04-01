export class Detalleliquidacion {
    constructor(
        public idliquidacion: number,
        public ruc: number,
        public tipodocumento: number,
        public numerodocumento: number,
        public fecha: string,
        public moneda: number,
        public concepto: string,
        public contabilidad: number,
        public centrocosto: number,
        public monto: number,
        public igv: boolean,
    ) {}
}
