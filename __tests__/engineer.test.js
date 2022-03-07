// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('create engineer object', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github username from getGithub()
test('get engineer github username', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getRole()).toEqual("Engineer");
});