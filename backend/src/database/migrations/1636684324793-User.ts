import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1636684324793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "email",
                            type: "varchar"
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "password",
                            type: "varchar"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
