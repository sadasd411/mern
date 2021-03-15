var faker = require('faker');
class Company{
    constructor(){
        this.id =faker.random.uuid();
        this.Name = faker.company.companyName();
        this.streetName= faker.address.streetName();
        this.State= faker.address.state();
        this.ZipCode= faker.address.zipCode();
        this.Country= faker.address.country();
    }
}
module.exports = Company;