import { useMemo } from 'react';
import { useObserver } from 'react-observing';
import { VscAdd } from 'react-icons/vsc';

import { TExpressionItemConcat } from '../../../../types';
import { ExpressionItem } from '../ExpressionItem';


interface IItemConcatProps {
  level: number;
  value: TExpressionItemConcat;
}
export const ItemConcat = ({ value: valueObservable, level }: IItemConcatProps) => {
  const [value] = useObserver(valueObservable.value);


  const paddingLeft = useMemo(() => {
    return level * 4;
  }, [level]);


  return (
    <div
      data-empty={value.length === 0}
      className='group/concat cursor-pointer flex items-start flex-col rounded-sm w-min data-[empty=true]:pl-2 data-[empty=true]:flex-row data-[editing=true]:cursor-text outline outline-transparent hover:outline-yellow-500/20 [&:has(*_:hover)]:outline-transparent'
    >
      <span className='pointer-events-none select-none text-base opacity-50 text-yellow-500'>{'('}</span>

      {value.map((itemExpression, index) => (
        <div key={itemExpression.id.value} className='flex' style={{ paddingLeft }}>
          <ExpressionItem item={itemExpression} level={level + 1} />

          <span
            data-last={index === (value.length - 1)}
            className='pointer-events-none select-none opacity-80 px-1 data-[last=true]:-ml-5 data-[last=true]:opacity-0 data-[last=true]:group-hover/concat:ml-0 data-[last=true]:group-hover/concat:opacity-50 transition-all'
          >+</span>
        </div>
      ))}

      {value.length > 0 && (
        <span
          style={{ marginLeft: paddingLeft }}
          className='pointer-events-none min-w-8 min-h-4 flex items-center justify-center rounded-full -mt-6 opacity-0 bg-yellow-500/50 hover:bg-yellow-500 group-hover/concat:mt-0 group-hover/concat:opacity-100 group-hover/concat:pointer-events-auto transition-all'
        >
          <VscAdd size={14} className='pointer-events-none' />
        </span>
      )}
      {value.length === 0 && (
        <span className='pointer-events-none min-w-8 min-h-6 flex items-center justify-center rounded-full bg-yellow-500/50 hover:bg-yellow-500 group-hover/concat:pointer-events-auto transition-all'>
          <VscAdd size={14} className='pointer-events-none' />
        </span>
      )}

      <span className='pointer-events-none select-none text-base opacity-50 text-yellow-500'>{')'}</span>
    </div>
  );
};
