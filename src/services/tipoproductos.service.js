import { prisma } from "../prisma.js";

export class TipoProductoService {
  static async crearTipoProducto({ nombre }) {
    const nuevoTipoProducto = await prisma.tipoProducto.create({
      data: {
        nombre,
      },
    });

    return { content: nuevoTipoProducto };
  }

  static async listaTipoProducto() {
    const listaProductos = await prisma.tipoProducto.findMany();
    return { content: listaProductos };
  }
  //
  static async eliminarTipoProducto(id) {
    const tipoProductoBuscar = await prisma.tipoProducto.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
    if (tipoProductoBuscar) {
      const tipoProductoEliminar = await prisma.tipoProducto.delete({
        where: { id },
      });
      return { tipoProducto: tipoProductoEliminar };
    } else {
      return { message: "no se encontro" };
    }
  }
}
