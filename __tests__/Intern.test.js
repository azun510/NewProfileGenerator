const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testSchool = "UC Berkeley";
  const emp = new Intern("Alec", 1, "Alec@Alec.Alec", testSchool);
  expect(emp.school).toBe(testSchool);
});

test("getRole() returns value 'intern' ", () => {
  const testRole = "Intern";
  const emp = new Intern("Alec", 1, "Alec@Alec.Alec", "UC Berkeley");
  expect(emp.getRole()).toBe(testRole);
});

test("Can get school thru getSchool function", () => {
  const testSchool = "UC Berkeley";
  const emp = new Intern("Alec", 1, "Alec@Alec.Alec", testSchool);
  expect(emp.getSchool()).toBe(testSchool);
});