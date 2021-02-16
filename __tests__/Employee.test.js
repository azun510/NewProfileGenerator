const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Employee Object', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test('set name', () => {
    const name = 'Alec';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('set id', () => {
    const idTest = 200;
    const emp = new Employee('Alec', idTest);
    expect(emp.id).toBe(idTest);
});

test('set email', () => {
    const testEM = "Alec@Alec.Alec";
    const emp = new Employee('Alec', '200', testEM);
    expect(emp.email).toBe(testEM);
});

test('set name w/ getName function', () => {
    const testName = 'Alec';
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
});

test('id w/ getId function', () => {
    const testId = '100';
    const emp = new Employee('Alec', testId);
    expect(emp.getId()).toBe(testId);
});

test('set email w/ getEmail function', () => {
    const testEM = 'Alec@Alec.Alec';
    const emp = new Employee('Alec', '100', testEM);
    expect(emp.getEmail()).toBe(testEM);
});

test(" should return Employee", () => {
    const testValue = "Employee";
    const em = new Employee("Alec", 100, "Alec@Alec.Alec");
    expect(em.getRole()).toBe(testValue);
});