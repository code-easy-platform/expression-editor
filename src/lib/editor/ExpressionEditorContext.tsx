import { createContext, useContext } from 'react';
import { IObservable } from 'react-observing';

import { TExpressionItem } from './types/TExpressionItem';


export interface IExpressionEditorContextProps {
  value: IObservable<TExpressionItem>;
}

const ExpressionEditorContext = createContext({} as IExpressionEditorContextProps);

export function ExpressionEditorContextProvider({ children, ...props }: React.PropsWithChildren<IExpressionEditorContextProps>) {
  return (
    <ExpressionEditorContext.Provider value={props}>
      {children}
    </ExpressionEditorContext.Provider>
  );
}

export const useExpressionEditorContext = () => {
  return useContext(ExpressionEditorContext);
}
