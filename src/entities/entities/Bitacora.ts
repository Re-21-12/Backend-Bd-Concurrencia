import { Column, Entity } from "typeorm";

@Entity("BITACORA")
export class Bitacora {
  @Column("varchar2", { name: "NOM_TABLA", nullable: true, length: 50 })
  nomTabla: string | null;

  @Column("varchar2", {
    name: "USUARIO_TRANSACCION",
    nullable: true,
    length: 20,
  })
  usuarioTransaccion: string | null;

  @Column("char", { name: "TIPO_TRANSACCION", nullable: true, length: 1 })
  tipoTransaccion: string | null;

  @Column("varchar2", { name: "NOM_CAMPO", nullable: true, length: 50 })
  nomCampo: string | null;

  @Column("number", {
    name: "NUM_TRANSACCION",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  numTransaccion: number | null;

  @Column("varchar2", { name: "NUEVO_VALOR", nullable: true, length: 3000 })
  nuevoValor: string | null;

  @Column("number", { name: "LLAVE_PRIMARIA", nullable: true, scale: 0 })
  llavePrimaria: number | null;

  @Column("varchar2", { name: "VALOR_ANTERIOR", nullable: true, length: 3000 })
  valorAnterior: string | null;

  @Column("date", { name: "FECHA_TRANSACCION", nullable: true })
  fechaTransaccion: Date | null;
}
