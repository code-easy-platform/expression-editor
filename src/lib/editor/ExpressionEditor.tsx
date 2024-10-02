import { DragAndDropProvider } from "react-use-drag-and-drop";

import { IExpressionEditorContextProps, ExpressionEditorContextProvider } from './ExpressionEditorContext';
import { ExpressionBuilder, ExpressionToolbox } from './components';


interface IExpressionEditorProps extends Pick<IExpressionEditorContextProps, 'value'> {
}
export function ExpressionEditor({ ...props }: IExpressionEditorProps) {
  return (
    <DragAndDropProvider>
      <ExpressionEditorContextProvider {...props}>


        <div className='flex-1 flex max-h-[calc(80vh-92px)]'>
          <ExpressionToolbox />

          <ExpressionBuilder />
        </div>


      </ExpressionEditorContextProvider>
    </DragAndDropProvider>
  );
}
