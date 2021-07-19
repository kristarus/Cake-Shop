import { createSelector } from "@reduxjs/toolkit";

const requestsSelector = (state) => state.requests;

export const isAuthenticatedSelector = createSelector(
  requestsSelector,
  (requests) => requests
);
