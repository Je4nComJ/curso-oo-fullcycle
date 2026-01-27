//Bad code (KISS)
// class User {
//     constructor(
//         public age: number,
//     ) {}

//     public isAccessAllowed(): boolean {
//         const minAge = 18;
//         const maxAge = 65;

//         let isValid = false;
//         if (this.age >= minAge && this.age <= maxAge) {
//             isValid = true;
//         }

//         return isValid;
//     }
// }

class User {
    constructor(
        public age: number,
    ) {}

    public isAccessAllowed(): boolean {
        return this.age >= 18 && this.age <= 65;
    }
}
