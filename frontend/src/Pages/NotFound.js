import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
import pageerror from '../assest/errors/error-404.png'
const NotFoundPage = () => (
  <>
    
      <title>
        404 | Devias Kit
      </title>
    
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        Height: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: 'center'
            }}
          >
            <img
              alt="Under development"
              src={pageerror}
              style={{
                display: 'inline-block',
                maxWidth: '100%',
                width: 400
              }}
            />
          </Box>
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant="h3"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            variant="body1"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Button           
            href="/home"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
            )}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Go back to dashboard
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFoundPage;
