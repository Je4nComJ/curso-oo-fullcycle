abstract class Logger {

    protected dateFormat(): string {
        const date = new Date();
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    abstract log(message: string): void;
}

class FileLogger extends Logger {
    log(message: string): void {
        console.log(`FileLogger: ${message} ${this.dateFormat}`);
    }
}

class ConsoleLogger extends Logger {
    log(message: string): void {
        console.log(`ConsoleLogger: ${message} ${this.dateFormat}`);
    }
}

class DatabaseLogger extends Logger {
    log(message: string): void {
        console.log(`DatabaseLogger: ${message} ${this.dateFormat}`);
    }
}

class ElasticSearchLogger extends Logger {
    log(message: string): void {
        console.log(`ElasticSearchLogger: ${message} ${this.dateFormat}`);
    }
}