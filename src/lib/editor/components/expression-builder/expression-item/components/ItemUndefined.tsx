import { useMemo } from 'react';
import { useObserverValue } from 'react-observing';

import { TExpressionItemUndefined } from '../../../../types';


interface IItemUndefinedProps {
  value: TExpressionItemUndefined;
}
export const ItemUndefined = ({ value: valueObservable }: IItemUndefinedProps) => {
  const value = useObserverValue(valueObservable.value);


  const width = useMemo(() => {
    const width = String('undefined').length === 0 ? 1 : String(value).length * 9.7;
    return width > 250 ? 250 : width;
  }, [value]);


  return (
    <div className='focus-within:border-blue-500 cursor-pointer data-[editing=true]:cursor-text hover:border-blue-500 flex border border-transparent px-2.5 rounded-full w-min'>
      <span
        style={{ minWidth: width, width, maxWidth: width }}
        className='flex-1 line-clamp-1 break-all font-mono text-center text-blue-500 select-none'
      >
        undefined
      </span>
    </div>
  );
};
