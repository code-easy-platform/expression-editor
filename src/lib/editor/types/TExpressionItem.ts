import { IObservable } from 'react-observing';


export type TExpressionItemTypes = 'text' | 'number' | 'boolean' | 'undefined' | 'concat' | 'if';


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

export type TExpressionItemConcat = {
  id: IObservable<string>;
  type: IObservable<'concat'>;
  value: IObservable<TExpressionItem<TExpressionItemTypes>[]>;
}

export type TExpressionItemIf = {
  id: IObservable<string>;
  type: IObservable<'if'>;
  value: IObservable<[
    TExpressionItem<TExpressionItemTypes>,
    TExpressionItem<TExpressionItemTypes>,
    TExpressionItem<TExpressionItemTypes>,
  ]>;
}


export type TExpressionItem<T extends TExpressionItemTypes = 'text'> = T extends 'text'
  ? TExpressionItemText
  : T extends 'number'
  ? TExpressionItemNumber
  : T extends 'boolean'
  ? TExpressionItemBoolean
  : T extends 'undefined'
  ? TExpressionItemUndefined
  : T extends 'concat'
  ? TExpressionItemConcat
  : T extends 'if'
  ? TExpressionItemIf
  : undefined
