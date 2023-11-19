import { faker } from "@faker-js/faker";
import { IUsers } from "utils/types";

const user: IUsers.IUser[] = [
    {
        id: 1,
        name: faker.person.firstName(),
        password: faker.internet.password(),
        age: 19,
        phoneNum: Number(faker.phone.number()),
        address: {
            city: faker.location.country(),
            town: faker.location.city()
        },
        creditCard: {
            number: Number(faker.finance.creditCardNumber()),
            expireDate: Number(faker.git.commitDate()),
            cvc: Number(faker.finance.creditCardCVV()),
        }
    },
    {
        id: 2,
        name: faker.person.firstName(),
        password: faker.internet.password(),
        age: 19,
        phoneNum: Number(faker.phone.number()),
        address: {
            city: faker.location.country(),
            town: faker.location.city()
        },
        creditCard: {
            number: Number(faker.finance.creditCardNumber()),
            expireDate: Number(faker.git.commitDate()),
            cvc: Number(faker.finance.creditCardCVV()),
        }
    }
]