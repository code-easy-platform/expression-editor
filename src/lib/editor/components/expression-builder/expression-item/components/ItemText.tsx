import { useMemo, useState } from 'react';
import { useObserver } from 'react-observing';

import { TExpressionItemText } from '../../../../types';


interface IItemTextProps {
  value: TExpressionItemText;
}
export const ItemText = ({ value: valueObservable }: IItemTextProps) => {
  const [value, setValue] = useObserver(valueObservable.value);

  const [isEditing, setIsEditing] = useState(false);


  const width = useMemo(() => {
    const width = String(value).length === 0 ? 1 : String(value).length * 9.7;
    return width > 250 ? 250 : width;
  }, [value]);


  return (
    <div
      onClick={() => setIsEditing(true)}
      className='cursor-pointer focus-within:outline-yellow-500/20 data-[editing=true]:cursor-text hover:outline-yellow-500 focus-within:hover:outline-yellow-500/20 flex outline outline-transparent px-1 rounded-full w-min'
    >
      <span className='pointer-events-none opacity-50 text-yellow-500'>"</span>

      {!isEditing && (
        <span
          style={{ minWidth: width, width, maxWidth: width }}
          className='flex-1 line-clamp-1 break-all text-center text-yellow-500 select-none'
        >
          {value}
        </span>
      )}

      {isEditing && (
        <input
          autoFocus
          type='text'
          value={value}
          placeholder=''
          onFocus={(e) => e.target.select()}
          onBlur={() => setIsEditing(false)}
          onChange={e => setValue(e.target.value)}
          style={{ minWidth: width, width, maxWidth: width }}
          className='bg-transparent p-0 focus:ring-0 flex-1 text-center rounded-none max-h-min hide-number-spin text-yellow-500 selection:bg-yellow-500/50'
        />
      )}

      <span className='pointer-events-none opacity-50 text-yellow-500'>"</span>
    </div>
  );
};
