import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Prestamo } from "./Prestamo";

@Index("PAGO_PK", ["numeroPago"], { unique: true })
@Entity("PAGO")
export class Pago {
  @Column("number", { primary: true, name: "NUMERO_PAGO", scale: 0 })
  numeroPago: number;

  @Column("number", { name: "MONTO_PAGO", precision: 12, scale: 2 })
  montoPago: number;

  @Column("date", { name: "FECHA_PAGO" })
  fechaPago: Date;

  @ManyToOne(() => Prestamo, (prestamo) => prestamo.pagos)
  @JoinColumn([
    { name: "CODIGO_PRESTAMO", referencedColumnName: "codigoPrestamo" },
  ])
  codigoPrestamo: Prestamo;
}
