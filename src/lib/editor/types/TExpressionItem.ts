import { IObservable } from 'react-observing';


export type TExpressionItem = {
  type: IObservable<'text' | 'number'>;
  value: IObservable<string | number>;
}
