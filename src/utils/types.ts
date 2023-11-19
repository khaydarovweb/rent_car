export namespace ICars {
    export interface ICar {
        id: number; // ✅
        name: string; // ✅
        type: string; // ✅
        info: string; // ✅
        capacity: number; // ✅
        gasoline: string; // ✅
        steering: string; // ✅
        gearbox: string; // ✅
        price: IPrice; // ✅
        isRented: boolean; // ✅
        rate: number; // ✅
        comments: IComments[]; //
        image: string; // ✅
    }

    export interface IPrice  {
        daily: number; // ✅
        weekly: number; // ✅
        monthly: number; // ✅
    }

    export interface IComments  {
        user: string; // ✅
        comment: string; // ✅
    }
}

export namespace IUsers {
    export interface IUser {
        id: number;
        name: string;
        password: string;
        age: number;
        phoneNum: number;
        address: IAdress;
        creditCard: ICreditCard;
    }

    export interface IAdress {
        city: string;
        town: string;
    }

    export interface ICreditCard {
        number: number;
        expireDate: number;
        cvc: number;
    }
}  