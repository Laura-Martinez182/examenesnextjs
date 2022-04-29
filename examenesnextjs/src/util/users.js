import { Pool } from "pg/lib";
var db1;

if(!db1){
    db1= new Pool({
        host: "localhost",
        user: "postgres",
        password: "basepassword",
        database: "postgres",
        port: "5432"    
    })
}

export default db1;
