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
            {
              title: 'Local method',
              items: [
                { id: 'input1', name: 'InputVariable1', type: 'text' },
                { id: 'local1', name: 'LocalVariable1', type: 'text' },
              ]
            },
            {
              title: 'Page',
              items: [
                { id: 'input2', name: 'InputVariable1', type: 'text' },
                { id: 'local2', name: 'LocalVariable1', type: 'text' }
              ]
            },
          ]}
        />

        <GroupSuggestions
          title="Basic"
          items={[
            {
              title: 'Text',
              type: 'inline',
              items: [
                { id: 'text', name: '"Text"', type: 'text' },
                { id: 'concat', name: '{X}{Y}, ...', type: 'concat' }
              ]
            },
            {
              type: 'inline',
              title: 'Math',
              items: [
                { id: 'sum', name: '{X}+{Y}...', type: 'text' },
                { id: 'subtraction', name: '{X}-{Y}...', type: 'text' },
                { id: 'multiply', name: '{X}*{Y}...', type: 'text' },
                { id: 'divide', name: '{X}/{Y}...', type: 'text' },
              ]
            },
            {
              type: 'inline',
              title: 'Comparators',
              items: [
                { id: 'equal', name: '{X}=={Y}', type: 'text' },
                { id: 'different', name: '{X}!={Y}', type: 'text' },
              ]
            },
            {
              type: 'inline',
              title: 'Conditions',
              items: [
                { id: 'if', name: 'If({X}, {Y}, {Z})', type: 'if' }
              ]
            },
            {
              type: 'inline',
              title: 'Empty',
              items: [
                { id: 'undefined', name: 'undefined', type: 'undefined' }
              ]
            },
          ]}
        />
      </div>
    </div>
  );
};
