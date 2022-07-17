import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/MainComponent'

const CongratForm = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: 'auto', width: '100%', paddingBlock: 5 }}>
        <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', padding: { lg: 5, xs: 3 }, width: { md: '60%', sm: '80%', xs: '100%' } }} >
          <Typography color="black" variant='h3' component="div" sx={{ paddingBlock: 3, fontSize: 30 }}>
            ဂုဏ်ပြုလွှာများ ရယူရန်
          </Typography>
          <Typography color="gray" variant='h5' component="div" sx={{ paddingBlock: 3 }}>
            စစ်အာဏာသိမ်းမှု ဆန့်ကျင်ရေးကော်မတီ (ကိုရီးယား) One Day Challenge မန်ဘာဝင်များ၏ လစဥ် လှူဒါန်းမှုအတွက် ဂုဏ်ပြုလွှာများကို ဤနေရာတွင် ကိုယ်တိုင် Download ရယူနိုင်ပါပြီ။
          </Typography>
          <Typography color="gray" variant='h5' component="div" sx={{ paddingBlock: 3 }}>
            မန်ဘာဝင်များအနေနဲ့ မိမိကြိုက်တဲ့အချိန်မှာ ဂုဏ်ပြုလွှာကို အလွယ်တကူ ရယူနိုင်ပါတယ်။
          </Typography>
          <Typography color="gray" variant='h5' component="div" sx={{ paddingBlock: 3 }}>
            Login ဝင်ရမယ့် အမည်ကတော့ မင်ဘာအဖြစ် စာရင်းသွင်းထားတဲ့ ID ကတ် ရှေ့ ၆ လုံးနဲ့ ဘဏ်စာအုပ်မှာပါတဲ့ အကောင့်နံပတ်ရဲ့ နောက်ဆုံး ၄ လုံး ဖြစ်ပါတယ်။ ၎င်း ၁၀ လုံးကို တစ်ဆက်တည်း ရိုက်ပါ။ ပြီးရင် Password ကိုလည်း အဲဒီ ၁၀ လုံးပဲ ပြန်ရိုက်ပါ။ ရပါပြီ။
          </Typography>
          <Typography color="gray" variant='h5' component="div" sx={{ paddingBlock: 3 }}>
            မန်ဘာဝင်များရဲ့ ရန်ပုံငွေများ အားလုံးကို လစဥ် NUGသို့ ပေးပို့ပေးနေပြီး သမ္မတကြီးကိုယ်တိုင် ကျေးဇူးတင်လွှာများ လစဥ်ပို့ပေးနေပါတယ်။
          </Typography>
          <Typography color="gray" variant='h5' component="div" sx={{ paddingBlock: 3 }}>
            မန်ဘာဝင်များကို အထူး လေးစားဂုဏ်ယူလျှက်
          </Typography>
          <Typography color="gray" variant='h5' component="div" sx={{ paddingBlock: 3 }}>
            အရေးတော်ပုံ မုချ အောင်မြင်ရမည်!!
          </Typography>
          <Button variant="outlined" color="inherit" onClick={() => navigate('/login')} >
            - LOGIN -
          </Button>
        </Paper>
      </Box>
      <Footer />

    </Box>
  )
}

export default CongratForm