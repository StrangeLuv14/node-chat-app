const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Shannon',
			room: 'Node course'
		},{
			id: '2',
			name: 'Mike',
			room: 'React course'
		},{
			id: '3',
			name: 'Jen',
			room: 'Node course'
		}]
	})

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Shannon',
			room: 'The Office Fans'
		};
		users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);

	});

	it('should return names for node course', () => {
		var userList = users.getUserList('Node course');
		expect(userList).toEqual(['Shannon', 'Jen']);
	});

	it('should return names for react course', () => {
		var userList = users.getUserList('React course');
		expect(userList).toEqual(['Mike']);
	});

	it('should remove a user', () => {
		var id = '1';
		var removedUser = users.removeUser(id);
		expect(removedUser.name).toBe('Shannon');
		expect(removedUser.room).toBe('Node course');
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var id = '4';
		var removedUser = users.removeUser(id);
		expect(removedUser).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var id = '2';
		var user = users.getUser(id);
		expect(user.name).toBe('Mike');
		expect(user.room).toBe('React course');
	});
	//
	// it('should not find user', () => {
	//
	// });
});
