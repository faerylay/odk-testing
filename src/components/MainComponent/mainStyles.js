import { styled } from '@mui/material/styles';

export const drawerWidth = 260;
export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, height }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  marginTop: height / 15,
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  background: '#f5f5f5',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}));

