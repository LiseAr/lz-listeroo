import { Button } from '@mui/material'
import React from 'react'

const Admin = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      gap: 20
    }}>
      <Button variant='contained' href='admin/createList'>Create List</Button>
      <Button variant='contained'>Insert List Item</Button>
    </div>
  )
}

export { Admin }