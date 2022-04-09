import {Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarUsuarios1649338770351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable:true
                    },
                    {
                        name: 'nome',
                        type: 'string',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true
                    }
                ]       
            })
        )
    }
    
     

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
