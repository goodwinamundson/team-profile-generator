// manager constructor 
const Manager = require('../lib/Manager');

  
test('create Manager object', () => {
    const manager = new Manager('Goodwin', 1, 'goodwinamundson@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('test to get role of employee', () => {
    const manager = new Manager('Goodwin', 1, 'goodwinamundson@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 

