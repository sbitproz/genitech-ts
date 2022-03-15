
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { colors } from 'web-app/core-ui';

const StyledContent = styled(Box)({
  background: colors.blue100,
  height: '93%',
  display: 'flex',
});

const { StyledContent } = styles;

interface BaseLayoutProps { }

const BaseLayout: React.FC<BaseLayoutProps> = () => {
  return (
    <>
      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  );
};

export default BaseLayout;  
  