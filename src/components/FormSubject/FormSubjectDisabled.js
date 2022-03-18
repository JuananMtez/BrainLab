import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid';
import TextFieldDisabled from '../TextFieldDisabled/TextFieldDisabled'
import  Container  from "@mui/material/Container"
import Chip from '@mui/material/Chip';
import BackButtonFixed from "../BackButton/BackButtonFixed";
import Stack from '@mui/material/Stack';



const FormSubjectDisabled = ({ data, init }) => {
  
  
  return ( 
    <Container maxWidth="lg">
      <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextFieldDisabled 
          fullWidth
          
          value={data.name}
          name="name"
          label="Name"/>
        </Grid>
        <Grid item xs={6}>
          <TextFieldDisabled 
            fullWidth
            value={data.surname}
            name="surname"
            label="Surname"
          />
        
        </Grid>
        <Grid item xs={6}>
          <TextFieldDisabled
            fullWidth
            name="age"
            label="Age"
            value={data.age}
          />
        
        </Grid>
        <Grid item xs={6}>
          <TextFieldDisabled
            fullWidth
            name="gender"
            label="Gender"
            value={data.gender}
          />
        
        </Grid>
        <Grid item xs={12}>
          <h2 style={{color:'white'}}>Mental Conditions</h2>
        </Grid>
        <Grid item xs={12}>
          <Stack 
            spacing={2}
            direction="row"
          >
            {data.mental_conditions.map((e, index) => (
              <Chip
                label={e.condition}
                key={index}
            
                sx={{color:'white'}}
              />
            ))}
          </Stack>
        </Grid>
        
      </Grid>
    </Box>
    <BackButtonFixed url="../subjects" init={init} fixed={true}/>
    </Container>
    
  )
    
}

export default FormSubjectDisabled