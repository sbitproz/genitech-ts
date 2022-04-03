import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";
import { appRootLocation } from "@commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";

const generate = (config: Config) => {
  const template = `
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { colors } from '{{application}}/${MODULE.UI}';

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
  `

  return {
    template: translate(template,config),
    title: `App builder`,
    fileName: `${appRootLocation(config)}layout/BaseLayout/BaseLayout.tsx`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;
