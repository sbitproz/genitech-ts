
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectLayout = (state: RootState) => state.layout

export const selectLayoutExpandLeftSidebar = createSelector(
  selectLayout,
  ({ expandLeftSidebar }) => expandLeftSidebar
)
export const selectLayoutExpandRightSidebar = createSelector(
  selectLayout,
  ({ expandRightSidebar }) => expandRightSidebar
)
