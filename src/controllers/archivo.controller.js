import { archivoDto } from "../dtos/request/archivo.dto.js";
import { ArchivoService } from "../services/archivos.service.js";

export async function crearArchivo(req, res) {
  try {
    const data = archivoDto(req.body);
    const url = await ArchivoService.crearArchivo(data);
    return res.status(201).json({ url });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function eliminarArchivo(req, res) {
  try {
    await ArchivoService.eliminarArchivo(req.body);
    return res.status(201).json(url);
  } catch (error) {
    return res.status(401).json(error);
  }
}
