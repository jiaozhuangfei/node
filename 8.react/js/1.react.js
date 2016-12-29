/**
 * 1. react.js 会在window下增加一个 React
 * 2. react-dom.js 会在window下增加一个ReactDOM
 * jsx=javascript+xml=js+x
 * 是一种JS代码和HTML混合的一种写法
 * 这种写法浏览器不认识，所以需要babel进行翻译
 * h1 虚拟DOM 是一个虚拟的数据结构
 *   {type:'h1',text:'欢迎',style:{color:'red'},className:'red'}
 * 虚拟DOM会进行转义，转成一个数据结构，然后转成真实的DOM插入到容器中
 *
 **/
var style = {color:'red'};
//转成真实的DOM并插入到container中
function render(dom,container){
  /*let h1 = document.createElement(dom.type);
  h1.innerHTML = dom.text;
  h1.className = dom.className;
  for(var attr in dom.style){
      h1.style[attr] = dom.style[attr];
  }
  container.appendChild(h1);*/
  container.innerHTML= `<${dom.type}>${dom.text}</${dom.type}>`;
}
render({type:'h1',text:'欢迎',style:{color:'red'}},document.querySelector('#container'))
/**
 * 遇到 { 是JS代码，其实是表达式
 * 遇到 <就是HTMl标签
 * ng {{}} vue {{}} ejs <%=%>
 *     表达式 就是一些变量和操作符的混合
 *     作用是
 */
var name = '马超';
ReactDOM.render(
    <h1 htmlFor="ddd" className="red" style={style}>欢迎 {name+'2'}</h1>,document.querySelector('#container')
);

/*

function render(html,container){
    container.innerHTML = html;
}*/
