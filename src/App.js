import { TextField, Typography, Stack, Box } from '@mui/material'
import { Container } from '@mui/system'
import React, { useRef, useState } from 'react';
import { NumericFormat } from 'react-number-format'

function App() {
  const [ad, setAd] = useState(new Date().getFullYear())

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
    console.log(ad)
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height:50
        }}
      ></Box>
      <Stack direction="row" spacing={5}>
        <NumericFormat
            id="AD"
            label="西暦"
            value={ad}
            customInput={TextField}
            onChange={onChangeHandle}
          />
        <Stack direction="column" spacing={2}>
          <NumericFormat
            id="meiji"
            label="明治"
            value={ad - 1867}
            customInput={TextField}
            onChange={onChangeHandle}
          />
          <NumericFormat
            id="taisho"
            label="大正"
            value={ad - 1911}
            customInput={TextField}
            onChange={onChangeHandle}
          />
          <NumericFormat
            id="showa"
            label="昭和"
            value={ad - 1925}
            customInput={TextField}
            onChange={onChangeHandle}
          />
          <NumericFormat
            id="heisei"
            label="平成"
            value={ad - 1988}
            customInput={TextField}
            onChange={onChangeHandle}
          />
          <NumericFormat
            id="reiwa"
            label="令和"
            value={ad - 2018}
            customInput={TextField}
            onChange={onChangeHandle}
          />
        </Stack>
      </Stack>
    </Container>
  )
}

export default App;
