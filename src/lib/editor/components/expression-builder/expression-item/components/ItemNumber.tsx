import { useObserver } from 'react-observing';

import { TExpressionItem } from '../../../../types';


interface IItemNumberProps {
  value: TExpressionItem;
}
export const ItemNumber = ({ value: valueObservable }: IItemNumberProps) => {
  const [value, setValue] = useObserver(valueObservable.value);


  return (
    <div className='flex border border-green-700 px-2.5 rounded-full w-min'>

      <input
        type='text'
        value={value}
        placeholder='Text'
        onChange={e => setValue(e.target.value)}
        style={{ width: String(value).length === 0 ? 40 : String(value).length * 9.7 }}
        className='bg-transparent p-0 focus:ring-0 flex-1 max-w-50 font-mono text-center rounded-none max-h-min'
      />

    </div>
  );
};
