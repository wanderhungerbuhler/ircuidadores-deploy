import { getRepository } from 'typeorm';

import Cuidadores from '../models/Cuidadores';

interface Request {
  nome_completo: string;
  email: string;
  whatsapp: string;
  opiniao: string;
}

class CuidadoresServices {
  public async execute({
    nome_completo,
    email,
    whatsapp,
    opiniao,
  }: Request): Promise<Cuidadores> {
    const cuidadoresRepository = getRepository(Cuidadores);

    const cuidadoresExists = await cuidadoresRepository.findOne({
      where: { email },
    });

    if(cuidadoresExists) {
      throw new Error('Já existe um cadastro em nosso sistema, verifique suas informações e tente novamente...');
    }

    const cuidadores = cuidadoresRepository.create({
      nome_completo,
      email,
      whatsapp,
      opiniao,
    });

    await cuidadoresRepository.save(cuidadores);

    return cuidadores;

  }
}

export default CuidadoresServices;
