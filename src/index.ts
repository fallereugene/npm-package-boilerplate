import { Calc } from './calc';
import { ICalc } from './calc/contracts';

export { Calc, ICalc };

if (module.hot && module.hot.accept) {
    module.hot.accept();
}
