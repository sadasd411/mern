var faker = require('faker');
class User{
    constructor(){
        this.id =faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        
    }
    
}
module.exports = User;