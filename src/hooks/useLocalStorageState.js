import { useState, useEffect } from 'react';

const useLocalStorageState = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    let val;
    try {
      if(JSON.parse(window.localStorage.getItem(key)) && JSON.parse(window.localStorage.getItem(key)).length > 0){
        val = JSON.parse(window.localStorage.getItem(key));
      }
      else{
        val = defaultVal;
      }
    }
    catch(e){
      val = defaultVal;
    }
    console.log('from custom hook');
    console.log(val);
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key]);
  return [state, setState];
}

export default useLocalStorageState;