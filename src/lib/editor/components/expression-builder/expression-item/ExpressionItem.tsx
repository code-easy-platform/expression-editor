import { IObservable, useObserverValue } from 'react-observing';

import { TExpressionItem, TExpressionItemBoolean, TExpressionItemNumber, TExpressionItemText, TExpressionItemTypes, TExpressionItemUndefined } from '../../../types';
import { ItemUndefined } from './components/ItemUndefined';
import { ItemBoolean } from './components/ItemBoolean';
import { ItemNumber } from './components/ItemNumber';
import { ItemText } from './components/ItemText';


interface IExpressionItemProps {
  value: IObservable<TExpressionItem<TExpressionItemTypes>>;
}
export const ExpressionItem = ({ value }: IExpressionItemProps) => {
  const item = useObserverValue(value);
  const type = useObserverValue(item.type);


  return (
    <div className=''>
      {type === 'text' && <ItemText value={item as TExpressionItemText} />}
      {type === 'number' && <ItemNumber value={item as TExpressionItemNumber} />}
      {type === 'boolean' && <ItemBoolean value={item as TExpressionItemBoolean} />}
      {type === 'undefined' && <ItemUndefined value={item as TExpressionItemUndefined} />}
    </div>
  );
};
