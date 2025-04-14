import { MigrationInterface, QueryRunner, Table,TableColumn,TableForeignKey } from 'typeorm';

export class Migrations1743373783230 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'users',
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
                      name: 'first_name',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'last_name',
                      type: 'varchar',
                      isNullable: false,
                  },
                  {
                      name: 'email',
                      type: 'varchar',
                      isNullable: false,


                  },
                  {
                      name: 'password',
                      type: 'varchar',
                      isNullable: true,
                      isUnique: false,
                  },
                  {
                      name: 'birthday',
                      type: 'timestamp',
                      isNullable: false,

                  },
                  {
                      name: 'created_at',
                      type: 'timestamp',
                      isNullable: false,
                      default:'now()'
                  },
                  {
                      name: 'deleted_at',
                      type: 'timestamp',
                      isNullable: true,
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      isNullable: true,
                  },
                  {
                      name: 'fcm_token',
                      type: 'varchar',
                      isNullable: false,
                  },
              ]
          }),
        );
        await queryRunner.createTable(
          new Table({
              name:'user_preference',
              columns:[
                  {
                      name: 'id',
                      type: 'varchar',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'uuid',
                      isNullable: false,

                  },
                  {
                      name: 'theme',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                    name:'language',
                    type:'varchar',
                    isNullable:false
                  },
                  {
                      name:'suggestion_frequency',
                      type:'int',
                      isNullable:true
                  },
                  {
                      name: 'created_at',
                      type: 'timestamp',
                      isNullable: false,
                      default:'now()'
                  },
                  {
                      name: 'deleted_at',
                      type: 'timestamp',
                      isNullable: true,
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      isNullable: true,
                  },

              ]
          }),)
        await queryRunner.createTable(
          new Table({
              name:'user_sessions',
              columns:[
                  {
                      name: 'id',
                      type: 'varchar',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'uuid',
                      isNullable: false,

                  },
                  {
                      name: 'status',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                      name:'device',
                      type:'varchar',
                      isNullable:false
                  },
                  {
                      name: 'date',
                      type: 'timestamp',
                      isNullable: false,
                  },
              ]
          }),)
        await queryRunner.createTable(
          new Table({
              name:'suggestions',
              columns:[
                  {
                      name: 'id',
                      type: 'varchar',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'uuid',
                      isNullable: false,

                  },
                  {
                      name: 'title',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                      name: 'description',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                      name: 'content',
                      type: 'json',
                      isNullable: false
                  },
                  {
                      name: 'suggestion_type',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                      name: 'frecuency',
                      type: 'int',
                      isNullable: false
                  },
                  {
                      name: 'start_date',
                      type: 'timestamp',
                      isNullable: true,
                  },
                  {
                      name: 'end_date',
                      type: 'timestamp',
                      isNullable: true,
                  },

                  {
                      name: 'created_at',
                      type: 'timestamp',
                      isNullable: false,
                      default:'now()'
                  },
                  {
                      name: 'deleted_at',
                      type: 'timestamp',
                      isNullable: true,
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      isNullable: true,
                  },
              ]
          }),)
        await queryRunner.createTable(
          new Table({
              name:'notifications',
              columns:[
                  {
                      name: 'id',
                      type: 'varchar',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'uuid',
                      isNullable: false,

                  },
                  {
                      name: 'title',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                      name: 'message',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                      name: 'description',
                      type: 'varchar',
                      isNullable: false
                  },
                  {
                      name: 'data',
                      type: 'json',
                      isNullable: false
                  },
                  {
                      name: 'created_at',
                      type: 'timestamp',
                      isNullable: false,
                      default:'now()'
                  },
                  {
                      name: 'deleted_at',
                      type: 'timestamp',
                      isNullable: true,
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      isNullable: true,
                  },
              ]
          }),)

        await queryRunner.addColumn(
          'users',
          new TableColumn({
              name:'user_preference_id',
              type:'varchar',
              isNullable:true,
          }))

        await queryRunner.createForeignKey(
          'users',
          new TableForeignKey({
              columnNames:['user_preference_id'],
              referencedColumnNames:['id'],
              referencedTableName:'user_preference',
              onDelete:'CASCADE',
              onUpdate:'CASCADE'
          }),)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('users')
        // @ts-ignore
        const foreignKey=table.foreignKeys.find(
          (fk)=>fk.columnNames.indexOf('user_preference_id')!==-1,
        )
        // @ts-ignore
        await queryRunner.dropForeignKey('users',foreignKey)
        await queryRunner.dropColumn('users','user_preference_id')
        await queryRunner.dropTable('users')
        await queryRunner.dropIndex('user_preference','IDX_USER_PREFERENCE_NAME')
        await queryRunner.dropTable('user_preference')
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


