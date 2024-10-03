import { useMemo } from 'react';
import { DragAndDropProvider } from 'react-use-drag-and-drop';
import { observe } from 'react-observing';

import { ExpressionEditor, TExpressionItem } from 'expression-editor/src';
import './../styles.css';


export const App = () => {
  const values = useMemo(() => {
    return observe<TExpressionItem<'if'>>({
      type: observe('if'),
      id: observe(crypto.randomUUID()),
      value: observe([
        {
          value: observe(true),
          type: observe('boolean'),
          id: observe(crypto.randomUUID()),
        },
        {
          type: observe('concat'),
          id: observe(crypto.randomUUID()),
          value: observe([
            {
              type: observe('text'),
              value: observe('Paulo'),
              id: observe(crypto.randomUUID()),
            },
            {
              type: observe('text'),
              value: observe('Souza'),
              id: observe(crypto.randomUUID()),
            },
          ]),
        } satisfies TExpressionItem<'concat'>,
        {
          type: observe('concat'),
          id: observe(crypto.randomUUID()),
          value: observe([
            {
              type: observe('text'),
              value: observe('Juca'),
              id: observe(crypto.randomUUID()),
            },
            {
              type: observe('text'),
              value: observe('Gonçalves'),
              id: observe(crypto.randomUUID()),
            },
          ]),
        } satisfies TExpressionItem<'concat'>,
      ]),
    });
  }, []);


  return (
    <div className='w-screen h-screen bg-paper flex justify-center items-center gap-4'>
      <DragAndDropProvider>

        <div className='p-2 flex flex-col gap-2'>
          Expression editor

          <div className='w-[60vw] h-[90vh] bg-background rounded overflow-clip p-2'>
            <ExpressionEditor
              value={values}
            />
          </div>
        </div>
      </DragAndDropProvider>
    </div>
  );
}
