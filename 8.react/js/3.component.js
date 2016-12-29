/**
 定义自定义组件 div li
 组件的首字母必须大写，小会被忽略掉
 1.如果首字母小写，会把它当作html原始标签渲染。
 2. 如果首字母大写，会当成自定义组件来进行渲染

 **/
let Message = React.createClass({
    //定义自己如何被渲染
    //1.有且只能一个顶级元素
   render(){
       return (
           <div>
               <h2>你好</h2>
           </div>
           )
   }
});
/*var m = new Message();
它是类的原形prototype
var returnVal = m.render();*/


ReactDOM.render(<Message/>,document.querySelector('#container'));

