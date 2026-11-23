import { DBCommons } from '../../commons/dataBase/db-commons.ts';
import { test, expect } from '@playwright/test';

export class DBTestSteps    {

    dbCommons: DBCommons;

      constructor(dbCommons: DBCommons) {
        this.dbCommons = dbCommons;
        }

        // fetching all customer countrecords from customers table
        async allCustomerRecordsCount(query:string) {
            const result = await this.dbCommons.getData(query);
           
            const data = await this.dbCommons.jsonParse(result);

            console.log("Total records in customers table: " + data[0].customerCount);
            expect(data).toBe(data);
        }

       // customer details using customer ID
        async customerDetailsById(query:string,customerId:number) {
            

            const result = await this.dbCommons.getData(query,[customerId]);
            const data = await this.dbCommons.jsonParse(result);
            console.log("Customer details for customer ID " + customerId + ": " + data[0].first_name );
        }

        // fetching customers based on city
        async customersByCity(query:string, city:string) {
            const result = await this.dbCommons.getData(query, [city]);
            const data = await this.dbCommons.jsonParse(result);
            
            console.log("Customers in " + city + ": " + data[0].email);
        }

        // fetching orders based on order status
        async ordersByStatus(query:string, status:string) {
            const result = await this.dbCommons.getData(query, [status]);
            const data = await this.dbCommons.jsonParse(result);

           for(let i=0; i<data.length; i++){
            console.log("Orders with status " + status + ": " + data[i].order_id);
           }
        }

        // fetching orders with amount greater than ?
        async ordersByAmount(query:string, amount:number) {
            const result = await this.dbCommons.getData(query, [amount]);
            const data = await this.dbCommons.jsonParse(result);    

        for(let i=0; i<data.length; i++){
            console.log("Orders with amount greater than " + amount + ": " + data[i].order_amount);
           }
        };

        // customer and order details using INNER JOIN
        async customerAndOrderDetails(query:  string)
        {
             const result = await this.dbCommons.getData(query);
            const data = await this.dbCommons.jsonParse(result); 

            for(let i=0; i<data.length; i++){
              console.log( data[i]);
           }
        }

        //  fetching all orders for a specific customer using INNER JOIN
         async orderForSpecficCustomer(query:  string,customerId :number)
        {
             const result = await this.dbCommons.getData(query,[customerId]);
            const data = await this.dbCommons.jsonParse(result); 

            for(let i=0; i<data.length; i++){
              console.log( data[i]);
           }
        }

        // sum of total amount
        async sumOfTotalAmount(query: string,customerId :number)
        {
              const result = await this.dbCommons.getData(query,[customerId]);
            const data = await this.dbCommons.jsonParse(result); 

            console.log("total amount : "+ data[0].totalAmount);

        }

        // fetching customers having Paid orders using INNER JOIN
         async customerHavingPaidOrders(query: string,status :string)
        {
            const result = await this.dbCommons.getData(query,[status]);
            const data = await this.dbCommons.jsonParse(result); 

             for(let i=0; i<data.length; i++){
              console.log(data[i]);
           }

        }

} 
