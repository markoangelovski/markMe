const useLocalStorage = () => {
  const get = key => JSON.parse(localStorage.getItem(key));
  const set = (key, payload) =>
    localStorage.setItem(key, JSON.stringify(payload));

  return { get, set };
};

export default useLocalStorage;
