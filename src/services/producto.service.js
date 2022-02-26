import { prisma } from "../prisma.js";

export class ProductoService {
  static async crearProducto(data) {
    try {
      const nuevoProducto = await prisma.producto.create({
        data,
      });
      return { content: nuevoProducto };
    } catch (error) {
      console.log(error);
      return { message: "error en la creacion" };
    }
  }
  static async obtenerProductoId(id) {
    const producto = await prisma.producto.findUnique({
      where: { id: +id },
      include: { tipoProducto: true },
      rejectOnNotFound: false,
    });
    if (producto === undefined) {
      return {
        message: `No existe este producto con ese id`,
        id: id,
      };
    }
  }
  static async listarProductos() {
    const productos = await prisma.producto.findMany({
      include: { tipoProducto: true },
    });
    const productosIterados = productos.map((producto) => {
      return {
        ...producto,
      };
    });
    return {
      message: "Productos",
      data: productosIterados,
    };
  }
  static async eliminarProductoId(id) {
    const productoEncontrado = await prisma.producto.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
    if (productoEncontrado) {
      const productoEliminado = await prisma.producto.delete({
        where: { id },
      });
      return { producto: productoEliminado };
    } else {
      return { message: "no se encontro" };
    }
  }
}
