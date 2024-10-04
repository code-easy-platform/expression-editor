import { useMemo, useRef } from 'react';
import { useDrag } from 'react-use-drag-and-drop';

import { TExpressionItemTypes } from '../../types';


export interface IItemProps {
  id: string;
  props?: any;
  name: string;
  type: TExpressionItemTypes;
}
export const Item = ({ id, type, name, props }: IItemProps) => {
  const itemRef = useRef<HTMLButtonElement>(null);


  const { isDragging } = useDrag({
    id,
    data: props,
    element: itemRef,
  }, [id, props]);


  const colors = useMemo(() => {
    switch (type) {
      case 'text':
        return {
          '--color-default': '#eab30833',
          '--color-hover': '#eab308',
          '--color-text': '#eab308',
        };
      case 'concat':
        return {
          '--color-default': '#eab30833',
          '--color-hover': '#eab308',
          '--color-text': '#eab308',
        };
      case 'boolean':
        return {
          '--color-default': '#3b82f633',
          '--color-hover': '#3b82f6',
          '--color-text': '#3b82f6',
        };
      case 'if':
        return {
          '--color-default': '#ec489933',
          '--color-hover': '#ec4899',
          '--color-text': '#ec4899',
        };
      case 'number':
        return {
          '--color-default': '#3b82f633',
          '--color-hover': '#3b82f6',
          '--color-text': '#3b82f6',
        };
      case 'undefined':
        return {
          '--color-default': '#3b82f633',
          '--color-hover': '#3b82f6',
          '--color-text': '#3b82f6',
        };

      default: break;
    }

    return {};
  }, [type]);


  return (
    <button
      ref={itemRef}
      data-type={type}
      data-dragging={isDragging}
      style={{ ...colors as any }}
      className='py-0.5 px-2 rounded-full cursor-grab text-[var(--color-text)] select-none opacity-100 outline-1 -outline-offset-1 outline-[var(--color-default)] hover:outline-[var(--color-hover)] data-[dragging=true]:opacity-50'
    >
      {name}
    </button>
  );
};
