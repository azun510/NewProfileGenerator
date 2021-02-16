const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('github', () => {
    const testGit = "TestAccount";
    const employee = new Engineer('Alec', 1, 'Alec@Alec.Alec', testGit);
    expect(employee.github).toBe(testGit);
});

test('returns "engineer"', () => {
    const testRole = "Engineer";
    const employee = new Engineer('Alec', 1, 'Alec@Alec.Alec', "githubguy");
    expect(employee.getRole()).toBe(testRole);
});

test('Github username', () => {
    const testUserName = "TestAccount";
    const employee = new Engineer('Alec', 1, 'Alec@Alec.Alec', testUserName);
    expect(employee.getGithub()).toBe(testUserName);
});