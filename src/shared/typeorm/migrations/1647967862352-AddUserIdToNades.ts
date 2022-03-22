import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddUserIdToNades1647967862352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "nades",
      new TableColumn({
        name: "user_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "nades",
      new TableForeignKey({
        name: "NadesUser",
        columnNames: ["user_id"],
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("nades", "MoviesUser");
    await queryRunner.dropColumn("nades", "user_id");
  }
}
