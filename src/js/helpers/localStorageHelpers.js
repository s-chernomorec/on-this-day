const LS = () => {

  let storageIsAvaible = null;

  let init = () => {
    try {
      let test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      storageIsAvaible = true;
    }

    catch(e) {
      storageIsAvaible = false;
      console.warn('localStorage is not avaible, consider using newer browser');
    }
  };

  let action = (method, ...rest) => {
    switch (storageIsAvaible) {
      case true:
        return localStorage[method](...rest);
      case null:
        init();
        return localStorage[method](...rest);
      case false:
        console.warn('localStorage is not avaible, consider using newer browser');
        return null;
    }
  };

  let set = (key, val) => action('setItem', key, JSON.stringify(val));

  let get = (key) => JSON.parse(action('getItem', key));

  let remove = (key) => action('removeItem', key);

  let clear = () => action('clear');

  return {
    set,
    get,
    remove,
    clear
  };

};

export default LS();
