import { Box, Button, TextField, Typography, Grid } from '@mui/material'
import { useContext, useState, type ChangeEventHandler } from 'react'
import { SiteContext } from '../context/SiteContext'

const AddNewSite = () => {
  const {siteList,setSiteList}=useContext(SiteContext)
  const [newSite,setNewSite]=useState({
    title:'',
    da:0,
    url:"",
    contact:''

  })
  const handleInfo =(e)=>{
    const {name,value}=e.target
    setNewSite({...newSite,[name]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSiteList([...siteList,{...newSite,id:Math.random()}])
    
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Add / Edit Entry
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Title
          </Typography>
          <TextField
            fullWidth
            name="title"
            placeholder="Enter title"
            onChange={handleInfo}
            value={newSite.title}
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Domain Authority (DA)
          </Typography>
          <TextField
            fullWidth
            name="da"
            type="number"
            placeholder="Enter DA"
            onChange={handleInfo}
            value={newSite.da}
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            URL
          </Typography>
          <TextField
            fullWidth
            name="url"
            placeholder="Enter website URL"
            onChange={handleInfo}
            value={newSite.url}
            required
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" gutterBottom>
            Contact Details
          </Typography>
          <TextField
            fullWidth
            name="contact"
            multiline
            rows={3}
            onChange={handleInfo}
            value={newSite.contact}
            placeholder="Enter contact details"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AddNewSite