import { MigrationInterface, QueryRunner, Table,TableColumn,TableForeignKey, TableIndex } from 'typeorm';

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

        await queryRunner.createIndex(
          'users',
          new TableIndex({
              name:'IDX_USERS_ID',
              columnNames:['id']
          }),
        )
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

        await queryRunner.createIndex(
          'user_preference',
          new TableIndex({
              name:'IDX_PREFERENCE_ID',
              columnNames:['id']
          }),
        )
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

        await queryRunner.createIndex(
          'user_sessions',
          new TableIndex({
              name:'IDX_USER_SESSIONS',
              columnNames:['id']
          }),
        )

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

        await queryRunner.createIndex(
          'suggestions',
          new TableIndex({
              name:'IDX_SUGGESTIONS_ID',
              columnNames:['id']
          }),
        )
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
          }),
        )

        await queryRunner.createIndex(
          'notifications',
          new TableIndex({
              name:'IDX_NOTIFICATIONS_ID',
              columnNames:['id']
          }),
        )

        {/*
        // Add Column users-user_preference
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
          */}
      {/*
        // Add Column users-user_sessions
        await queryRunner.addColumn(
          'users',
          new TableColumn({
              name:'user_sessions_id',
              type:'varchar',
              isNullable:false,
          })
        )
        await queryRunner.createForeignKey(
          'users',
          new TableForeignKey(
            {
                columnNames:['user_sessions_id'],
                referencedColumnNames:['id'],
                referencedTableName:'user_sessions',
                onDelete:'CASCADE',
                onUpdate:'CASCADE'
            }
          )
        )
      */}
        // Add Column user_preference-users

        await queryRunner.addColumn(
          'user_preference',
          new TableColumn({
              name:'user_id',
              type:'varchar',
              isNullable:false,
          })
        )
        await queryRunner.createForeignKey(
          'user_preference',
          new TableForeignKey({
              columnNames:['user_id'],
              referencedColumnNames:['id'],
              referencedTableName:'users',
              onDelete:'CASCADE',
              onUpdate:'CASCADE'
          }),)


        // Add Column user_sessions-users

        await queryRunner.addColumn(
          'user_sessions',
          new TableColumn({
              name:'user_id',
              type:'varchar',
              isNullable:false,
          })
        )
        await queryRunner.createForeignKey(
          'user_sessions',
          new TableForeignKey(
            {
                columnNames:['user_id'],
                referencedColumnNames:['id'],
                referencedTableName:'users',
                onDelete:'CASCADE',
                onUpdate:'CASCADE'
            }
          )
        )
      // Add Column suggestions-users
        await queryRunner.addColumn(
          'suggestions',
          new TableColumn({
            name:'user_id',
            type:'varchar',
            isNullable:false,
          })
        )
        await queryRunner.createForeignKey(
          'suggestions',
          new TableForeignKey(
            {
              columnNames:['user_id'],
              referencedColumnNames:['id'],
              referencedTableName:'users',
              onDelete:'CASCADE',
              onUpdate:'CASCADE'
            }
          )
        )
      // Add Column notifications-users
      await queryRunner.addColumn(
        'notifications',
        new TableColumn({
          name:'user_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'notifications',
        new TableForeignKey(
          {
            columnNames:['user_id'],
            referencedColumnNames:['id'],
            referencedTableName:'users',
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
          }
        )
      )


    }
    public async down(queryRunner: QueryRunner): Promise<void> {
      {/*
        const table = await queryRunner.getTable('users')
        // @ts-ignore
        const foreignKey=table.foreignKeys.find(
          (fk)=>fk.columnNames.indexOf('user_preference_id')!==-1,
        )
        // @ts-ignore
        await queryRunner.dropForeignKey('users',foreignKey)
        await queryRunner.dropColumn('users','user_preference_id')
        await queryRunner.dropTable('users')
        await queryRunner.dropIndex('user_preference','IDX_PREFERENCE_ID')
        await queryRunner.dropTable('user_preference')
      */}
      // Add Column users-user_sessions
      {/* const tableUsers = await queryRunner.getTable('users')
        // @ts-ignore
        const ForeignKeyUsers=tableUsers.foreignKeys.find(
          (fk)=>fk.columnNames.indexOf('user_sessions_id')!==-1,
        )
        // @ts-ignore
        await queryRunner.dropForeignKey('users',ForeignKeyUsers)
        await queryRunner.dropColumn('users','user_sessions_id')
        await queryRunner.dropTable('users')
        await queryRunner.dropIndex('user_sessions','IDX_USER_SESSIONS')
        await queryRunner.dropTable('user_sessions')
          */}

        const tablePreference = await queryRunner.getTable('user_preference')
        // @ts-ignore
        const foreignKeyPreference=tablePreference.foreignKeys.find(
          (fk)=>fk.columnNames.indexOf('user_id')!==-1,
        )
        // @ts-ignore
        await queryRunner.dropForeignKey('user_preference',foreignKeyPreference)
        await queryRunner.dropColumn('user_preference','user_id')
        await queryRunner.dropTable('user_preference')
        await queryRunner.dropIndex('users','IDX_USERS_ID')
        await queryRunner.dropTable('users')

        // Add Column user_sessions-users

        const tableSessions = await queryRunner.getTable('user_sessions')
        // @ts-ignore
        const ForeignKeySessions=tableSessions.foreignKeys.find(
          (fk)=>fk.columnNames.indexOf('user_id')!==-1,
        )
        // @ts-ignore
        await queryRunner.dropForeignKey('user_sessions',ForeignKeySessions)
        await queryRunner.dropColumn('user_sessions','user_id')
        await queryRunner.dropTable('user_sessions')
        await queryRunner.dropIndex('users','IDX_USERS_ID')
        await queryRunner.dropTable('users')

      // Add Column suggestions-users

      const tableSuggestions = await queryRunner.getTable('suggestions')
      // @ts-ignore
      const ForeignKeySuggestions=tableSuggestions.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('user_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('suggestions',ForeignKeySuggestions)
      await queryRunner.dropColumn('suggestions','user_id')
      await queryRunner.dropTable('suggestions')
      await queryRunner.dropIndex('users','IDX_USERS_ID')
      await queryRunner.dropTable('users')


      // Add Column notifications-users

      const tableNotifications = await queryRunner.getTable('notifications')
      // @ts-ignore
      const ForeignKeyNotifications=tableNotifications.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('user_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('notifications',ForeignKeyNotifications)
      await queryRunner.dropColumn('notifications','user_id')
      await queryRunner.dropTable('notifications')
      await queryRunner.dropIndex('users','IDX_USERS_ID')
      await queryRunner.dropTable('users')

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


