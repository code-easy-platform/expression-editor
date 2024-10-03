import { useObserverValue } from 'react-observing';

import { TExpressionItem, TExpressionItemBoolean, TExpressionItemConcat, TExpressionItemNumber, TExpressionItemText, TExpressionItemTypes, TExpressionItemUndefined } from '../../../types';
import { ItemUndefined } from './components/ItemUndefined';
import { ItemBoolean } from './components/ItemBoolean';
import { ItemNumber } from './components/ItemNumber';
import { ItemConcat } from './components/ItemConcat';
import { ItemText } from './components/ItemText';


interface IExpressionItemProps {
  item: TExpressionItem<TExpressionItemTypes>;
}
export const ExpressionItem = ({ item }: IExpressionItemProps) => {
  const type = useObserverValue(item.type);


  return (
    <div className=''>
      {type === 'text' && <ItemText value={item as TExpressionItemText} />}
      {type === 'number' && <ItemNumber value={item as TExpressionItemNumber} />}
      {type === 'boolean' && <ItemBoolean value={item as TExpressionItemBoolean} />}
      {type === 'undefined' && <ItemUndefined value={item as TExpressionItemUndefined} />}
      {type === 'concat' && <ItemConcat value={item as TExpressionItemConcat} />}
    </div>
  );
};
