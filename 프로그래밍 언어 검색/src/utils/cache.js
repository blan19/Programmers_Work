const cache = getlocalStorege(list);

const getlocalStorege = () => {
  const list = JSON.parse(localStorage.getItem("list"));
  if (list) return list;
  return null;
};

const setLocalStorage = (list) => {
  localStorage.setItem("list", JSON.stringify(list));
};

const isCaching = (list) => {
  const _list = getlocalStorege();
  if (JSON.stringify(list) !== JSON.stringify(_list)) return false;
  return true;
};

export { getlocalStorege, setLocalStorage, isCaching };
export default cache;
