import smoothscroll from "smoothscroll-polyfill";

const polyfills = {
  smoothScrollBehavior: { apply: () => smoothscroll.polyfill() },
};

export default polyfills;
