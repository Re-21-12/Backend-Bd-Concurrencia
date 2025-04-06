import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Pago } from "./Pago";
import { Cliente } from "./Cliente";

@Index("PRESTAMO_PK", ["codigoPrestamo"], { unique: true })
@Entity("PRESTAMO")
export class Prestamo {
  @Column("number", { name: "MONTO_TOTAL", precision: 12, scale: 2 })
  montoTotal: number;

  @Column("number", { primary: true, name: "CODIGO_PRESTAMO", scale: 0 })
  codigoPrestamo: number;

  @Column("number", { name: "MONTO_PAGADO", precision: 12, scale: 2 })
  montoPagado: number;

  @Column("varchar2", { name: "ESTADO_PRESTAMO", length: 20 })
  estadoPrestamo: string;

  @Column("date", { name: "FECHA_OTORGADO" })
  fechaOtorgado: Date;

  @Column("number", { name: "INTERES", precision: 6, scale: 2 })
  interes: number;

  @Column("number", { name: "SALDO_PENDIENTE", precision: 12, scale: 2 })
  saldoPendiente: number;

  @Column("number", { name: "MONTO_INICIAL", precision: 12, scale: 2 })
  montoInicial: number;

  @Column("number", { name: "MESES_PENDIENTE", scale: 0 })
  mesesPendiente: number;

  @Column("date", { name: "FECHA_VENCIMIENTO" })
  fechaVencimiento: Date;

  @OneToMany(() => Pago, (pago) => pago.codigoPrestamo)
  pagos: Pago[];

  @ManyToOne(() => Cliente, (cliente) => cliente.prestamos)
  @JoinColumn([
    { name: "CODIGO_CLIENTE", referencedColumnName: "codigoCliente" },
  ])
  codigoCliente: Cliente;
}
