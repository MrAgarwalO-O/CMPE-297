import sqlite3

def create_connection(db_file):
    conn = sqlite3.connect(db_file)
    return conn

def create_table(conn):
    sql_create_table = ''' CREATE TABLE IF NOT EXISTS tasks (
                                id integer PRIMARY KEY,
                                name text NOT NULL,
                                priority integer,
                                status_id integer NOT NULL
                            ); '''
    conn.execute(sql_create_table)

def insert_task(conn, task):
    sql_insert_task = ''' INSERT INTO tasks(name, priority, status_id)
                          VALUES(?,?,?) '''
    conn.execute(sql_insert_task, task)
    conn.commit()

if __name__ == '__main__':
    conn = create_connection('test.db')
    create_table(conn)
    task = ('Sample Task', 1, 1)
    insert_task(conn, task)
    conn.close()