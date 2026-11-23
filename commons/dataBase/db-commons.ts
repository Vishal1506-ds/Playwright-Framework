import mysql, { type RowDataPacket } from 'mysql2/promise';
import config from '../../config/config.json';

export class DBCommons {

    async DBConnection(query: string,values: any[] = []): Promise<RowDataPacket[]> {

        const connection = await mysql.createConnection(config.db);

        try {
            const [rows] = await connection.execute<RowDataPacket[]>(query,values);
            return rows;
        } 
        finally {
            await connection.end();
        }
    }

        async getData(query: string , values: any[] = [])
    {
        const db = new DBCommons();
        const result = await db.DBConnection(query,values);

        return result
    }

    async jsonParse(data: any) {
        const parsedData = JSON.parse(JSON.stringify(data));
        return parsedData;
    }


}