import { useObserver } from 'react-observing';

import { TExpressionItem } from '../../../../types';


interface IItemTextProps {
  value: TExpressionItem;
}
export const ItemText = ({ value: valueObservable }: IItemTextProps) => {
  const [value, setValue] = useObserver(valueObservable.value);


  return (
    <div className='flex border border-green-700 px-1 rounded-full w-min'>
      <span className='pointer-events-none opacity-50'>"</span>

      <input
        type='text'
        value={value}
        placeholder='Text'
        onChange={e => setValue(e.target.value)}
        style={{ width: String(value).length === 0 ? 40 : String(value).length * 9.7 }}
        className='bg-transparent p-0 focus:ring-0 flex-1 max-w-50 font-mono text-center rounded-none max-h-min'
      />

      <span className='pointer-events-none opacity-50'>"</span>
    </div>
  );
};
