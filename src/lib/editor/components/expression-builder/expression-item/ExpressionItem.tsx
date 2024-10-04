import { useObserverValue } from 'react-observing';

import { TExpressionItem, TExpressionItemBoolean, TExpressionItemConcat, TExpressionItemIf, TExpressionItemNumber, TExpressionItemText, TExpressionItemTypes, TExpressionItemUndefined, TExpressionItemVariable } from '../../../types';
import { ItemUndefined } from './components/ItemUndefined';
import { ItemVariable } from './components/ItemVariable';
import { ItemBoolean } from './components/ItemBoolean';
import { ItemNumber } from './components/ItemNumber';
import { ItemConcat } from './components/ItemConcat';
import { ItemText } from './components/ItemText';
import { ItemIf } from './components/ItemIf';


interface IExpressionItemProps {
  level: number;
  item: TExpressionItem<TExpressionItemTypes>;
}
export const ExpressionItem = ({ item, level }: IExpressionItemProps) => {
  const type = useObserverValue(item.type);


  return (
    <div className=''>
      {type === 'text' && <ItemText value={item as TExpressionItemText} />}
      {type === 'number' && <ItemNumber value={item as TExpressionItemNumber} />}
      {type === 'boolean' && <ItemBoolean value={item as TExpressionItemBoolean} />}
      {type === 'undefined' && <ItemUndefined value={item as TExpressionItemUndefined} />}
      {type === 'concat' && <ItemConcat value={item as TExpressionItemConcat} level={level} />}
      {type === 'if' && <ItemIf value={item as TExpressionItemIf} level={level} />}
      {type === 'variable' && <ItemVariable value={item as TExpressionItemVariable} level={level} />}
    </div>
  );
};
