import {
    Grid,
    Container,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
  } from '@mui/material'
import { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'
  
  const Home = () => {
    /*const items = [
      {
        id: 1,
        title: 'Example Site',
        da: 55,
        url: 'https://example.com',
        contact: 'a@a.com',
      },
      {
        id: 2,
        title: 'Tech Blog',
        da: 42,
        url: 'https://techblog.com',
        contact: 'contact@techblog.com',
      },
      {
        id: 3,
        title: 'News Portal',
        da: 60,
        url: 'https://newsportal.com',
        contact: 'editor@newsportal.com',
      },
    ]*/
    const {siteList} =useContext(SiteContext)
    return (
      <Container sx={{ py: 4 }}>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {siteList.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DA: {item.da}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    URL:{' '}
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.url}
                    </a>
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Contact: {item.contact}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="error">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
  
  export default Home
  