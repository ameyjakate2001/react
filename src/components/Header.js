import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            style={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}
            sx={{ flexGrow: 1 }}
          >
            TODO LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
