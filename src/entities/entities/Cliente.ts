import { Column, Entity, Index, OneToMany } from "typeorm";
import { CajaAhorro } from "./CajaAhorro";
import { Prestamo } from "./Prestamo";

@Index("CLIENTE_PK", ["codigoCliente"], { unique: true })
@Entity("CLIENTE")
export class Cliente {
  @Column("varchar2", { name: "SEGUNDO_APELLIDO", length: 50 })
  segundoApellido: string;

  @Column("varchar2", { name: "DIRECCION", length: 100 })
  direccion: string;

  @Column("number", { name: "EDAD", scale: 0 })
  edad: number;

  @Column("varchar2", { name: "PRIMER_APELLIDO", length: 50 })
  primerApellido: string;

  @Column("varchar2", { name: "SEGUNDO_NOMBRE", length: 50 })
  segundoNombre: string;

  @Column("number", { primary: true, name: "CODIGO_CLIENTE", scale: 0 })
  codigoCliente: number;

  @Column("varchar2", { name: "PRIMER_NOMBRE", length: 50 })
  primerNombre: string;

  @Column("varchar2", { name: "TERCER_NOMBRE", nullable: true, length: 50 })
  tercerNombre: string | null;

  @OneToMany(() => CajaAhorro, (cajaAhorro) => cajaAhorro.codigoCliente)
  cajaAhorros: CajaAhorro[];

  @OneToMany(() => Prestamo, (prestamo) => prestamo.codigoCliente)
  prestamos: Prestamo[];
}
