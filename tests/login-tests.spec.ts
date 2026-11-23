import  {test,Page, expect} from '@playwright/test';
import {LoginPageSteps} from '../page-objects/page-steps/login-page-steps';
import data from '../testdata/ui/login.json';


let loginPageSteps: LoginPageSteps;

test.describe('Login Tests', () => {

    test.beforeEach(async ({page}) => {
        loginPageSteps = new LoginPageSteps(page);
    });

    //test case 1 : Verify Login Page is displayed
    test('Verify Login Page is displayed', async ({page}) => {
        const testData= data["Verify valid login"];
        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyLoginPageIsDisplayed(testData.title);       
    });

    //test case 2 : Verify Username | Username should be entered successfully
    test(" Username should be entered successfully", async ({page}) => {
        const testData= data["Verify valid login"];
        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyUsernameField(testData.username);
    })

    // test case 3 : Verify Password | Password should be entered successfully and masked
    test("Password should be entered successfully and masked", async ({page})=>{
         const testData= data["Verify valid login"];

        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyPasswordField(testData.password);
    })

    // test case 4 : Login With Valid Credentials
    test("Login With Valid Credentials", async ({page})=>{
        const testData= data["Verify valid login"];
        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyUsernameField(testData.username);
        await loginPageSteps.verifyPasswordField(testData.password);
        await loginPageSteps.clickLoginButton();
        await loginPageSteps.verifySuccessfulLogin();
    })

    // test case 5 : Login With Invalid Username
    test("Login With Invalid Username", async ({page})=>{
        const testData1= data["Verify invalid login"];
          const testData2= data["Verify valid login"];
        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyUsernameField(testData1.username);
        await loginPageSteps.verifyPasswordField(testData2.password);
        await loginPageSteps.clickLoginButton();   
       
    })

        // test case 6 : Login With Invalid Password
    test("Login With Invalid Password", async ({page})=>{
        const testData1= data["Verify invalid login"];
          const testData2= data["Verify valid login"];
        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyUsernameField(testData2.username);
        await loginPageSteps.verifyPasswordField(testData1.password);
        await loginPageSteps.clickLoginButton();   
        

    })


        // test case 7 : Login With Empty username Credentials
    test("Login With username Empty Credentials", async ({page})=>{
         const testData= data["Verify valid login"];

        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyPasswordField(testData.password);
        await loginPageSteps.clickLoginButton();
        await loginPageSteps.verifyRequiredFieldErrorMessage();

    })

    
        // test case 8 : Login With Empty Password Credentials
    test("Login With Password Empty Credentials", async ({page})=>{
         const testData= data["Verify valid login"];

        await loginPageSteps.launchApplication();
        await loginPageSteps.verifyUsernameField(testData.username);
        await loginPageSteps.clickLoginButton();
        await loginPageSteps.verifyRequiredFieldErrorMessage();

    })

    // test case 9 : Verify Forgot Password Link
    test("Verify Forgot Password Link", async ({page})=>{
        const testData= data["Verify valid login"]; 
         await loginPageSteps.launchApplication();
         await loginPageSteps.verifyForgetPasswordLink();
    })
})
