//Employee constructor 
const Employee = require('../lib/Employee');

test("creates a new employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test('gets employee name', () => {
    const employee = new Employee('Goodwin', 1, 'goodwinamundson@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee ID', () => {
    const employee = new Employee('Goodwin', 1, 'goodwinamundson@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Goodwin', 1, 'goodwinamundson@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Goodwin', 1, 'goodwinamundson@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 