import { TextField, Typography, Stack, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system'
import React, { useRef, useState } from 'react';
import { NumericFormat } from 'react-number-format'

function App() {
  const [ad, setAd] = useState(new Date().getFullYear())
  const [isMeiji, setIsMeiji] = useState(false)
  const [isTaisho, setIsTaisho] = useState(false)
  const [isShowa, setIsShowa] = useState(false)
  const [isHeisei, setIsHeisei] = useState(false)
  const [isReiwa, setIsReiwa] = useState(true)

  const onChangeHandle = (e) => {
    const val = Number(e.target.value)
    let current = ad
    switch (e.target.id) {
      case "AD":
        current = val
        break
      case "meiji":
        current = val + 1867
        break
      case "taisho":
        current = val + 1911
        break
      case "showa":
        current = val + 1925
        break
      case "heisei":
        current = val + 1988
        break
      case "reiwa":
        current = val + 2018
        break
    }
    setAd(current)
    if (1867 < current && current <= 1911){
      setIsMeiji(true)
      setIsTaisho(false)
      setIsShowa(false)
      setIsHeisei(false)
      setIsReiwa(false)
    }else if (1911 < current && current <= 1925 ){
      setIsMeiji(false)
      setIsTaisho(true)
      setIsShowa(false)
      setIsHeisei(false)
      setIsReiwa(false)
    }else if (1925 < current && current <= 1988 ){
      setIsMeiji(false)
      setIsTaisho(false)
      setIsShowa(true)
      setIsHeisei(false)
      setIsReiwa(false)
    }else if (1988 < current && current <= 2018 ){
      setIsMeiji(false)
      setIsTaisho(false)
      setIsShowa(false)
      setIsHeisei(true)
      setIsReiwa(false)
    }else if (2018 < current ){
      setIsMeiji(false)
      setIsTaisho(false)
      setIsShowa(false)
      setIsHeisei(false)
      setIsReiwa(true)
    }else{
      setIsMeiji(false)
      setIsTaisho(false)
      setIsShowa(false)
      setIsHeisei(false)
      setIsReiwa(false)
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
            <NumericFormat
                id="AD"
                label="西暦"
                value={ad}
                onChange={onChangeHandle}
                customInput={TextField}
              />
          </Stack>
        </Grid>
        <Grid xs>
          <Stack direction="column" spacing={2}>
            <NumericFormat
              id="meiji"
              label="明治"
              value={ad - 1867}
              focused={isMeiji}
              color={isMeiji ? "secondary" : ""}
              customInput={TextField}
              onChange={onChangeHandle}
            />
            <NumericFormat
              id="taisho"
              label="大正"
              value={ad - 1911}
              focused={isTaisho}
              color={isTaisho ? "secondary" : ""}
              customInput={TextField}
              onChange={onChangeHandle}
            />
            <NumericFormat
              id="showa"
              label="昭和"
              value={ad - 1925}
              focused={isShowa}
              color={isShowa ? "secondary" : ""}
              customInput={TextField}
              onChange={onChangeHandle}
            />
            <NumericFormat
              id="heisei"
              label="平成"
              value={ad - 1988}
              focused={isHeisei}
              color={isHeisei ? "secondary" : ""}
              customInput={TextField}
              onChange={onChangeHandle}
            />
            <NumericFormat
              id="reiwa"
              label="令和"
              value={ad - 2018}
              focused={isReiwa}
              color={isReiwa ? "secondary" : ""}
              customInput={TextField}
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
