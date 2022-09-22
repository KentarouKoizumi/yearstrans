import { TextField, Typography, Stack, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system'
import React, { useRef, useState } from 'react';
// import { TextField } from 'react-number-format'

function App() {
  const [ad, setAd] = useState(new Date().getFullYear())
  const [isMeiji, setIsMeiji] = useState(false)
  const [isTaisho, setIsTaisho] = useState(false)
  const [isShowa, setIsShowa] = useState(false)
  const [isHeisei, setIsHeisei] = useState(false)
  const [isReiwa, setIsReiwa] = useState(true)

  const onChangeHandle = (e) => {
    const val = Number(e.target.value)
    switch (e.target.id) {
      case "AD":
        setAd(() => val)
        break
      case "meiji":
        setAd(() => val + 1867)
        break
      case "taisho":
        setAd(() => val + 1911)
        break
      case "showa":
        setAd(() => val + 1925)
        break
      case "heisei":
        setAd(() => val + 1988)
        break
      case "reiwa":
        setAd(() => val + 2018)
        break
    }
    if (1867 < val && val <= 1911){
      setIsMeiji(true)
      setIsTaisho(false)
      setIsShowa(false)
      setIsHeisei(false)
      setIsReiwa(false)
    }else if (1911 < val && val <= 1925 ){
      setIsMeiji(false)
      setIsTaisho(true)
      setIsShowa(false)
      setIsHeisei(false)
      setIsReiwa(false)
    }else if (1925 < val && val <= 1988 ){
      setIsMeiji(false)
      setIsTaisho(false)
      setIsShowa(true)
      setIsHeisei(false)
      setIsReiwa(false)
    }else if (1988 < val && val <= 2018 ){
      setIsMeiji(false)
      setIsTaisho(false)
      setIsShowa(false)
      setIsHeisei(true)
      setIsReiwa(false)
    }else if (2018 < val ){
      setIsMeiji(false)
      setIsTaisho(false)
      setIsShowa(false)
      setIsHeisei(false)
      setIsReiwa(true)
    }
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height:50
        }}
      ></Box>
      {/* <Stack direction="row" spacing={5}> */}
      <Grid container spacing={10} sx={{margin: 1}}>
        <Grid xs>
          <Stack direction="column" spacing={2}>
            <TextField
                id="AD"
                label="西暦"
                value={ad}
                type="number"
                onChange={onChangeHandle}
              />
          </Stack>
        </Grid>
        <Grid xs>
          <Stack direction="column" spacing={2}>
            <TextField
              id="meiji"
              label="明治"
              value={ad - 1867}
              type="number"
              focused={isMeiji}
              color={isMeiji ? "secondary" : ""}
              onChange={onChangeHandle}
            />
            <TextField
              id="taisho"
              label="大正"
              value={ad - 1911}
              type="number"
              focused={isTaisho}
              color={isTaisho ? "secondary" : ""}
              onChange={onChangeHandle}
            />
            <TextField
              id="showa"
              label="昭和"
              value={ad - 1925}
              type="number"
              focused={isShowa}
              color={isShowa ? "secondary" : ""}
              onChange={onChangeHandle}
            />
            <TextField
              id="heisei"
              label="平成"
              value={ad - 1988}
              type="number"
              focused={isHeisei}
              color={isHeisei ? "secondary" : ""}
              onChange={onChangeHandle}
            />
            <TextField
              id="reiwa"
              label="令和"
              value={ad - 2018}
              type="number"
              focused={isReiwa}
              color={isReiwa ? "secondary" : ""}
              onChange={onChangeHandle}
            />
          </Stack>
        </Grid>
      </Grid>
      {/* </Stack> */}
    </Container>
  )
}

export default App;
