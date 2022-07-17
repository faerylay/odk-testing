import React from 'react'
import { Button, Typography, Box, ImageList, ImageListItem, ImageListItemBar, useTheme, useMediaQuery } from '@mui/material'


const Certificates = ({ getUser, fetchMore, setLimit }) => {

  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const download = async (originalImage) => {
    const image = await fetch(originalImage);
    //Split image name
    const nameSplit = originalImage.split("/");
    const duplicateName = nameSplit.pop();
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    const link = document.createElement('a')
    link.href = imageURL;
    link.download = "" + duplicateName + "";
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  };

  const loadMore = () => {
    const currentLength = getUser?.user?.certificates?.length;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 4,
      },
    }).then(fetchMoreResult => {
      setLimit(currentLength + fetchMoreResult.data.getUser.user.certificates.length);
    });
  };
  return (
    <Box>
      <ImageList cols={matchDownMd ? 1 : 2} gap={8} sx={{ width: '100%' }}>
        {getUser?.user?.certificates?.map((item) => (
          <ImageListItem key={item.id} sx={{ border: 1, borderColor: '#ccc' }}>
            <img
              src={item.image}
              alt="..."
              width="100%"
              height="100%"
              loading="lazy"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}>
              <ImageListItemBar
                title={<Typography variant='span' sx={{ fontSize: { xs: 10, md: 12 } }}>{item.fullname}</Typography>}
                subtitle={<Typography variant='h5' sx={{ mt: { xs: 1, md: 0 } }} >Months - {item.months}</Typography>}
                position="below"
              />
              <Box>
                <Button onClick={() => download(item.image)} variant='outlined' >
                  <Typography>Download</Typography>
                </Button>
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        {
          getUser?.user?.certificates?.length !== getUser?.certiCount ? (
            <Button variant='outlined' onClick={loadMore}>load more</Button>
          ) : (
            <Typography>All Data has Loaded...</Typography>
          )
        }
      </Box>
    </Box>
  )
}


export default Certificates

