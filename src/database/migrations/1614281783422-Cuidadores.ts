import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Cuidadores1614281783422 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cuidadores',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome_completo',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'whatsapp',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'opiniao',
            type: 'varchar',
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cuidadores');
  }

}
