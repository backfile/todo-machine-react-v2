import React from "react";


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  


  React.useEffect(()=>{
    setTimeout(()=>{
          try {
            setTimeout;
            const localStorageItems = localStorage.getItem(itemName);
            let parsedItem;
            if (!localStorageItems) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
            } else {
              parsedItem = JSON.parse(localStorageItems);
              setItem(parsedItem);
            }

            setLoading(false);
          } catch (error) {
            setLoading(false);
            setError(true);
          }
    }, 500)
  }, []);

  

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItems,
    error,
    loading
};
}

export { useLocalStorage }