import { ISubGroupProps, SubGroup } from './SubGroup';


interface IGroupSuggestionsProps {
  title: string;
  items: ISubGroupProps[];
}
export const GroupSuggestions = ({ items, title }: IGroupSuggestionsProps) => {
  return (
    <div className='flex flex-col gap-1 overflow-auto'>
      <h6 className='font-black'>{title}</h6>

      {items.map(item => (
        <SubGroup
          key={item.title}
          title={item.title}
          items={item.items}
        />
      ))}
      {items.length === 0 && (
        <caption className='p-1 opacity-50'>Nothing found</caption>
      )}
    </div>
  );
};
