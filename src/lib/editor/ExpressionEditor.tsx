import { DragAndDropProvider } from "react-use-drag-and-drop";

import { IExpressionEditorContextProps, ExpressionEditorContextProvider } from './ExpressionEditorContext';
import { ExpressionBuilder, ExpressionToolbox } from './components';
import { TExpressionItemTypes } from './types';


interface IExpressionEditorProps extends Pick<IExpressionEditorContextProps<TExpressionItemTypes>, 'value'> {
}
export function ExpressionEditor({ ...props }: IExpressionEditorProps) {
  return (
    <DragAndDropProvider>
      <ExpressionEditorContextProvider {...props}>


        <div className='flex-1 flex'>
          <ExpressionToolbox />

          <ExpressionBuilder />
        </div>


      </ExpressionEditorContextProvider>
    </DragAndDropProvider>
  );
}
