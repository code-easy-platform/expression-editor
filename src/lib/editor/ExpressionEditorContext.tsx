import { createContext, useContext } from 'react';
import { IObservable } from 'react-observing';

import { TExpressionItem, TExpressionItemTypes } from './types/TExpressionItem';


export interface IExpressionEditorContextProps<T extends TExpressionItemTypes> {
  value: IObservable<TExpressionItem<T>>;
}

const ExpressionEditorContext = createContext({} as IExpressionEditorContextProps<TExpressionItemTypes>);

export function ExpressionEditorContextProvider<T extends TExpressionItemTypes>({ children, ...props }: React.PropsWithChildren<IExpressionEditorContextProps<T>>) {
  return (
    <ExpressionEditorContext.Provider value={props}>
      {children}
    </ExpressionEditorContext.Provider>
  );
}

export const useExpressionEditorContext = () => {
  return useContext(ExpressionEditorContext);
}
