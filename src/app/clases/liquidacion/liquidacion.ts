export class Liquidacion {
    constructor(
        public usuario: number,
        public aprobador: number,
        public motivo: string,
        public detalle: string,
        public montoentregado: number,
        public multimoneda: boolean,
        public tiempo: number,
        public liquidacion: number,
        public neto: number
    ) {}
}
