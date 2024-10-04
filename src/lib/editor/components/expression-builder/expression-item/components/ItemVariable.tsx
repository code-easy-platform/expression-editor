import { useObserver, useObserverValue } from 'react-observing';

import { TExpressionItemVariable } from '../../../../types';
import { useMemo } from 'react';
import { useExpressionEditorContext } from '../../../../ExpressionEditorContext';


interface IItemVariableProps {
  value: TExpressionItemVariable;
}
export const ItemVariable = ({ value: expressionItem }: IItemVariableProps) => {
  const { getDetails } = useExpressionEditorContext();

  const [value] = useObserver(expressionItem.value);

  const details = useMemo(() => {
    return getDetails(expressionItem);
  }, [getDetails, expressionItem]);

  const name = useObserverValue(details.name);


  const width = useMemo(() => {
    const width = String(name).length === 0 ? 1 : String(name).length * 9.7;
    return width > 250 ? 250 : width;
  }, [name]);


  return (
    <div
      data-empty={value.length === 0}
      className='group/concat cursor-pointer flex items-center rounded-sm w-min data-[empty=true]:pl-2 data-[empty=true]:flex-row data-[editing=true]:cursor-text outline outline-transparent hover:outline-blue-500/20 [&:has(*_:hover)]:outline-transparent'
    >
      <span className='text-blue-500 line-clamp-1 select-none' style={{ width, minWidth: width, maxWidth: width }}>
        {name}
      </span>
    </div>
  );
};
