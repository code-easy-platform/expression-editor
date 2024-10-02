import { IObservable, useObserverValue } from 'react-observing';

import { ItemNumber } from './components/ItemNumber';
import { TExpressionItem } from '../../../types';
import { ItemText } from './components/ItemText';


interface IExpressionItemProps {
  value: IObservable<TExpressionItem>;
}
export const ExpressionItem = ({ value }: IExpressionItemProps) => {
  const item = useObserverValue(value);
  const type = useObserverValue(item.type);


  return (
    <div className=''>
      {type === 'text' && <ItemText value={item} />}
      {type === 'number' && <ItemNumber value={item} />}
    </div>
  );
};
