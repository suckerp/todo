import mysql = require('mysql')
import { createPool, Pool } from 'mysql'

export type Person = {
    pid: number,
    firstName:string,
    lastName: string
}

export type TodoList = {
    tid: number,
    text: string,
    status: boolean,
    pid: number
}

export type getTable = {
    table: string,
    cols: string,
    wheres: string
}

export type insertIntoTable = {
    table: string,
    mask: string,
    values: string
}


export class Todo {

    private pool:Pool

    constructor(){
        this.pool = createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'todo',
            connectionLimit: 100,
            timezone: 'Z'
        })
    }

    PromiseAnswer<T>(Sql:any){
        return new Promise<T>((resolve,reject)=>{
            this.pool.query(Sql,(error,result)=> {
                if (error)
                    reject(error)
                else
                    resolve(result)
            })
        })
    }

    getTable(getTable:getTable){
        let sql = `select ${getTable.cols} from ${getTable.table}`
        if (getTable.wheres) sql+=`where ${getTable.wheres};`
        else sql+=`;`
        return this.PromiseAnswer(sql)
    }

    insertIntoTable(insertIntoTable:insertIntoTable) {
        let sql = `insert into ${insertIntoTable.table} ${insertIntoTable.mask} values 
        ${insertIntoTable.values}`
        return this.PromiseAnswer(sql)
    }

    deleteFromTodo(getTable:getTable) {
        let sql = `DELETE FROM ${getTable.table} WHERE ${getTable.wheres};`
        return this.PromiseAnswer(sql)
    }
        


/*
    private readonly _connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'todo',
        timezone: 'Z'
    })

    getTodoList(){
        const sqlString = `
            SELECT * FROM todolist 
            JOIN PERSON ON todolist.PID=person.PID`
        return new Promise<any[]>((resolve, reject)=> {
            this._connection.query(sqlString, (error, results:any[]) => {
                if(error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    getTodoListPerson(id:number){
        const sqlString = `
            SELECT * FROM todolist 
            JOIN PERSON ON todolist.PID=person.PID
            WHERE person.PID=?`
        return new Promise<any[]>((resolve, reject)=> {
            this._connection.query(sqlString, id, (error, resutls:any[])=> {
                if(error)
                    reject(error)
                else
                    resolve(resutls)
            })
        })
    }


    setTodoEntry(task:string, pid:number){
        const sqlString = `INSERT INTO todolist (TEXT,STATUS,PID) VALUES ("${task}",false,"${pid}")`
        return new Promise<any[]>((resolve,reject)=> {
            this._connection.query(sqlString, (error, results:any[])=> {
                if (error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    doneTodoEntry(id:number){
        const sqlString = `UPDATE TABLE todolist SET STATUS=true WHERE PID=?`
        return new Promise<any[]>((resolve,reject)=> {
            this._connection.query(sqlString, id, (error, results:any[])=> {
                if (error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    deleteTodoEntry(id:number){
        const sqlString = `DELETE FROM todolist where TID = ?`
        return new Promise<any[]>((resolve, reject)=> {
            this._connection.query(sqlString, id, (error, results:any[]) => {
                if (error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    getPersons(){
        const sqlString = `SELECT * from person`
        return new Promise<any[]>((resolve, reject) => {
            this._connection.query(sqlString, (error, results:any[]) => {
                if (error)
                    reject(error)
                else
                    resolve(results)
            })
        })
    }

    */
}