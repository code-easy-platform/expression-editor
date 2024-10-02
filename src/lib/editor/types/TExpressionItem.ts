import { IObservable } from 'react-observing';




export type TExpressionItemText = {
  type: IObservable<'text'>;
  value: IObservable<string>;
}

export type TExpressionItemNumber = {
  type: IObservable<'number'>;
  value: IObservable<number>;
}


export type TExpressionItem<T extends 'text' | 'number'> = T extends 'text'
  ? TExpressionItemText
  : TExpressionItemNumber
