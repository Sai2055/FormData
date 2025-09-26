export default function Debounce() {
  function getApiData() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.users);
      });
  }
  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      console.log("came");
      const thisArg = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        fn.call(thisArg, args);
      }, delay);
    };
  }

  function handleChange() {}
  return (
    <>
      <input type="text" onChange={debounce(getApiData, 500)} />
    </>
  );
}
export const testing = "testing";
