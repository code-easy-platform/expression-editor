import { useMemo, useState } from 'react';
import { useObserver } from 'react-observing';

import { TExpressionItemNumber } from '../../../../types';


interface IItemNumberProps {
  value: TExpressionItemNumber;
}
export const ItemNumber = ({ value: valueObservable }: IItemNumberProps) => {
  const [value, setValue] = useObserver(valueObservable.value);

  const [isEditing, setIsEditing] = useState(false);


  const width = useMemo(() => {
    const width = String(value).length === 0 ? 1 : String(value).length * 9.7;
    return width > 250 ? 250 : width;
  }, [value]);


  return (
    <div
      onClick={() => setIsEditing(true)}
      data-editing={isEditing}
      className='focus-within:outline-blue-500 cursor-pointer data-[editing=true]:cursor-text hover:outline-blue-500 flex outline outline-transparent px-2.5 rounded-full w-min'
    >
      {!isEditing && (
        <span
          style={{ minWidth: width, width, maxWidth: width }}
          className='flex-1 line-clamp-1 break-all font-mono text-center text-blue-500 select-none'
        >
          {value}
        </span>
      )}

      {isEditing && (
        <input
          autoFocus
          type='number'
          value={value}
          placeholder='0'
          onFocus={(e) => e.target.select()}
          onBlur={() => setIsEditing(false)}
          onChange={e => setValue(e.target.valueAsNumber)}
          style={{ minWidth: width, width, maxWidth: width }}
          className='bg-transparent p-0 focus:ring-0 flex-1 font-mono text-center rounded-none max-h-min hide-number-spin text-blue-500 selection:bg-blue-500/50'
        />
      )}
    </div>
  );
};
