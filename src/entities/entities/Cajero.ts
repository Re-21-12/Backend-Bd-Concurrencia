import { Column, Entity, Index, OneToMany } from "typeorm";
import { Movimiento } from "./Movimiento";
import { Operacion } from "./Operacion";

@Index("CAJERO_PK", ["codigoCajero"], { unique: true })
@Entity("CAJERO")
export class Cajero {
  @Column("varchar2", { name: "UBICACION", length: 100 })
  ubicacion: string;

  @Column("number", { primary: true, name: "CODIGO_CAJERO", scale: 0 })
  codigoCajero: number;

  @Column("number", { name: "SALDO", precision: 12, scale: 2 })
  saldo: number;

  @OneToMany(() => Movimiento, (movimiento) => movimiento.codigoCajero)
  movimientos: Movimiento[];

  @OneToMany(() => Operacion, (operacion) => operacion.codigoCajero)
  operacions: Operacion[];
}
