import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Cuidadores from '../models/Cuidadores';

import CuidadoresServices from '../services/CuidadoresServices';

class CuidadoresController {

  async index(request: Request, response: Response) {
    const cuidadoresRepository = getRepository(Cuidadores);

    const { email } = request.query;

    const cuidadores = await cuidadoresRepository.findOne({
      where: { email }
    })

    if(cuidadores) {
      return response.json({ error: 'Já existe um registro em nossos sistema!' });
    }

    return response.json(cuidadores);

  }

  async create(request: Request, response: Response) {
    try {
      const {
        nome_completo,
        email,
        whatsapp,
        opiniao,
      } = request.body;

      const cuidadoresServices = new CuidadoresServices();

      const cuidadores = await cuidadoresServices.execute({
        nome_completo,
        email,
        whatsapp,
        opiniao,
      });

      return response.json(cuidadores);

    } catch(err) {
      return response.status(400).json({ error: err.message });
    }
  }

}

export default CuidadoresController;
