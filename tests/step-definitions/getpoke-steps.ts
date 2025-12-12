import { test, expect } from '@playwright/test';
import {Given, When, Then } from '@cucumber/cucumber';
import { APIRequestContext } from '@playwright/test';

let request: APIRequestContext;
let response: any;
let pokemonData: any;
const baseUrl = 'https://pokeapi.co/api/v2/';

Given('I request information for the Pokémon {string}', async function (pokemonName: string) {
    const { request: apiRequest } = await import('@playwright/test');
    const context = await apiRequest.newContext();
    response = await context.get(`${baseUrl}pokemon/${pokemonName}`);
    pokemonData = await response.json();

    console.log(`Requested data for Pokémon: ${pokemonName}`);
});

Then('the response status code should be {int}', function (statusCode: number) {
    expect(response.status()).toBe(statusCode);
});

Then('the Pokémon name should be {string}', function (expectedName: string) {
    expect(pokemonData.name).toBe(expectedName);
});

Then('the Pokémon ID should be {int}', function (expectedId: number) {
    expect(pokemonData.id).toBe(expectedId);
});

Then('the Pokémon types should include {string}', function (expectedType: string) {
    const types = pokemonData.types.map((typeInfo: any) => typeInfo.type.name);
    expect(types).toContain(expectedType);
}); 

