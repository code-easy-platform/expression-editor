import { GroupSuggestions } from './GroupSuggestions';


interface IExpressionToolboxProps {
}
export const ExpressionToolbox = ({ }: IExpressionToolboxProps) => {
  return (
    <div className='p-2 pb-12 bg-paper h-full overflow-auto max-w-[200px]'>
      <div className='flex flex-col gap-4'>
        <GroupSuggestions
          title="Variables"
          items={[
            { title: 'Local method', items: [{ name: 'InputVariable1', color: '#939600' }, { name: 'LocalVariable1', color: '#939600' }] },
            { title: 'Page', items: [{ name: 'InputVariable1', color: '#0067A2' }, { name: 'LocalVariable1', color: '#0067A2' }] },
          ]}
        />
        <GroupSuggestions
          title="Utils"
          items={[
            {
              title: 'Operators', type: 'inline', items: [
                { name: '{X}+{Y}...', color: '#00A21A' },
                { name: '{X}-{Y}...', color: '#00A21A' },
                { name: '{X}*{Y}...', color: '#00A21A' },
                { name: '{X}/{Y}...', color: '#00A21A' },
                { name: '{X}=={Y}', color: '#00A21A' },
                { name: '{X}!={Y}', color: '#00A21A' },
              ]
            },
            {
              title: 'Text', type: 'inline', items: [
                { name: '"Text"', color: '#00A285' },
                { name: '{X}{Y}, ...', color: '#00A285' }
              ]
            },
            {
              title: 'Conditions', type: 'inline', items: [
                { name: 'If({X}, {Y}, {Z})', color: '#00A21A' }
              ]
            },
          ]}
        />
      </div>
    </div>
  );
};
