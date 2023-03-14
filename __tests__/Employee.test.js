const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
const employee = new Employee('Joe', '420', 'joe@fakeemail.com');

expect(employee.name).toBe('Joe');
expect(employee.id).toBe('420');
expect(employee.email).toBe('joe@fakeemail.com');
})
