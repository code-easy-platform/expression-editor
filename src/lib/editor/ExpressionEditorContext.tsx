import { createContext, useContext } from 'react';
import { IObservable } from 'react-observing';

import { TExpressionItem, TExpressionItemTypes } from './types/TExpressionItem';


export interface ExpressionItemDetails {
  name: IObservable<string>;
}

export interface IExpressionEditorContextProps<T extends TExpressionItemTypes> {
  value: IObservable<TExpressionItem<T> | undefined>;
  getDetails: (expressionItem: TExpressionItem<T>) => ExpressionItemDetails;
}

const ExpressionEditorContext = createContext({} as IExpressionEditorContextProps<TExpressionItemTypes>);

export function ExpressionEditorContextProvider<T extends TExpressionItemTypes>({ children, ...props }: React.PropsWithChildren<IExpressionEditorContextProps<T>>) {
  return (
    <ExpressionEditorContext.Provider value={props as IExpressionEditorContextProps<T>}>
      {children}
    </ExpressionEditorContext.Provider>
  );
}

export const useExpressionEditorContext = () => {
  return useContext(ExpressionEditorContext);
}
