import { DragAndDropProvider } from "react-use-drag-and-drop";

import { IExpressionEditorContextProps, ExpressionEditorContextProvider } from './ExpressionEditorContext';


interface IExpressionEditorProps<D> extends Pick<IExpressionEditorContextProps<D>, 'value'> {
}
export function ExpressionEditor<D = any>({ ...props }: IExpressionEditorProps<D>) {
  return (
    <DragAndDropProvider>
      <ExpressionEditorContextProvider {...props}>
        Hello
      </ExpressionEditorContextProvider>
    </DragAndDropProvider>
  );
}
