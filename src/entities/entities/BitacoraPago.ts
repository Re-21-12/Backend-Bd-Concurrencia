import { Column, Entity } from "typeorm";

@Entity("BITACORA_PAGO")
export class BitacoraPago {
  @Column("number", { name: "MESES_PENDIENTE", nullable: true, scale: 0 })
  mesesPendiente: number | null;

  @Column("number", {
    name: "SALDO_NUEVO",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  saldoNuevo: number | null;

  @Column("date", { name: "FECHA_TRANSACCION", nullable: true })
  fechaTransaccion: Date | null;

  @Column("char", { name: "TIPO_TRANSACCION", nullable: true, length: 1 })
  tipoTransaccion: string | null;

  @Column("number", {
    name: "SALDO_ANTERIOR",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  saldoAnterior: number | null;

  @Column("number", { name: "NUM_TRANSACCION", nullable: true, scale: 0 })
  numTransaccion: number | null;

  @Column("varchar2", {
    name: "USUARIO_TRANSACCION",
    nullable: true,
    length: 20,
  })
  usuarioTransaccion: string | null;

  @Column("date", { name: "FECHA_PAGO", nullable: true })
  fechaPago: Date | null;

  @Column("number", { name: "CODIGO_PRESTAMO", nullable: true, scale: 0 })
  codigoPrestamo: number | null;

  @Column("number", {
    name: "MONTO_PAGO",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  montoPago: number | null;
}
