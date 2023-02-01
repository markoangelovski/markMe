const useLocalStorage = () => {
  const get = key => JSON.parse(localStorage.getItem(key));
  const set = (key, payload) =>
    localStorage.setItem(key, JSON.stringify(payload));
  const del = key => localStorage.removeItem(key);

  return { get, set, del };
};

export default useLocalStorage;
