import React from 'react'
import { useState } from 'react'
import TagInput from '../src/index'

const Example = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <TagInput placeholder="please fill in..." value={value} onChange={(value) => setValue(value)} />
  )
}

export default Example
