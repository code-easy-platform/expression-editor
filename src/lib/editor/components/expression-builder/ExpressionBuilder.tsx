import { useRef } from 'react';
import { useObserverValue } from 'react-observing';
import { useDrop } from 'react-use-drag-and-drop';

import { useExpressionEditorContext } from '../../ExpressionEditorContext';
import { ExpressionItem } from './expression-item/ExpressionItem';


interface IExpressionBuilderProps {
}
export const ExpressionBuilder = ({ }: IExpressionBuilderProps) => {
  const boardRef = useRef<HTMLDivElement>(null);

  const value = useObserverValue(useExpressionEditorContext().value);


  const [{ isDraggingOver, isDraggingOverCurrent }] = useDrop({
    id: '',
    drop: () => { },
    hover: () => { },
    leave: () => { },
    element: boardRef,
  });


  return (
    <div
      ref={boardRef}
      data-dragging-over={isDraggingOverCurrent}
      className='p-1 flex-1 overflow-auto font-mono data-[dragging-over=true]:bg-paper'
    >
      {value && <ExpressionItem item={value} level={1} />}
    </div>
  );
};
