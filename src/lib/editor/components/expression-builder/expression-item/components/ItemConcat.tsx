import { Fragment } from 'react';
import { useObserver } from 'react-observing';

import { TExpressionItemConcat } from '../../../../types';
import { ExpressionItem } from '../ExpressionItem';
import { VscAdd } from 'react-icons/vsc';


interface IItemConcatProps {
  value: TExpressionItemConcat;
}
export const ItemConcat = ({ value: valueObservable }: IItemConcatProps) => {
  const [value] = useObserver(valueObservable.value);


  return (
    <div
      data-empty={value.length === 0}
      className='group/concat cursor-pointer flex items-center rounded-full w-min data-[empty=true]:pl-2 data-[editing=true]:cursor-text outline outline-transparent hover:outline-yellow-500/20 [&:has(*_:hover)]:outline-transparent'
    >
      <span className='pointer-events-none text-base opacity-50 text-yellow-500'>{'('}</span>

      {value.map((itemExpression, index) => (
        <Fragment key={itemExpression.id.value}>
          <ExpressionItem item={itemExpression} />

          <span
            data-last={index === (value.length - 1)}
            className='pointer-events-none opacity-80 px-1 data-[last=true]:-ml-5 data-[last=true]:opacity-0 data-[last=true]:group-hover/concat:ml-0 data-[last=true]:group-hover/concat:opacity-50 transition-all'
          >+</span>
        </Fragment>
      ))}

      {value.length > 0 && (
        <span className='pointer-events-none min-w-8 min-h-6 flex items-center justify-center rounded-full -ml-8 opacity-0 bg-yellow-500/50 hover:bg-yellow-500 group-hover/concat:ml-0 group-hover/concat:opacity-100 group-hover/concat:pointer-events-auto transition-all'>
          <VscAdd size={14} className='pointer-events-none' />
        </span>
      )}
      {value.length === 0 && (
        <span className='pointer-events-none min-w-8 min-h-6 flex items-center justify-center rounded-full bg-yellow-500/50 hover:bg-yellow-500 group-hover/concat:pointer-events-auto transition-all'>
          <VscAdd size={14} className='pointer-events-none' />
        </span>
      )}

      <span className='pointer-events-none text-base opacity-50 text-yellow-500'>{')'}</span>
    </div>
  );
};
