export class DBConfig  {
    DBName: string = "db_ree";
    tables = [
        {
            t_name: "t_user",
            t_column : [
                {
                    column_name: 'id',
                    column_definition: 'int primary key auto_increment',
                },
                {
                    column_name: 'name',
                    column_definition: 'varchar(20) not null'
                },
                {
                    column_name: 'passwd',
                    column_definition: 'varchar(20) not null'
                }
            ],
        },
        {
            t_name: "t_email",
            t_column : [
                {
                    column_name: 'id',
                    column_definition: 'int primary key auto_increment',
                },
                {
                    column_name: 'name',
                    column_definition: 'varchar(20) not null'
                },
                {
                    column_name: 'owned_by_user_id',
                    column_definition: 'int' // fixme foreign key
                }
            ],
        },
        {
            t_name: "t_content",
            t_column : [
                {
                    column_name: 'id',
                    column_definition: 'int primary key auto_increment',
                },
                {
                    column_name: 'key',
                    column_definition: 'varchar(50) not null'
                },
                {
                    column_name: 'value',
                    column_definition: 'text not null'
                },
                {
                    column_name: 'owned_user',
                    column_definition: 'int', // fix foreign key
                }
            ],
        }
    ]

}

// 用 i8,i16,i24,i32不好么><.烦