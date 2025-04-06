import { Column, Entity } from "typeorm";

@Entity("INICIO_SESION")
export class InicioSesion {
  @Column("number", { name: "SECUENCIA", nullable: true })
  secuencia: number | null;

  @Column("number", { name: "CODIGO_CLIENTE", nullable: true })
  codigoCliente: number | null;

  @Column("timestamp", { name: "FECHA_HORA", nullable: true, scale: 6 })
  fechaHora: Date | null;

  @Column("number", { name: "NUMERO_TARJETA", nullable: true })
  numeroTarjeta: number | null;

  @Column("number", { name: "CODIGO_TITULAR", nullable: true })
  codigoTitular: number | null;

  @Column("number", { name: "CODIGO_CAJA", nullable: true })
  codigoCaja: number | null;
}
