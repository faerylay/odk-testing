import { useState, useCallback } from 'react'

export const useModify = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(
    (e) => setValue(e.currentTarget.value),
    []
  )
  return {
    value,
    onChange
  }
}


