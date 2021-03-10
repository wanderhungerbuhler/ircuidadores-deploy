import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cuidadores')
class Cuidadores {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome_completo: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  opiniao: string;
}

export default Cuidadores;
