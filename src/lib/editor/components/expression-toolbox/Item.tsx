import { useRef } from 'react';
import { useDrag } from 'react-use-drag-and-drop';


export interface IItemProps {
  name: string;
  color: string;
  props?: any;
}
export const Item = ({ color, name, props }: IItemProps) => {
  const itemRef = useRef<HTMLButtonElement>(null);


  const { isDragging, preview } = useDrag({
    id: '',
    data: '{}',
    element: itemRef,
  });


  return (
    <button
      ref={itemRef}
      style={{ backgroundColor: color }}
      className='py-0.5 px-2 rounded-xl cursor-grab'
    >
      {name}
    </button>
  );
};
