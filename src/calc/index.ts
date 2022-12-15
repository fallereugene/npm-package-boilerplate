import { ICalc } from './contracts';

export class Calc implements ICalc {
    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }
}
