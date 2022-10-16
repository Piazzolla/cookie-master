import { ChangeEvent, FC, useState } from "react";
import { GetServerSideProps } from 'next'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import Cookies from 'js-cookie';
import { Layout } from "../components/layouts";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from 'axios'

interface Props {
  theme: string;
}

export const ThemeChangerPage:FC<Props> = (props) => {
  console.log(props);
  const [currentTheme, setCurrentTheme] = useState('light')
  const onThemeChange = ( event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);

    Cookies.set('theme', selectedTheme );
  }

  const onClick = async() =>{
    const { data } = await axios.get('/api/hello')
    console.log({data})
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup 
              onChange={ onThemeChange }
              value={currentTheme}
            >
              <FormControlLabel value='light' control={<Radio />} label="Light" />
              <FormControlLabel value='dark' control={<Radio />} label="Dark" />
              <FormControlLabel value='custom' control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>
          <Button
            onClick={ onClick }
          >
            Solicitud
          </Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme ='light', name ='No name'} = req.cookies;

  return {
    props: {
      theme,
      name
    }
  }
}

export default ThemeChangerPage;
