import { useCallback, useMemo } from 'react';
import { DragAndDropProvider } from 'react-use-drag-and-drop';
import { observe } from 'react-observing';

import { ExpressionEditor, TExpressionItem, TExpressionItemTypes } from 'expression-editor/src';
import './../styles.css';


export const App = () => {
  const values = useMemo(() => {
    return observe<TExpressionItem<TExpressionItemTypes> | undefined>({
      type: observe('variable'),
      id: observe(crypto.randomUUID()),
      value: observe(crypto.randomUUID()),
    });
  }, []);


  const handleGetDetails = useCallback(() => {
    return { name: observe('Entidade.Person.Name') };
  }, []);


  return (
    <div className='w-screen h-screen bg-paper flex justify-center items-center gap-4'>
      <DragAndDropProvider>

        <div className='p-2 flex flex-col gap-2'>
          Expression editor

          <div className='w-[60vw] h-[90vh] bg-background rounded overflow-clip p-2'>
            <ExpressionEditor
              value={values}
              getDetails={handleGetDetails}
            />
          </div>
        </div>
      </DragAndDropProvider>
    </div>
  );
}
