import { IItemProps, Item } from './Item';


export interface ISubGroupProps {
  title: string;
  items: IItemProps[];
  type?: 'inline' | 'multiline';
}
export const SubGroup = ({ items, title, type = 'multiline' }: ISubGroupProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <p>{title}</p>

      <div data-type={type} className='flex flex-col gap-1 items-start data-[type=multiline]:flex-row data-[type=multiline]:flex-wrap'>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}

        {items.length === 0 && (
          <caption className='p-1 opacity-50'>Nothing found</caption>
        )}
      </div>
    </div>
  );
};
