import { useState } from 'react';
import TagInput from '../src/index';

const Example = () => {
  const [value, setValue] = useState<string[]>([])
  
  return (
    <TagInput value={value} onChange={value => setValue(value)} />
  );
};

export default Example;