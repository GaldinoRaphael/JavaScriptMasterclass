//Exerc - 1

// console.log(tableName)
// console.log(tableName)
// console.log(columns)

//Exerc - 2

const columnsObj = {}

const DatabaseError = function(statement, message){
    this.statement = statement;
    this.message = message;
};

const database = 
{   
    tables : { },

    createTable(statement){
        let regExp1 = /(\w*\s){2}(\w+)/
        let regExp2 = /(\w*\s\w*, )+(\w*\s\w*)/
        let tableName = regExp1.exec(statement)[2];
        this.tables[tableName] ={
            "columns": {},
            "data": []
        }
        // let columns = regExp2.exec(statement);
        let columns = statement.match(regExp2)[0].split(", ");
        for (let coluna of columns){
            let separado = coluna.split(" ");
            let indice = separado[0];
            let valor = separado[1];
        
            // Object.assign(columnsObj, {[indice]: valor})
            this.tables[tableName].columns[indice] = valor;
        }
    },
    insert(statement){
        let regExp1 = /insert into (\w*) \((\w*)\, (\w*), (\w*)\) values \((\w*)\, (\w*) (\w*)/ 
        let filtro = regExp1.exec(statement);
        let columnsVector = [filtro[2], filtro[3], filtro[4]];
        let valuesVector = [filtro[5], filtro[6], filtro[7]];
        console.log(columnsVector)
        console.log(valuesVector)

        let tableName = regExp1.exec(statement)[1];

        
        for(let i = 0; i < columnsVector.length;i++){
            Object.assign(row, {
                columnsVector[i] : valuesVector[i]
            })
        }
        
        console.log(row)
    },
    execute(statement){
        if(statement.startsWith("create table")){
            return this.createTable(statement);
        }
        const message = `Syntax error: ${statement}`
        throw new DatabaseError(statement, message); 
    }
}
// try{
//     database.execute("create table author (id number, name string, age number, city string, state string, country string)")
//     console.log(JSON.stringify(database, null, 1));
// }catch(e){
//     console.log(e.message)
// }

database.insert("insert into author (id, name, age) values (1, Douglas Crockford, 62)")
