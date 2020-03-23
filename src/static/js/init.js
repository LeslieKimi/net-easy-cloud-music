// 自动适配文件
const reset = (function() {
  function autoRootFontSize() {
    var html = document.documentElement;
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 23.4375 + "px"; //至于除数可自行设置
  }
  window.addEventListener("resize", autoRootFontSize);
  autoRootFontSize();
  //1rem=16px;
})();
export { reset };
