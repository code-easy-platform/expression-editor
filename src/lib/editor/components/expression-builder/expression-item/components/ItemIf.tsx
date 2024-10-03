import { useMemo } from 'react';
import { useObserver } from 'react-observing';

import { TExpressionItemIf } from '../../../../types';
import { ExpressionItem } from '../ExpressionItem';


interface IItemIfProps {
  level: number;
  value: TExpressionItemIf;
}
export const ItemIf = ({ value: valueObservable, level }: IItemIfProps) => {
  const [value] = useObserver(valueObservable.value);


  const paddingLeft = useMemo(() => {
    return level * 4;
  }, [level]);


  return (
    <div
      className='group/if cursor-pointer flex items-start flex-col rounded-sm w-min data-[empty=true]:pl-2 data-[empty=true]:flex-row data-[editing=true]:cursor-text outline outline-transparent hover:outline-pink-500/20 [&:has(*_:hover)]:outline-transparent'
    >
      <div className='flex gap-1' style={{ paddingLeft }}>
        <span className='pointer-events-none text-pink-500'>if</span>
        <ExpressionItem item={value[0]} level={level + 1} />
      </div>
      <div className='flex gap-1' style={{ paddingLeft }}>
        <span className='pointer-events-none text-pink-500'>then</span>
        <ExpressionItem item={value[1]} level={level + 1} />
      </div>
      <div className='flex gap-1' style={{ paddingLeft }}>
        <span className='pointer-events-none text-pink-500'>else</span>
        <ExpressionItem item={value[2]} level={level + 1} />
      </div>
    </div>
  );
};