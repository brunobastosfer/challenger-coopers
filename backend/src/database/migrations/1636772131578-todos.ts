import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class todos1636772131578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "todos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "concluida",
                        type: "boolean",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserTodos",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('todos')
    }

}
