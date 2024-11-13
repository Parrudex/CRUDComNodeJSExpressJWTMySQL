import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1731098412198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isUnique: true,
                        isNullable: false,
                        unsigned: true,
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        length: '12',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'full_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'birthday',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'address_street',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'address_number',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'address_complement',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'address_neighborhood',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'address_city',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'address_state',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'address_cep',
                        type: 'varchar',
                        length: '12',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                        length: '12',
                        isNullable: false,
                        default: '"undefined"',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'user_used_to_created',
                        type: 'varchar',
                        length: '20',
                        isNullable: false,
                    },
                    {
                        name: 'update_at',
                        type: 'timestamp',
                        isNullable: true,
                        default: 'NULL',
                    },
                    {
                        name: 'user_used_to_updated',
                        type: 'varchar',
                        length: '20',
                        isNullable: true,
                        default: '0',
                    },
                    {
                        name: 'removed_at',
                        type: 'timestamp',
                        isNullable: true,
                        default: 'NULL',
                    },
                    {
                        name: 'user_used_to_removed',
                        type: 'varchar',
                        length: '20',
                        isNullable: true,
                        default: '0',
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
