const { test, expect } = require("@jest/globals");
const Manager = require('../lib/Manager.js');

test("office number", () => {
    const testOfficeNumber = 100;
    const employee = new Manager('Alec', '2', 'Alec@Alec.Alec', testOfficeNumber);
    expect(employee.officeNumber).toBe(testOfficeNumber);
});

test('returns "Manager"', () => {
    const testRole = "Manager";
    const employee = new Manager('Alec', '2', 'Alec@Alec.Alec', 100);
    expect(employee.getRole()).toBe(testRole);
});

test('office number w/ function', () => {
    const testOfficeNumber = 100;
    const employee = new Manager('Alec', '1', 'Alec@Alec.Alec', testOfficeNumber);
    expect(employee.getOffice()).toBe(testOfficeNumber);
});