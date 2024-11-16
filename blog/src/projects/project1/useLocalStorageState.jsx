import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  //1.如果local strogae没有data,返回initialState给value
  //2.如果local storage有data,返回data给value
  const [value, setValue] = useState(function () {
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
