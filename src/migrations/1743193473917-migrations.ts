import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey, } from 'typeorm';
//import { Unit } from '../recipe/dto/recipe.dto';

export class Migrations1743193473917 implements MigrationInterface {
    //two methods
    //the up method is used for setting a new state of a schema
    //we can add update or remove columns or tables here
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              //@Entity({name:'recipe'})
              name:'recipe',
              columns:[
                  {
                      name:'id',
                      type:'varchar',
                      isPrimary:true,
                      isGenerated: true,
                      generationStrategy: 'uuid',
                      isNullable:false,
                  },
                  {
                      name:'description',
                      type:'varchar',
                      isNullable:true,
                  },
              ]
          }),
        );
        await queryRunner.createTable(
          new Table({
              name:'ingredient',
              columns:[
                  {
                      name:'id',
                      type:'varchar',
                      isPrimary:true,
                      isGenerated: true,
                      generationStrategy: 'uuid',
                      isNullable:false,
                  },
                  {
                      name:'name',
                      type:'varchar',
                      isNullable:false,
                  },
                  {
                      name:'unit',
                      type:'varchar',
                      isNullable:false,
                      //enum:[...Object.values(Unit)]
                  },
                  {
                      name:'quantity',
                      type:'integer',
                      isNullable:false,
                  },
              ]
          })
        )

        await queryRunner.addColumn('ingredient',new TableColumn({
            name:'recipeId',
            type:'varchar',
        }),
        );

        await queryRunner.createForeignKey('ingredient',new TableForeignKey({
            columnNames:['recipeId'],
            referencedColumnNames:['id'],
            referencedTableName:'recipe',
            onDelete:'CASCADE',

        }))
    }

    //restore old schema
    // the down method is for reverting migrations
    // there we have to add instructions of how to restore the old state of the database schema
    public async down(queryRunner: QueryRunner): Promise<void> {
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

    }


    //both of the methods have access to an instanceof query runner
    //it's a type RM class responsible for runnning queries
    // in general there are two approaches to migrations in type RM
    //we can type plane SQL queries or use type migrations API
    //in this video i will show the second approach
}
