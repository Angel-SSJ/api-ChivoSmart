create table banks
(
    id                 varchar(36)                         not null
        primary key,
    name               varchar(255)                        not null,
    bank_logo          varchar(255)                        not null,
    status             varchar(255)                        not null,
    created_at         timestamp default CURRENT_TIMESTAMP not null,
    deleted_at         timestamp                           null,
    updated_at         timestamp                           null,
    registered_card_id varchar(255)                        not null
);

create index IDX_BANKS_ID
    on banks (id);

create table migrations
(
    id        int auto_increment
        primary key,
    timestamp bigint       not null,
    name      varchar(255) not null
);

create table own_card_types
(
    id         varchar(36)                         not null
        primary key,
    name       varchar(255)                        not null,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    deleted_at timestamp                           null,
    updated_at timestamp                           null
);

create index IDX_OWN_CARD_TYPES_ID
    on own_card_types (name);

create table own_cards
(
    id              varchar(36)                         not null
        primary key,
    card_number     varchar(255)                        not null,
    expiration_date timestamp                           not null,
    cvv             varchar(255)                        not null,
    amount          varchar(255)                        not null,
    created_at      timestamp default CURRENT_TIMESTAMP not null,
    deleted_at      timestamp                           null,
    updated_at      timestamp                           null,
    card_type_name  varchar(255)                        not null,
    constraint FK_d6756ab65c44b925c263beb9984
        foreign key (card_type_name) references own_card_types (name)
            on update cascade on delete cascade
);

create index IDX_OWN_CARDS_ID
    on own_cards (id);

create table registered_card_types
(
    id                   varchar(36)                         not null
        primary key,
    name                 varchar(255)                        not null,
    registered_card_logo varchar(255)                        not null,
    created_at           timestamp default CURRENT_TIMESTAMP not null,
    deleted_at           timestamp                           null,
    updated_at           timestamp                           null,
    registered_card_id   varchar(255)                        not null
);

create index IDX_REGISTERED_CARDS_TYPES_NAME
    on registered_card_types (name);

create table registered_cards
(
    id                       varchar(36)                         not null
        primary key,
    card_number              varchar(255)                        not null,
    cvv                      varchar(255)                        not null,
    amount                   varchar(255)                        not null,
    expiration_date          timestamp                           not null,
    created_at               timestamp default CURRENT_TIMESTAMP not null,
    deleted_at               timestamp                           null,
    updated_at               timestamp                           null,
    card_type_name           varchar(255)                        not null,
    bank_id                  varchar(255)                        not null,
    user_registered_cards_id varchar(255)                        not null,
    constraint FK_7f2f1a6794d805836bf20c2d89d
        foreign key (bank_id) references banks (id)
            on update cascade on delete cascade,
    constraint FK_f78be04094399ed5e69b715a062
        foreign key (card_type_name) references registered_card_types (name)
            on update cascade on delete cascade
);

alter table banks
    add constraint FK_48900fbd951ae57b232b6ddd370
        foreign key (registered_card_id) references registered_cards (id)
            on update cascade on delete cascade;

alter table registered_card_types
    add constraint FK_ec935c7311cff7f9c6a6ef3df65
        foreign key (registered_card_id) references registered_cards (id)
            on update cascade on delete cascade;

create index IDX_REGISTERED_CARDS_ID
    on registered_cards (id);

create table transaction_category
(
    id         varchar(36)                         not null
        primary key,
    name       varchar(255)                        not null,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    deleted_at timestamp                           null,
    updated_at timestamp                           null
);

create index IDX_TRANSACTION_CATEGORY_NAME
    on transaction_category (name);

create table transactions_type
(
    id         varchar(36)                         not null
        primary key,
    name       varchar(255)                        not null,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    deleted_at timestamp                           null,
    updated_at timestamp                           null
);

create index IDX_TRANSACTION_TYPE_NAME
    on transactions_type (name);

create table users
(
    id         varchar(36)                         not null
        primary key,
    first_name varchar(255)                        not null,
    last_name  varchar(255)                        not null,
    email      varchar(255)                        not null,
    password   varchar(255)                        null,
    birthday   timestamp                           not null,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    deleted_at timestamp                           null,
    updated_at timestamp                           null,
    fcm_token  varchar(255)                        not null
);

create table notifications
(
    id          varchar(36)                         not null
        primary key,
    title       varchar(255)                        not null,
    message     varchar(255)                        not null,
    description varchar(255)                        not null,
    data        json                                not null,
    created_at  timestamp default CURRENT_TIMESTAMP not null,
    deleted_at  timestamp                           null,
    updated_at  timestamp                           null,
    user_id     varchar(255)                        not null,
    constraint FK_9a8a82462cab47c73d25f49261f
        foreign key (user_id) references users (id)
            on update cascade on delete cascade
);

create table suggestions
(
    id              varchar(36)                         not null
        primary key,
    title           varchar(255)                        not null,
    description     varchar(255)                        not null,
    content         json                                not null,
    suggestion_type varchar(255)                        not null,
    frecuency       int                                 not null,
    start_date      timestamp                           null,
    end_date        timestamp                           null,
    created_at      timestamp default CURRENT_TIMESTAMP not null,
    deleted_at      timestamp                           null,
    updated_at      timestamp                           null,
    user_id         varchar(255)                        not null,
    constraint FK_d5f8b29a35d481f2c4200dae9e8
        foreign key (user_id) references users (id)
            on update cascade on delete cascade
);

