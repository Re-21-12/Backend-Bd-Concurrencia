import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { Movimiento } from "./Movimiento";
import { Tarjeta } from "./Tarjeta";

@Index("TITULAR_PK", ["codigoTitular"], { unique: true })
@Entity("TITULAR")
export class Titular {
  @Column("varchar2", { name: "SEGUNDO_APELLIDO", length: 50 })
  segundoApellido: string;

  @Column("varchar2", { name: "SEGUNDO_NOMBRE", length: 50 })
  segundoNombre: string;

  @Column("number", { primary: true, name: "CODIGO_TITULAR", scale: 0 })
  codigoTitular: number;

  @Column("varchar2", { name: "PRIMER_APELLIDO", length: 50 })
  primerApellido: string;

  @Column("varchar2", { name: "PRIMER_NOMBRE", length: 50 })
  primerNombre: string;

  @Column("varchar2", { name: "TERCER_NOMBRE", nullable: true, length: 50 })
  tercerNombre: string | null;

  @Column("varchar2", { name: "DIRECCION", length: 100 })
  direccion: string;

  @Column("number", { name: "EDAD", scale: 0 })
  edad: number;

  @OneToMany(() => Movimiento, (movimiento) => movimiento.codigoTitular)
  movimientos: Movimiento[];

  @OneToOne(() => Tarjeta, (tarjeta) => tarjeta.codigoTitular2)
  tarjeta: Tarjeta;
}
