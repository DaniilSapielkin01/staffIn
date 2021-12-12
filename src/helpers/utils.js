import { v4 as uuid } from 'uuid';

export const clearLocalStorageKey = key => key.forEach(k => localStorage.removeItem(k))

export const s2ab = s => {
  let buf = new ArrayBuffer(s.length);
  let view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
};

/* waiting for order type from backend something like -last_name, where last_name this is column name. if "-" - desc, without asc */
export const parseWeirdSort = string => {
  const parsed = string.split('-');

  if(parsed.length == 1) {
    return { sort: 'asc', colId: parsed[0] }
  }

  else if(parsed.length == 2) {
    return { sort: 'desc', colId: parsed[1] }
  }
};

export const generateID = () => {
  const id = uuid().split('-').join('_');
  return `c_${id}`;
};

export const phoneRegExp = /^(\+?(\d[() \-/]*){3,20})$/;
export const instagramRegExp = /^[a-z0-9_]+$/i;
export const twitterRegExp = /^[a-z0-9_]+$/i;
export const facebookRegExp = /^[a-z0-9.]+$/i;
export const urlRegExp = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)+$/;

// // Uses to get the correct timestamp for date fields Date and Datetime with Formik handler
// export const formattedTimestamp = datetime => parseInt(Moment(datetime).format('X'), 10) * 1000;