create table user_own_cards
(
    id           varchar(36)                         not null
        primary key,
    name         varchar(255)                        not null,
    status       varchar(255)                        not null,
    created_at   timestamp default CURRENT_TIMESTAMP not null,
    deleted_at   timestamp                           null,
    updated_at   timestamp                           null,
    own_cards_id varchar(255)                        not null,
    user_id      varchar(255)                        not null,
    constraint FK_78c156363b2de3640498baff41d
        foreign key (own_cards_id) references own_cards (id)
            on update cascade on delete cascade,
    constraint FK_912366a2be0f0b2091621e49b5c
        foreign key (user_id) references users (id)
            on update cascade on delete cascade
);

create index IDX_USER_OWN_CARDS_ID
    on user_own_cards (id);

create table user_preference
(
    id                   varchar(36)                         not null
        primary key,
    theme                varchar(255)                        not null,
    language             varchar(255)                        not null,
    suggestion_frequency int                                 null,
    created_at           timestamp default CURRENT_TIMESTAMP not null,
    deleted_at           timestamp                           null,
    updated_at           timestamp                           null,
    user_id              varchar(255)                        not null,
    constraint FK_34ace2da98735b1811eb2b9662f
        foreign key (user_id) references users (id)
            on update cascade on delete cascade
);

create table user_registered_cards
(
    id                varchar(36)                         not null
        primary key,
    name              varchar(255)                        not null,
    status            varchar(255)                        not null,
    created_at        timestamp default CURRENT_TIMESTAMP not null,
    deleted_at        timestamp                           null,
    updated_at        timestamp                           null,
    user_id           varchar(255)                        not null,
    own_registered_id varchar(255)                        not null,
    constraint FK_22864e759f139592cab769f6e3d
        foreign key (own_registered_id) references registered_cards (id)
            on update cascade on delete cascade,
    constraint FK_e7a34e6c56a3ea0e578b8f03a92
        foreign key (user_id) references users (id)
            on update cascade on delete cascade
);

alter table registered_cards
    add constraint FK_271774bf8f59015581826245266
        foreign key (user_registered_cards_id) references user_registered_cards (id)
            on update cascade on delete cascade;

create table schedule_transactions
(
    id                          varchar(36)  not null
        primary key,
    amount                      varchar(255) not null,
    title                       varchar(255) not null,
    description                 varchar(255) not null,
    status                      varchar(255) not null,
    decline_reason              varchar(255) not null,
    `limit`                     varchar(255) not null,
    frequency                   varchar(255) not null,
    date                        timestamp    null,
    start_date                  timestamp    null,
    end_date                    timestamp    null,
    type_transaction            varchar(255) not null,
    category_transaction        varchar(255) not null,
    card_own                    varchar(255) not null,
    card_registered             varchar(255) not null,
    destination_own_card        varchar(255) not null,
    destination_registered_card varchar(255) not null,
    constraint FK_345cae6cd174ffd8ec6e234f79d
        foreign key (category_transaction) references transaction_category (name)
            on update cascade on delete cascade,
    constraint FK_6a1e8efefe51b7f054ae2a456a4
        foreign key (card_own) references user_own_cards (id)
            on update cascade on delete cascade,
    constraint FK_754d2c6e96812f07d650bacb4ac
        foreign key (type_transaction) references transactions_type (name)
            on update cascade on delete cascade,
    constraint FK_a663d68497b60696ec4e3984d28
        foreign key (destination_own_card) references user_own_cards (id)
            on update cascade on delete cascade,
    constraint FK_c3336c81ee8d7ac53d03d49b325
        foreign key (card_registered) references user_registered_cards (id)
            on update cascade on delete cascade,
    constraint FK_d77fd409927201688785a25148a
        foreign key (destination_registered_card) references user_registered_cards (id)
            on update cascade on delete cascade
);

create table transactions_cards
(
    id                          varchar(36)  not null
        primary key,
    amount                      varchar(255) not null,
    title                       varchar(255) not null,
    description                 varchar(255) not null,
    date                        timestamp    not null,
    status                      varchar(255) not null,
    decline_reason              varchar(255) not null,
    type_transaction            varchar(255) not null,
    category_transaction        varchar(255) not null,
    card_own                    varchar(255) not null,
    card_registered             varchar(255) not null,
    destination_own_card        varchar(255) not null,
    destination_registered_card varchar(255) not null,
    constraint FK_513b3791cae5e18229d5e2bdf2b
        foreign key (type_transaction) references transactions_type (name)
            on update cascade on delete cascade,
    constraint FK_74fa4254c9d924eda2c60c868ec
        foreign key (destination_own_card) references user_own_cards (id)
            on update cascade on delete cascade,
    constraint FK_9ca71fd7e2fef1e9367279764e6
        foreign key (category_transaction) references transaction_category (name)
            on update cascade on delete cascade,
    constraint FK_bebb25b585fa8d99743817afcfc
        foreign key (destination_registered_card) references user_registered_cards (id)
            on update cascade on delete cascade,
    constraint FK_d8e92b313c391d2e4e64aacc071
        foreign key (card_own) references user_own_cards (id)
            on update cascade on delete cascade,
    constraint FK_ea419f54295e86941550a6e64df
        foreign key (card_registered) references user_registered_cards (id)
            on update cascade on delete cascade
);

create index IDX_USER_REGISTERED_CARDS_ID
    on user_registered_cards (id);

create table user_sessions
(
    id      varchar(36)  not null
        primary key,
    status  varchar(255) not null,
    device  varchar(255) not null,
    date    timestamp    not null,
    user_id varchar(255) not null,
    constraint FK_e9658e959c490b0a634dfc54783
        foreign key (user_id) references users (id)
            on update cascade on delete cascade
);

create index IDX_USERS_ID
    on users (id);


