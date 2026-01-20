abstract class Payment{
    abstract tax: number;
    constructor(
        public amount: number,
        public date: Date,
        public description: string
    ){}

    abstract calcIof(): number;

    getPaymentInfo(): string{
        return `Payment of $${this.amount} on ${this.date.toDateString()}: ${this.description}`;
    }

    processPayment(): void{
        const newAmount = this.amount + (this.amount * this.tax);
        console.log(`Payment of $${this.amount} -> $${newAmount} (tax ${this.tax}) on ${this.date.toDateString()}: ${this.description}`);
    }
}

class PaymentPix extends Payment{
    tax = 0.01;
    calcIof(): number{
        return this.amount * this.tax;
    }
}
class PaymentCreditCard extends Payment{
    tax = 0.05;
    calcIof(): number{
        return this.amount * this.tax;
    }
}
class PaymentDebitCard extends Payment{
    tax = 0.03;
    calcIof(): number{
        return this.amount * this.tax;
    }
}
class PaymentPayPal extends Payment{
    tax = 0.02;
    calcIof(): number{
        return this.amount * this.tax;
    }
}

const pixPayment = new PaymentPix(100, new Date(), "Pix payment for order #1234");
pixPayment.processPayment();

const paypalPayment = new PaymentPayPal(100, new Date(), "PayPal payment for order #5678");
paypalPayment.processPayment();

const creditCardPayment = new PaymentCreditCard(100, new Date(), "Credit Card payment for order #9101");
creditCardPayment.processPayment();

const debitCardPayment = new PaymentDebitCard(100, new Date(), "Debit Card payment for order #1121");
debitCardPayment.processPayment();


