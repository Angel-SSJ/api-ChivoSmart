import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migrations1743373783230 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'user',
              columns: [
                  {
                      name: 'id',
                      type: 'varchar',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'uuid',
                      isNullable: false,

                  },
                  {
                      name: 'firstName',
                      type: 'varchar',
                      isNullable: true,
                  },
                  {
                      name: 'lastName',
                      type: 'varchar',
                      isNullable: true,
                  },
                  {
                      name: 'email',
                      type: 'varchar',
                      isNullable: true,
                      isUnique: true,
                  },
                  {
                      name: 'password',
                      type: 'varchar',
                      isNullable: true,
                      isUnique: true,
                  },
                  {
                      name: 'birthday',
                      type: 'Date',
                      isNullable: true,

                  },
                  {
                      name: 'created_at',
                      type: 'Date',
                      isNullable: true,
                  },
                  {
                      name: 'deleted_at',
                      type: 'Date',
                      isNullable: true,
                  },
                  {
                      name: 'updated_at',
                      type: 'Date',
                      isNullable: true,
                  },


              ]
          }),
        );

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

    //restore old schema
    // the down method is for reverting migrations
    // there we have to add instructions of how to restore the old state of the database schema
    /*public async down(queryRunner: QueryRunner): Promise<void> {
        const table=await queryRunner.getTable('ingredient');
        //@ts-ignore
        const foreginKey = table.foreignKeys.find(
          (fk)=>fk.columnNames.indexOf('recipeId') !== -1,
        );
        //we have to grab the instance of a foreing key
        if (foreginKey) {
            await queryRunner.dropForeignKey('ingredient',foreginKey);
        }
        await queryRunner.dropColumn('ingredient','recipeId');
        await queryRunner.dropTable('ingredient');
        await  queryRunner.dropTable('recipe');

    }      */


