import {createClient} from "@clickhouse/client";
import dotenv from "dotenv"

dotenv.config();


async function createClientClickHouse(){
    
    const client = createClient({
        // Configuration.
        
        url:process.env.url,
        username:'default',
        password:process.env.password,
        request_timeout: 0,
        
    
    })
    
    console.log(client);
    return client;
    
}

export default createClientClickHouse;

