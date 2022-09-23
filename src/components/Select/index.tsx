import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'

interface Props {
  name: string
  label: string
  options: any
}

type ISelect = JSX.IntrinsicElements['select'] & Props

const Select = ({ name, options, ...rest }: ISelect) => {

  const selectRef = useRef<HTMLSelectElement>(null)
  const [value, setValue] = useState()

  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef,
      getValue: ref => {
        return value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField, value])

  return (
    <FormControl fullWidth>
      <InputLabel id="select">{rest.label}</InputLabel>
      <MuiSelect
        ref={selectRef}
        labelId="select"
        label="List of"
        onChange={(e: any) => {
          setValue(e.target.value)
        }}
      >
        {options?.map(
          (option: any) =>
            (<MenuItem value={option.id} >{option.label}</MenuItem>)
        )}

      </MuiSelect>
    </FormControl>

  )
}

export default Select