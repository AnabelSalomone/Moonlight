export default class LogService {
    static log(...arg: any): void {
        // tslint:disable-next-line:no-console
        console.log(...arg);
    }

    static error(...arg: any): void {
        // tslint:disable-next-line:no-console
        console.error(...arg);
    }
}