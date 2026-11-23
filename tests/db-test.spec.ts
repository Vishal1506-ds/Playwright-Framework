import { test, expect } from '@playwright/test';
import { DBCommons } from '../commons/dataBase/db-commons.ts';
import { DBTestSteps } from '../page-objects/page-steps/db-test-steps.ts';
import Query  from '../testdata/database/dbQuery.json';
import data  from '../testdata/database/db.json';

let dbTestSteps: DBTestSteps;

test.describe('Login Tests', () => {

    test.beforeEach(() => {
        dbTestSteps = new DBTestSteps(new DBCommons());
    });

//test case 1 :Verify fetching all customer records from customers table
test('Verify all customer records from MySQL', async () => {
         const query = Query["countOfCustomers"]; 

        await dbTestSteps.allCustomerRecordsCount(query);
});

//test case 2 :Verify customer details using customer ID
test('Verify customer details using customer ID', async () => {

        const query = Query["customerDetailsById"];
        const customerId = data["customerId"];

          await dbTestSteps.customerDetailsById(query, customerId);
});

//test case 3 :Verify customers based on city
test('Verify customers based on city', async () => {

     const query = Query["customersByCity"];
     const city = data["city"];

    await dbTestSteps.customersByCity(query, city);
});

//test case 4 : Verify fetching orders based on order status
test('Verify orders based on order status', async () => {

     const query = Query["ordersByStatus"];
     const status = data["status"];

    await dbTestSteps.ordersByStatus(query, status);
});

//test case 5 : Verify fetching orders with amount greater than ?
test('Verify orders with amount greater than ?', async () => {

     const query = Query["orderAmount"];
     const amount = data["amount"];

    await dbTestSteps.ordersByAmount(query, parseFloat(amount));
});

 // test case 6 : Verify customer and order details using INNER JOIN
    test(' Verify customer and order details using INNER JOIN', async ()=>{

         const query = Query["customerAndOrdersInnerJoin"];

        await dbTestSteps.customerAndOrderDetails(query);

    })

  // test case 7 : Verify fetching all orders for a specific customer using INNER JOIN
   test('Verify fetching all orders for a specific customer using INNER JOIN', async ()=>{

         const query = Query["orderForSpecificCustomer"];
          const customerId = data["customerId"];
        
        await dbTestSteps.orderForSpecficCustomer(query,customerId);

    })  

    // test case 9 :Verify total order amount for each customer using INNER JOIN and SUM
    test('Verify total order amount for each customer using INNER JOIN and SUM', async ()=>{

         const query = Query["sumOfTotalAmount"];
          const customerId = data["customerId"];
        
        await dbTestSteps.sumOfTotalAmount(query,customerId);

    })  

    //test case 10 : Verify fetching customers having Paid orders using INNER JOIN
    test.only('Verify fetching customers having Paid orders using INNER JOIN',async ()=>{

        const query = Query["paidOrders"];
        const status = data["status"];

        await dbTestSteps.customerHavingPaidOrders(query,status);


    })
});