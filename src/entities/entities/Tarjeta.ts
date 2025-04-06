import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { CajaAhorro } from "./CajaAhorro";
import { Titular } from "./Titular";

@Index("SYS_C008902", ["codigoTitular"], { unique: true })
@Index("TARJETA_PK", ["numeroTarjeta"], { unique: true })
@Entity("TARJETA")
export class Tarjeta {
  @Column("number", { primary: true, name: "CODIGO_TITULAR", scale: 0 })
  codigoTitular: number;

  @Column("number", { name: "NUMERO_TARJETA", scale: 0 })
  numeroTarjeta: number;

  @Column("varchar2", { name: "MARCA", length: 50 })
  marca: string;

  @Column("date", { name: "FECHA_VENCIMIENTO" })
  fechaVencimiento: Date;

  @Column("number", { name: "PIN", scale: 0 })
  pin: number;

  @ManyToOne(() => CajaAhorro, (cajaAhorro) => cajaAhorro.tarjetas)
  @JoinColumn([{ name: "CODIGO_CAJA", referencedColumnName: "codigoCaja" }])
  codigoCaja: CajaAhorro;

  @OneToOne(() => Titular, (titular) => titular.tarjeta)
  @JoinColumn([
    { name: "CODIGO_TITULAR", referencedColumnName: "codigoTitular" },
  ])
  codigoTitular2: Titular;
}
