import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cajero } from "./Cajero";
import { Titular } from "./Titular";

@Index("MOVIMIENTO_PK", ["codigoMovimiento"], { unique: true })
@Entity("MOVIMIENTO")
export class Movimiento {
  @Column("date", { name: "FECHA" })
  fecha: Date;

  @Column("varchar2", { name: "TIPO_OPERACION", length: 50 })
  tipoOperacion: string;

  @Column("number", { name: "CUENTA_DEBITAR", nullable: true, scale: 0 })
  cuentaDebitar: number | null;

  @Column("number", { primary: true, name: "CODIGO_MOVIMIENTO", scale: 0 })
  codigoMovimiento: number;

  @Column("number", { name: "CUENTA_ACREDITAR", nullable: true, scale: 0 })
  cuentaAcreditar: number | null;

  @Column("number", { name: "MONTO", precision: 12, scale: 2 })
  monto: number;

  @ManyToOne(() => Cajero, (cajero) => cajero.movimientos)
  @JoinColumn([{ name: "CODIGO_CAJERO", referencedColumnName: "codigoCajero" }])
  codigoCajero: Cajero;

  @ManyToOne(() => Titular, (titular) => titular.movimientos)
  @JoinColumn([
    { name: "CODIGO_TITULAR", referencedColumnName: "codigoTitular" },
  ])
  codigoTitular: Titular;
}
