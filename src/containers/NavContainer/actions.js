/*
 *
 * NavContainer actions
 *
 */

import {
  NAV_PUSH,
  NAV_POP,
  NAV_JUMP_TO_KEY,
  NAV_JUMP_TO_INDEX,
  NAV_RESET,
} from './constants';

export const navigatePush = (payload) => ({
  type: NAV_PUSH,
  payload,
});

export const navigatePop = () => ({
  type: NAV_POP
});

export const navigateJumpToKey = (payload) => ({
  type: NAV_JUMP_TO_KEY,
  payload,
});

export const navigateJumpToIndex = (payload) => ({
  type: NAV_JUMP_TO_INDEX,
  payload,
});

export const navigateReset = () => ({
  type: NAV_RESET,
});
