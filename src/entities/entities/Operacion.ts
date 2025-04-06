import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cajero } from "./Cajero";

@Index("OPERACION_PK", ["codigoOperacion"], { unique: true })
@Entity("OPERACION")
export class Operacion {
  @Column("varchar2", { name: "NOMBRE_OPERACION", length: 50 })
  nombreOperacion: string;

  @Column("number", { primary: true, name: "CODIGO_OPERACION", scale: 0 })
  codigoOperacion: number;

  @ManyToOne(() => Cajero, (cajero) => cajero.operacions)
  @JoinColumn([{ name: "CODIGO_CAJERO", referencedColumnName: "codigoCajero" }])
  codigoCajero: Cajero;
}
