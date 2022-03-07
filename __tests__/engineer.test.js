//Engineer constructor 
const Engineer = require('../lib/Engineer');


test('create engineer object', () => {
    const engineer = new Engineer('Goodwin', 1, 'goodwinamundson@gmail.com', 'goodwinamundson');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('get engineer github username', () => {
    const engineer = new Engineer('Goodwin', 1, 'goodwinamundson@gmail.com', 'goodwinamundson');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

 
test('gets role of employee', () => {
    const engineer = new Engineer('Goodwin', 1, 'goodwinamundson@gmail', 'goodwinamundson');

    expect(engineer.getRole()).toEqual("Engineer");
});