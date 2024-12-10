import  { useState } from 'react';

const HashTagInput = () => {
    const [text, setText] = useState('');
  
    const handleChange = (e:any) => {
      setText(e.target.value);
    };
  
    const renderText = (inputText:string) => {
      const regex = /#\w+/g;
      const parts = inputText.split(regex);
  
      return parts.map((part, index) => {
        if (regex.test(part)) {
          return <span key={index} style={{ color: 'blue' }}>{part}</span>;
        }
        return part;
      });
    };
  
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: renderText(text) }}
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', border: '1px solid #ccc', padding: '8px' }}
      />
    );
  };
  
  export default HashTagInput;