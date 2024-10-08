import { useMemo } from 'react';
import { useObserver } from 'react-observing';

import { TExpressionItemBoolean } from '../../../../types';


interface IItemBooleanProps {
  value: TExpressionItemBoolean;
}
export const ItemBoolean = ({ value: valueObservable }: IItemBooleanProps) => {
  const [value, setValue] = useObserver(valueObservable.value);


  const width = useMemo(() => {
    const width = String(value).length === 0 ? 1 : String(value).length * 9.7;
    return width > 250 ? 250 : width;
  }, [value]);


  return (
    <div
      onDoubleClick={() => setValue(!value)}
      className='focus-within:outline-blue-500/20 cursor-pointer data-[editing=true]:cursor-text hover:outline-blue-500 flex outline outline-transparent rounded-full w-min'
    >
      <span
        style={{ minWidth: width, width, maxWidth: width }}
        className='flex-1 line-clamp-1 break-all text-center text-blue-500 select-none'
      >
        {value ? 'true' : 'false'}
      </span>
    </div>
  );
};
