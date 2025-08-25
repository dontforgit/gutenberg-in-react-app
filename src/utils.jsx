import {
  select,
  dispatch,
} from '@wordpress/data';

export function setGlobals() {
  // set global djwp object
  window.djwp = {
    data : {
      select,
      dispatch,
    }
  }
}
