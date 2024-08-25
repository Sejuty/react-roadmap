import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  console.log(savedValue);

  if (savedValue) return savedValue;

  //   If you pass a function to useState, that function will only run once, when the component is first rendered. This is different from passing a value directly, where the initialization logic would run on every render
    if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
