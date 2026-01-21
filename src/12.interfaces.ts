interface ProcessPaymentInterface {
    readonly taxRate: number;
    startPayment(amount: number): Promise<string>; //ID of the payment
    confirmPayment(paymentId: string): Promise<boolean>;
    cancelPayment(paymentId: string, amount: number): Promise<boolean>;
    getPaymentStatus(paymentId: string): Promise<string>;
}

class PixPayment implements ProcessPaymentInterface {
    readonly taxRate = 1;
    async startPayment(amount: number): Promise<string> {
        return Promise.resolve("pix_payment_id_123");
    }
    confirmPayment(paymentId: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    cancelPayment(paymentId: string, amount: number): Promise<boolean> {
        return Promise.resolve(true);
    }
    getPaymentStatus(paymentId: string): Promise<string> {
        return Promise.resolve("completed");
    }
}

class PagarMePayment implements ProcessPaymentInterface {
    readonly taxRate = 10;
    async startPayment(amount: number): Promise<string> {
        return Promise.resolve("pix_payment_id_111");
    }
    confirmPayment(paymentId: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    cancelPayment(paymentId: string, amount: number): Promise<boolean> {
        return Promise.resolve(true);
    }
    getPaymentStatus(paymentId: string): Promise<string> {
        return Promise.resolve("completed");
    }
}

class MercadoPagoPayment {
    taxRate = 10;
    async startPayment(amount: number): Promise<string> {
        return Promise.resolve("pix_payment_id_111");
    }
    confirmPayment(paymentId: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    cancelPayment(paymentId: string, amount: number): Promise<boolean> {
        return Promise.resolve(true);
    }
    getPaymentStatus(paymentId: string): Promise<string> {
        return Promise.resolve("completed");
    }
}

const processPayment = async(payment : ProcessPaymentInterface) =>{
    const idPayment = await payment.startPayment(100);
    console.log(`ID do pagamento: ${idPayment}`);
    const status = await payment.getPaymentStatus(idPayment);
    console.log(`Status do pagamento: ${status}`);
}

const pixPayment = new PixPayment();
processPayment(pixPayment);

const pagarMePayment = new PagarMePayment();
processPayment(pagarMePayment);
