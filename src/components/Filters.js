import DateRangeIcon from '@mui/icons-material/DateRange'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Filter({ sort }) {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Tooltip title='sort by Date'>
          <Box onClick={() => sort('all')}>All</Box>
        </Tooltip>
      </Grid>
      <Grid item md={4}>
        <Tooltip title='sort by Date'>
          <Box onClick={() => sort('date')}>
            <IconButton>
              <DateRangeIcon />
            </IconButton>
            Sort By Date
          </Box>
        </Tooltip>
      </Grid>
      <Grid item md={4}>
        <Box sx={{ width: 140 }} style={{ height: '50px' }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Status</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Status'
              value={''}
              onChange={(e) => {
                sort(e.target.value)
              }}
            >
              <MenuItem value='pending'>pending</MenuItem>
              <MenuItem value='completed'>completed</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item md={4}></Grid>
    </Grid>
  )
}
