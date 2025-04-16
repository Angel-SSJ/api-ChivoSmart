import { MigrationInterface, QueryRunner, Table,TableColumn,TableForeignKey, TableIndex } from 'typeorm';

export class Migrations1743373783230 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        //---------- TABLES RELATED USERS ----------//

        //CREATE TABLE USERS
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
                  /*
                  {
                    name:'profile_picture',
                    type:'varchar',
                    isNullable:true
                  }*/
              ]
          }),
        );
      //CREATE TABLE USERS-INDEX
        await queryRunner.createIndex(
          'users',
          new TableIndex({
              name:'IDX_USERS_ID',
              columnNames:['id']
          }),
        )
      //CREATE TABLE USER_PREFERENCE
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
      //CREATE TABLE USER_SESSIONS
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
      //CREATE TABLE SUGGESTIONS
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

      //CREATE TABLE NOTIFICATIONS
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

      //---------- RELATIONS BETWEEN TABLES USERS ----------//
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


      //---------- TABLES RELATED OWNCARDS ----------//
      //CREATE TABLE OWNCARDS
      await queryRunner.createTable(
        new Table({
          name: 'own_cards',
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
              name: 'card_number',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'expiration_date',
              type: 'timestamp',
              isNullable: false,

            },
            {
              name: 'cvv',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'amount',
              type: 'varchar',
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

          ]
        }),
      );
      //CREATE TABLE USERS-INDEX
      await queryRunner.createIndex(
        'own_cards',
        new TableIndex({
          name:'IDX_OWN_CARDS_ID',
          columnNames:['id']
        }),
      )
      //CREATE TABLE USEROWNCARDS
      await queryRunner.createTable(
        new Table({
          name: 'user_own_cards',
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
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'status',
              type: 'varchar',
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

          ]
        }),
      );
      //CREATE TABLE USEROWNCARDS-INDE
      await queryRunner.createIndex(
        'user_own_cards',
        new TableIndex({
          name:'IDX_USER_OWN_CARDS_ID',
          columnNames:['id']
        }),
      )

      //CREATE TABLE TYPEOWNCARD
      await queryRunner.createTable(
        new Table({
          name: 'own_card_types',
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
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            /*{
              name: 'card_logo',
              type: 'varchar',
              isNullable: false,
            },*/
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
      );
      //CREATE TABLE USERS-INDEX
      await queryRunner.createIndex(
        'own_card_types',
        new TableIndex({
          name:'IDX_OWN_CARD_TYPES_ID',
          columnNames:['name']
        }),
      )

      //---------- RELATIONS BETWEEN TABLES OWNCARDS ----------//
      // Add Column user_own_cards-own_cards

      await queryRunner.addColumn(
        'user_own_cards',
        new TableColumn({
          name:'own_cards_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'user_own_cards',
        new TableForeignKey({
          columnNames:['own_cards_id'],
          referencedColumnNames:['id'],
          referencedTableName:'own_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      await queryRunner.addColumn(
        'own_cards',
        new TableColumn({
          name:'card_type_name',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'own_cards',
        new TableForeignKey({
          columnNames:['card_type_name'],
          referencedColumnNames:['name'],
          referencedTableName:'own_card_types',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      //---------- RELATIONS BETWEEN TABLES OWNCARDS AND USERS ----------//
      // Add Column user_own_cards-users

      await queryRunner.addColumn(
        'user_own_cards',
        new TableColumn({
          name:'user_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'user_own_cards',
        new TableForeignKey({
          columnNames:['user_id'],
          referencedColumnNames:['id'],
          referencedTableName:'users',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)


      //---------- TABLES RELATED REGISTEREDCARDS ----------//
      //CREATE TABLE OWNCARDS
      await queryRunner.createTable(
        new Table({
          name: 'registered_cards',
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
              name: 'card_number',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'cvv',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'amount',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'expiration_date',
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

          ]
        }),
      );
      //CREATE TABLE REGISTERED_CARDS-INDEX
      await queryRunner.createIndex(
        'registered_cards',
        new TableIndex({
          name:'IDX_REGISTERED_CARDS_ID',
          columnNames:['id']
        }),
      )
      await queryRunner.createTable(
        new Table({
          name: 'user_registered_cards',
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
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'status',
              type: 'varchar',
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

          ]
        }),
      );

      //CREATE TABLE USER_REGISTERED_CARDS-INDEX
      await queryRunner.createIndex(
        'user_registered_cards',
        new TableIndex({
          name:'IDX_USER_REGISTERED_CARDS_ID',
          columnNames:['id']
        }),
      )

      await queryRunner.createTable(
        new Table({
          name: 'registered_card_types',
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
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'registered_card_logo',
              type: 'varchar',
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

          ]
        }),
      );
      //CREATE TABLE TYPES_REGISTERED_CARDS-INDEX
      await queryRunner.createIndex(
        'registered_card_types',
        new TableIndex({
          name:'IDX_REGISTERED_CARDS_TYPES_NAME',
          columnNames:['name']
        }),
      )



      await queryRunner.createTable(
        new Table({
          name: 'banks',
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
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'bank_logo',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'status',
              type: 'varchar',
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

          ]
        }),
      );
      //CREATE TABLE BANKS-INDEX
      await queryRunner.createIndex(
        'banks',
        new TableIndex({
          name:'IDX_BANKS_ID',
          columnNames:['id']
        }),
      )

      //---------- RELATIONS BETWEEN TABLES REGISTERED ----------//
      // Add Column registered_cards-registered_card_types

      await queryRunner.addColumn(
        'registered_cards',
        new TableColumn({
          name:'card_type_name',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'registered_cards',
        new TableForeignKey({
          columnNames:['card_type_name'],
          referencedColumnNames:['name'],
          referencedTableName:'registered_card_types',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column registered_cards-banks

      await queryRunner.addColumn(
        'registered_cards',
        new TableColumn({
          name:'bank_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'registered_cards',
        new TableForeignKey({
          columnNames:['bank_id'],
          referencedColumnNames:['id'],
          referencedTableName:'banks',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column registered_cards-user_registered_cards

      await queryRunner.addColumn(
        'registered_cards',
        new TableColumn({
          name:'user_registered_cards_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'registered_cards',
        new TableForeignKey({
          columnNames:['user_registered_cards_id'],
          referencedColumnNames:['id'],
          referencedTableName:'user_registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)


      // Add Column user_registered_cards-users

      await queryRunner.addColumn(
        'user_registered_cards',
        new TableColumn({
          name:'user_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'user_registered_cards',
        new TableForeignKey({
          columnNames:['user_id'],
          referencedColumnNames:['id'],
          referencedTableName:'users',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column user_registered_cards-registered_cards

      await queryRunner.addColumn(
        'user_registered_cards',
        new TableColumn({
          name:'own_registered_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'user_registered_cards',
        new TableForeignKey({
          columnNames:['own_registered_id'],
          referencedColumnNames:['id'],
          referencedTableName:'registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)


      // Add Column registered_card_types-registered_cards

      await queryRunner.addColumn(
        'registered_card_types',
        new TableColumn({
          name:'registered_card_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'registered_card_types',
        new TableForeignKey({
          columnNames:['registered_card_id'],
          referencedColumnNames:['id'],
          referencedTableName:'registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)


      // Add Column banks-registered_cards

      await queryRunner.addColumn(
        'banks',
        new TableColumn({
          name:'registered_card_id',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'banks',
        new TableForeignKey({
          columnNames:['registered_card_id'],
          referencedColumnNames:['id'],
          referencedTableName:'registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)



      //---------- TABLES RELATED TRANSACTIONS ----------//
      //CREATE TABLE TRANSACTIONS
      await queryRunner.createTable(
        new Table({
          name: 'transactions_cards',
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
              name: 'amount',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'title',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'date',
              type: 'timestamp',
              isNullable: false,

            },
            {
              name: 'status',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'decline_reason',
              type: 'varchar',
              isNullable: false,
            },
          ]
        }),
      );


      //CREATE TABLE TYPETRANSACTIONS
      await queryRunner.createTable(
        new Table({
          name: 'transactions_type',
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
              name: 'name',
              type: 'varchar',
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

          ]
        }),
      );

      //CREATE TABLE TRANSACTIONS_TYPE-INDEX
      await queryRunner.createIndex(
        'transactions_type',
        new TableIndex({
          name:'IDX_TRANSACTION_TYPE_NAME',
          columnNames:['name']
        }),
      )
      //CREATE TABLE CATEGORYTRANSACTIONS
      await queryRunner.createTable(
        new Table({
          name: 'transaction_category',
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
              name: 'name',
              type: 'varchar',
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

          ]
        }),
      );
      //CREATE TABLE TRANSACTIONS_CATEGORY-INDEX
      await queryRunner.createIndex(
        'transaction_category',
        new TableIndex({
          name:'IDX_TRANSACTION_CATEGORY_NAME',
          columnNames:['name']
        }),
      )

      //CREATE TABLE SCHEDULEDTRANSACTION
      await queryRunner.createTable(
        new Table({
          name: 'schedule_transactions',
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
              name: 'amount',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'title',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'status',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'decline_reason',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'limit',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'frequency',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'date',
              type: 'timestamp',
              isNullable: true,

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

          ]
        }),
      );


      //---------- RELATIONS BETWEEN TABLES TRANSACTIONS ----------//
      // Add Column transactions_cards-transactions_type

      await queryRunner.addColumn(
        'transactions_cards',
        new TableColumn({
          name:'type_transaction',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'transactions_cards',
        new TableForeignKey({
          columnNames:['type_transaction'],
          referencedColumnNames:['name'],
          referencedTableName:'transactions_type',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column transactions_cards-transactions_category

      await queryRunner.addColumn(
        'transactions_cards',
        new TableColumn({
          name:'category_transaction',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'transactions_cards',
        new TableForeignKey({
          columnNames:['category_transaction'],
          referencedColumnNames:['name'],
          referencedTableName:'transaction_category',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)



      // Add Column transactions_cards-userOwnCards

      await queryRunner.addColumn(
        'transactions_cards',
        new TableColumn({
          name:'card_own',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'transactions_cards',
        new TableForeignKey({
          columnNames:['card_own'],
          referencedColumnNames:['id'],
          referencedTableName:'user_own_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column transactions_cards-userRegisteredCards
      await queryRunner.addColumn(
        'transactions_cards',
        new TableColumn({
          name:'card_registered',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'transactions_cards',
        new TableForeignKey({
          columnNames:['card_registered'],
          referencedColumnNames:['id'],
          referencedTableName:'user_registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      //-//

      // Add Column transactions_cards-userOwnCards

      await queryRunner.addColumn(
        'transactions_cards',
        new TableColumn({
          name:'destination_own_card',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'transactions_cards',
        new TableForeignKey({
          columnNames:['destination_own_card'],
          referencedColumnNames:['id'],
          referencedTableName:'user_own_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column transactions_cards-userRegisteredCards
      await queryRunner.addColumn(
        'transactions_cards',
        new TableColumn({
          name:'destination_registered_card',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'transactions_cards',
        new TableForeignKey({
          columnNames:['destination_registered_card'],
          referencedColumnNames:['id'],
          referencedTableName:'user_registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)


      //------------------------//
      // Add Column schedule_transactions_cards-transactions_type

      await queryRunner.addColumn(
        'schedule_transactions',
        new TableColumn({
          name:'type_transaction',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'schedule_transactions',
        new TableForeignKey({
          columnNames:['type_transaction'],
          referencedColumnNames:['name'],
          referencedTableName:'transactions_type',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column schedule_transactions-transactions_category

      await queryRunner.addColumn(
        'schedule_transactions',
        new TableColumn({
          name:'category_transaction',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'schedule_transactions',
        new TableForeignKey({
          columnNames:['category_transaction'],
          referencedColumnNames:['name'],
          referencedTableName:'transaction_category',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)


      //-------------------//
      // Add Column schedule_transactions-userOwnCards

      await queryRunner.addColumn(
        'schedule_transactions',
        new TableColumn({
          name:'card_own',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'schedule_transactions',
        new TableForeignKey({
          columnNames:['card_own'],
          referencedColumnNames:['id'],
          referencedTableName:'user_own_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column schedule_transactions-userRegisteredCards
      await queryRunner.addColumn(
        'schedule_transactions',
        new TableColumn({
          name:'card_registered',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'schedule_transactions',
        new TableForeignKey({
          columnNames:['card_registered'],
          referencedColumnNames:['id'],
          referencedTableName:'user_registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      //-//

      // Add Column schedule_transactions-userOwnCards

      await queryRunner.addColumn(
        'schedule_transactions',
        new TableColumn({
          name:'destination_own_card',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'schedule_transactions',
        new TableForeignKey({
          columnNames:['destination_own_card'],
          referencedColumnNames:['id'],
          referencedTableName:'user_own_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

      // Add Column schedule_transactions-userRegisteredCards
      await queryRunner.addColumn(
        'schedule_transactions',
        new TableColumn({
          name:'destination_registered_card',
          type:'varchar',
          isNullable:false,
        })
      )
      await queryRunner.createForeignKey(
        'schedule_transactions',
        new TableForeignKey({
          columnNames:['destination_registered_card'],
          referencedColumnNames:['id'],
          referencedTableName:'user_registered_cards',
          onDelete:'CASCADE',
          onUpdate:'CASCADE'
        }),)

    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        //---------- RELATIONS BETWEEN TABLES USERS ----------//
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

      //---------- RELATIONS BETWEEN TABLES OWNCARDS-USERS ----------//
      // Add Column user_own_cards-users

      const tableUserOwnCards = await queryRunner.getTable('user_own_cards')
      // @ts-ignore
      const ForeignKeyUserOwnCards=tableUserOwnCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('own_cards_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('user_own_cards',ForeignKeyUserOwnCards)
      await queryRunner.dropColumn('user_own_cards','own_cards_id')
      await queryRunner.dropTable('user_own_cards')
      await queryRunner.dropIndex('own_cards','IDX_OWN_CARDS_ID')
      await queryRunner.dropTable('own_cards')

      // Add Column user_own_cards-own_cards

      const tableUserOwnCardsToUsers = await queryRunner.getTable('user_own_cards')
      // @ts-ignore
      const ForeignKeyUserOwnCardsToUsers=tableUserOwnCardsToUsers.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('user_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('user_own_cards',ForeignKeyUserOwnCardsToUsers)
      await queryRunner.dropColumn('user_own_cards','user_id')
      await queryRunner.dropTable('user_own_cards')
      await queryRunner.dropIndex('users','IDX_USERS_ID')
      await queryRunner.dropTable('users')

      // Add Column own_cards-own_card_types

      const tableUserOwnCardsToCardTypes = await queryRunner.getTable('own_cards')
      // @ts-ignore
      const ForeignKeyUserOwnCardsToCardTypes=tableUserOwnCardsToCardTypes.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('card_type_name')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('own_cards',ForeignKeyUserOwnCardsToCardTypes)
      await queryRunner.dropColumn('own_cards','card_type_name')
      await queryRunner.dropTable('own_cards')
      await queryRunner.dropIndex('own_card_types','IDX_OWN_CARD_TYPES_ID')
      await queryRunner.dropTable('own_card_types')


      //---------- RELATIONS BETWEEN TABLES REGISTEREDCARDS ----------//
      // Add Column registered_cards-registered_card_types

      const tableRegisteredCards = await queryRunner.getTable('registered_cards')
      // @ts-ignore
      const ForeignKeyRegisteredCards=tableRegisteredCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('card_type_name')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('registered_cards',ForeignKeyRegisteredCards)
      await queryRunner.dropColumn('registered_cards','card_type_name')
      await queryRunner.dropTable('registered_cards')
      await queryRunner.dropIndex('registered_card_types','IDX_REGISTERED_CARDS_TYPES_NAME')
      await queryRunner.dropTable('registered_card_types')


      // Add Column registered_cards-banks
      const tableRegisteredCardsToBanks = await queryRunner.getTable('registered_cards')
      // @ts-ignore
      const ForeignKeyRegisteredCardsToBanks=tableRegisteredCardsToBanks.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('bank_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('registered_cards',ForeignKeyRegisteredCardsToBanks)
      await queryRunner.dropColumn('registered_cards','bank_id')
      await queryRunner.dropTable('registered_cards')
      await queryRunner.dropIndex('banks','IDX_BANKS_ID')
      await queryRunner.dropTable('banks')

      // Add Column registered_cards-user_registered_cards

      const tableRegisteredCardsToUserRegisteredCards = await queryRunner.getTable('registered_cards')
      // @ts-ignore
      const ForeignKeyRegisteredCardsToUserRegisteredCards=tableRegisteredCardsToUserRegisteredCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('user_registered_cards_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('registered_cards',ForeignKeyRegisteredCardsToUserRegisteredCards)
      await queryRunner.dropColumn('registered_cards','user_registered_cards_id')
      await queryRunner.dropTable('registered_cards')
      await queryRunner.dropIndex('user_registered_cards','IDX_USER_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('user_registered_cards')



      // Add Column user_registered_cards-users

      const tableUserRegisteredCardsToUsers = await queryRunner.getTable('user_registered_cards')
      // @ts-ignore
      const ForeignKeyUserRegisteredCardsToUsers=tableUserRegisteredCardsToUsers.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('user_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('user_registered_cards',ForeignKeyUserRegisteredCardsToUsers)
      await queryRunner.dropColumn('user_registered_cards','user_id')
      await queryRunner.dropTable('user_registered_cards')
      await queryRunner.dropIndex('users','IDX_USERS_ID')
      await queryRunner.dropTable('users')


      // Add Column user_registered_cards-registered_cards
      const tableUserRegisteredCardsToRegisteredCards = await queryRunner.getTable('user_registered_cards')
      // @ts-ignore
      const ForeignKeyUserRegisteredCardsToRegisteredCards=tableUserRegisteredCardsToRegisteredCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('own_registered_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('user_registered_cards',ForeignKeyUserRegisteredCardsToRegisteredCards)
      await queryRunner.dropColumn('user_registered_cards','own_registered_id')
      await queryRunner.dropTable('user_registered_cards')
      await queryRunner.dropIndex('registered_cards','IDX_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('registered_cards')

      // Add Column registered_card_types-registered_cards
      const tableRegisteredCardTypesToRegisteredCards = await queryRunner.getTable('registered_card_types')
      // @ts-ignore
      const ForeignKeyRegisteredCardTypesToRegisteredCards=tableRegisteredCardTypesToRegisteredCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('registered_card_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('registered_card_types',ForeignKeyRegisteredCardTypesToRegisteredCards)
      await queryRunner.dropColumn('registered_card_types','registered_card_id')
      await queryRunner.dropTable('registered_card_types')
      await queryRunner.dropIndex('registered_cards','IDX_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('registered_cards')


      // Add Column banks-registered_cards
      const tableBanksToRegisteredCards = await queryRunner.getTable('banks')
      // @ts-ignore
      const ForeignKeyBanksToRegisteredCards=tableBanksToRegisteredCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('registered_card_id')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('banks',ForeignKeyBanksToRegisteredCards)
      await queryRunner.dropColumn('banks','registered_card_id')
      await queryRunner.dropTable('banks')
      await queryRunner.dropIndex('registered_cards','IDX_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('registered_cards')




      //---------- RELATIONS BETWEEN TABLES TRANSACTIONS ----------//
      // Add Column schedule_transactions-transactions-type

      const tableScheduleTransactionsToTransactionsType = await queryRunner.getTable('schedule_transactions')
      // @ts-ignore
      const ForeignKeyScheduleTransactionsToTransactionsType=tableScheduleTransactionsToTransactionsType.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('type_transaction')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('schedule_transactions',ForeignKeyScheduleTransactionsToTransactionsType)
      await queryRunner.dropColumn('schedule_transactions','type_transaction')
      await queryRunner.dropTable('schedule_transactions')
      await queryRunner.dropIndex('transactions_type','IDX_TRANSACTION_TYPE_NAME')
      await queryRunner.dropTable('transactions_type')

      // Add Column schedule_transactions-transaction-category

      const tableScheduleTransactionsToTransactionsCategory = await queryRunner.getTable('schedule_transactions')
      // @ts-ignore
      const ForeignKeyScheduleTransactionsToTransactionsCategory=tableScheduleTransactionsToTransactionsCategory.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('category_transaction')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('schedule_transactions',ForeignKeyScheduleTransactionsToTransactionsCategory)
      await queryRunner.dropColumn('schedule_transactions','category_transaction')
      await queryRunner.dropTable('schedule_transactions')
      await queryRunner.dropIndex('transactions_category','IDX_TRANSACTION_CATEGORY_NAME')
      await queryRunner.dropTable('transactions_category')


      //--------------------------------------//
      // Add Column schedule_transactions-user_registered_cards

      const tableScheduleTransactionsToUserRegisteredCards = await queryRunner.getTable('schedule_transactions')
      // @ts-ignore
      const ForeignKeyScheduleTransactionsToUserRegisteredCards=tableScheduleTransactionsToUserRegisteredCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('card_registered')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('schedule_transactions',ForeignKeyScheduleTransactionsToUserRegisteredCards)
      await queryRunner.dropColumn('schedule_transactions','card_registered')
      await queryRunner.dropTable('schedule_transactions')
      await queryRunner.dropIndex('user_registered_cards','IDX_USER_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('user_registered_cards')

      // Add Column schedule_transactions-user_own_cards

      const tableScheduleTransactionsToUserOwnCards = await queryRunner.getTable('schedule_transactions')
      // @ts-ignore
      const ForeignKeyScheduleTransactionsToUserOwnCards=tableScheduleTransactionsToUserOwnCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('card_own')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('schedule_transactions',ForeignKeyScheduleTransactionsToUserOwnCards)
      await queryRunner.dropColumn('schedule_transactions','card_own')
      await queryRunner.dropTable('schedule_transactions')
      await queryRunner.dropIndex('user_own_cards','IDX_USER_OWN_CARDS_ID')
      await queryRunner.dropTable('user_own_cards')


      //--//
      //--------------------------------------//
      // Add Column schedule_transactions-user_registered_cards

      const tableScheduleTransactionsToUserRegisteredCardsDestination = await queryRunner.getTable('schedule_transactions')
      // @ts-ignore
      const ForeignKeyScheduleTransactionsToUserRegisteredCardsDestination=tableScheduleTransactionsToUserRegisteredCardsDestination.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('destination_registered_card')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('schedule_transactions',ForeignKeyScheduleTransactionsToUserRegisteredCardsDestination)
      await queryRunner.dropColumn('schedule_transactions','destination_registered_card')
      await queryRunner.dropTable('schedule_transactions')
      await queryRunner.dropIndex('user_registered_cards','IDX_USER_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('user_registered_cards')

      // Add Column schedule_transactions-user_own_cards

      const tableScheduleTransactionsToUserOwnCardsDestination = await queryRunner.getTable('schedule_transactions')
      // @ts-ignore
      const ForeignKeyScheduleTransactionsToUserOwnCardsDestination=tableScheduleTransactionsToUserOwnCardsDestination.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('destination_own_card')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('schedule_transactions',ForeignKeyScheduleTransactionsToUserOwnCardsDestination)
      await queryRunner.dropColumn('schedule_transactions','destination_own_card')
      await queryRunner.dropTable('schedule_transactions')
      await queryRunner.dropIndex('user_own_cards','IDX_USER_OWN_CARDS_ID')
      await queryRunner.dropTable('user_own_cards')

      //---TRANSACTIONSCARDS--//
      // Add Column transactions_cards-transactions-type

      const tableTransactionsCardsToTransactionsType = await queryRunner.getTable('transactions_cards')
      // @ts-ignore
      const ForeignKeyTransactionsCardsToTransactionsType=tableTransactionsCardsToTransactionsType.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('type_transaction')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('transactions_cards',ForeignKeyTransactionsCardsToTransactionsType)
      await queryRunner.dropColumn('transactions_cards','type_transaction')
      await queryRunner.dropTable('transactions_cards')
      await queryRunner.dropIndex('transactions_type','IDX_TRANSACTION_TYPE_NAME')
      await queryRunner.dropTable('transactions_type')

      // Add Column transactions_cards-transaction-category

      const tableTransactionsCardsToTransactionsCategory = await queryRunner.getTable('transactions_cards')
      // @ts-ignore
      const ForeignKeyTransactionsCardsToTransactionsCategory=tableTransactionsCardsToTransactionsCategory.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('category_transaction')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('transactions_cards',ForeignKeyTransactionsCardsToTransactionsCategory)
      await queryRunner.dropColumn('transactions_cards','category_transaction')
      await queryRunner.dropTable('transactions_cards')
      await queryRunner.dropIndex('transactions_category','IDX_TRANSACTION_CATEGORY_NAME')
      await queryRunner.dropTable('transactions_category')


      //--------------------------------------//
      // Add Column transactions_cards-user_registered_cards

      const tableTransactionsCardsToUserRegisteredCards = await queryRunner.getTable('transactions_cards')
      // @ts-ignore
      const ForeignKeyTransactionsCardsToUserRegisteredCards=tableTransactionsCardsToUserRegisteredCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('card_registered')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('transactions_cards',ForeignKeyTransactionsCardsToUserRegisteredCards)
      await queryRunner.dropColumn('transactions_cards','card_registered')
      await queryRunner.dropTable('transactions_cards')
      await queryRunner.dropIndex('user_registered_cards','IDX_USER_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('user_registered_cards')

      // Add Column transactions_cards-user_own_cards

      const tableTransactionsCardsToUserOwnCards = await queryRunner.getTable('transactions_cards')
      // @ts-ignore
      const ForeignKeyTransactionsCardsToUserOwnCards=tableTransactionsCardsToUserOwnCards.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('card_own')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('transactions_cards',ForeignKeyTransactionsCardsToUserOwnCards)
      await queryRunner.dropColumn('transactions_cards','card_own')
      await queryRunner.dropTable('transactions_cards')
      await queryRunner.dropIndex('user_own_cards','IDX_USER_OWN_CARDS_ID')
      await queryRunner.dropTable('user_own_cards')


      //--//
      //--------------------------------------//
      // Add Column transactions_cards-user_registered_cards

      const tableTransactionsCardsToUserRegisteredCardsDestination = await queryRunner.getTable('transactions_cards')
      // @ts-ignore
      const ForeignKeyTransactionsCardsToUserRegisteredCardsDestination=tableTransactionsCardsToUserRegisteredCardsDestination.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('destination_registered_card')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('transactions_cards',ForeignKeyTransactionsCardsToUserRegisteredCardsDestination)
      await queryRunner.dropColumn('transactions_cards','destination_registered_card')
      await queryRunner.dropTable('transactions_cards')
      await queryRunner.dropIndex('user_registered_cards','IDX_USER_REGISTERED_CARDS_ID')
      await queryRunner.dropTable('user_registered_cards')

      // Add Column transactions_cards-user_own_cards

      const tableTransactionsCardsToUserOwnCardsDestination = await queryRunner.getTable('transactions_cards')
      // @ts-ignore
      const ForeignKeyTransactionsCardsToUserOwnCardsDestination=tableTransactionsCardsToUserOwnCardsDestination.foreignKeys.find(
        (fk)=>fk.columnNames.indexOf('destination_own_card')!==-1,
      )
      // @ts-ignore
      await queryRunner.dropForeignKey('transactions_cards',ForeignKeyTransactionsCardsToUserOwnCardsDestination)
      await queryRunner.dropColumn('transactions_cards','destination_own_card')
      await queryRunner.dropTable('transactions_cards')
      await queryRunner.dropIndex('user_own_cards','IDX_USER_OWN_CARDS_ID')
      await queryRunner.dropTable('user_own_cards')

      /**
      IDX_USER_REGISTERED_CARDS_ID
      IDX_USER_OWN_CARDS_ID
      */


      /**
      IDX_TRANSACTION_CATEGORY_NAME
      IDX_TRANSACTION_TYPE_NAME*/



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


