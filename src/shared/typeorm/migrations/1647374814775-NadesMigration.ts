import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class NadesMigration1647374814775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: "nades",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "tickrate",
            type: "int",
          },
          {
            name: "position",
            type: "varchar",
          },
          {
            name: "picture",
            type: "varchar",
          },

          {
            name: "from",
            type: "varchar",
          },

          {
            name: "to",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("nades");
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
