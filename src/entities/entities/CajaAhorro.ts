import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Tarjeta } from "./Tarjeta";

@Index("CAJA_AHORRO_PK", ["codigoCaja"], { unique: true })
@Entity("CAJA_AHORRO")
export class CajaAhorro {
  @Column("number", {
    name: "SALDO_CAJA",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  saldoCaja: number | null;

  @Column("varchar2", { name: "DESCRIPCION", length: 50 })
  descripcion: string;

  @Column("number", { primary: true, name: "CODIGO_CAJA", scale: 0 })
  codigoCaja: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.cajaAhorros)
  @JoinColumn([
    { name: "CODIGO_CLIENTE", referencedColumnName: "codigoCliente" },
  ])
  codigoCliente: Cliente;

  @OneToMany(() => Tarjeta, (tarjeta) => tarjeta.codigoCaja)
  tarjetas: Tarjeta[];
}
