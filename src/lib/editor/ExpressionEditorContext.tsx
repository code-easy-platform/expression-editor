import { createContext, useContext } from 'react';
import { IObservable } from 'react-observing';


export interface IExpressionEditorContextProps<D = any> {
  value: IObservable<D[]>;
}

const ExpressionEditorContext = createContext({} as IExpressionEditorContextProps<any>);

export function ExpressionEditorContextProvider({ children, ...props }: React.PropsWithChildren<IExpressionEditorContextProps<any>>) {
  return (
    <ExpressionEditorContext.Provider value={props}>
      {children}
    </ExpressionEditorContext.Provider>
  );
}

export const useExpressionEditorContext = () => {
  return useContext(ExpressionEditorContext);
}
