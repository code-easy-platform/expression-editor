import { IObservable } from 'react-observing';


export type TExpressionItemTypes = 'text' | 'number' | 'boolean' | 'undefined';


export type TExpressionItemText = {
  id: IObservable<string>;
  type: IObservable<'text'>;
  value: IObservable<string>;
}

export type TExpressionItemNumber = {
  id: IObservable<string>;
  type: IObservable<'number'>;
  value: IObservable<number>;
}

export type TExpressionItemBoolean = {
  id: IObservable<string>;
  type: IObservable<'boolean'>;
  value: IObservable<boolean>;
}

export type TExpressionItemUndefined = {
  id: IObservable<string>;
  type: IObservable<'undefined'>;
  value: IObservable<undefined>;
}


export type TExpressionItem<T extends TExpressionItemTypes = 'text'> = T extends 'text'
  ? TExpressionItemText
  : T extends 'number'
  ? TExpressionItemNumber
  : T extends 'boolean'
  ? TExpressionItemBoolean
  : T extends 'undefined'
  ? TExpressionItemUndefined
  : undefined
