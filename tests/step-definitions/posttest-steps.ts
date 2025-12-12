import { test, expect } from '@playwright/test';
import {Given, When, Then } from '@cucumber/cucumber';
import { APIRequestContext } from '@playwright/test';



let request: APIRequestContext;
let response: any;
const baseUrl = 'https://jsonplaceholder.typicode.com';


Given('I create a new data item with userId {int}, the title {string} and body {string}', async function (userId: number, title: string, body: string) {
    const postData = {
        title: title,
        body: body,
        userId: userId,
    };
    const { request: apiRequest } = await import('@playwright/test');
    const context = await apiRequest.newContext();
    response = await context.post(`${baseUrl}/posts`, {
        data: postData,
    });
    console.log('POST request sent with data:', postData);
})

Then('the response status should be {int}', function (statusCode: number) {
    expect(response.status()).toBe(statusCode);
});

Then('the new data item should have the title {string}', async function (expectedTitle: string) {
    const responseData = await response.json();
    expect(responseData.title).toBe(expectedTitle);
});

When('I update the data item with ID {int} to have the title {string}', async function (itemId: number, newTitle: string) {
    const updateData = {
        title: newTitle,
    };
    const { request: apiRequest } = await import('@playwright/test');   
    const context = await apiRequest.newContext();
    response = await context.put(`${baseUrl}/posts/${itemId}`, {
        data: updateData,
    });
    console.log(`PUT request sent to update item ID ${itemId} with data:`, updateData);
});

Then('the updated data item should have the title {string}', async function (expectedTitle: string) {
    const responseData = await response.json();
    expect(responseData.title).toBe(expectedTitle);
}); 




