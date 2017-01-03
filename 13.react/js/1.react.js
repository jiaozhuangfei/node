/**
 * react是一个用于构建用户界面的库 MVVM
 * Model 数据
 * V view 视图
 * VM view model
 * react.js -> window.React
 * react-dom.js -> window.ReactDOM
 **/
/**
 * 1参数是你要画什么
 * 2. 参数 是你要画在哪里
 */
/*function render(html,dom){
 dom.innerHTML = html;
}*/
/**
 * jsx javascript+xml(html)
 * 是一种JS和html混合的一种写法
 * 1. 渲染的时候先把虚拟DOM转成JS数据结构
 * 2.
 */
/*function render(tag,dom){
  let ele = document.createElement(tag.tagName);
  ele.innerText = tag.text;
  for(var attr in tag.style){
      ele.style[attr] = tag.style[attr];
  }
  dom.appendChild(ele);
}
render({
    tagName:'h1',
    style:{color:'red'},
    text:'你好珠峰培训'
},document.querySelector('#app'));*/

ReactDOM.render(<h1 className="color">你好珠峰培训</h1>,document.querySelector('#app'));

