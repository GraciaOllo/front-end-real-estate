import Customer from '../models/Customer';
import Tenant from '../models/Tenant';
import Agent from '../models/Agent';
import Admin from '../models/Admin';

class UserController {
  static createUser(type, userId, name, email, password, extra) {
    switch (type) {
      case 'Customer':
        return new Customer(userId, name, email, password, extra.address);
      case 'Tenant':
        return new Tenant(userId, name, email, password, extra.rentAmount);
      case 'Agent':
        return new Agent(userId, name, email, password, extra.agentId, extra.workDate, extra.address);
      case 'Admin':
        return new Admin(userId, name, email, password, extra.id, extra.contact);
      default:
        throw new Error('Unknown user type');
    }
  }

  static login(user, email, password) {
    if (user.email === email && user.password === password) {
      user.login();
    } else {
      console.log('Login failed');
    }
  }

  static logout(user) {
    user.logout();
  }
}

export default UserController;
