
import { PayloadAction } from '@reduxjs/toolkit';
import { PutEffect } from 'redux-saga/effects';

export type PutPayload<T> = PutEffect<PayloadAction<T>>;
  