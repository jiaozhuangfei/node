/**
 * 1. 定义初始状态对象 {val:''}
 * 2. 为input绑定onChange事件，当用户输入的时候执行 handleChange方法，
 *在方法里面通过 event.target.value获取最新的输入框的值，然后调用setState方法修改状态对象
 * 3. 修改完成后render会重新渲染，P标签里的表达式也会重新渲染为最新的值
 *
 * @type {*}
 */
let Input = React.createClass({
   getInitialState(){
      return {val:''}
   } ,
   handleChange(event){
    //event事件对象 target 事件源(是真实的DOM对象)
    var newVal = event.target.value;
    this.setState({val:newVal});
   },
   render(){
         return (
             <div>
                 <p>{this.state.val}</p>
                 <input onChange={this.handleChange} type="text"/>
             </div>
         )
   }
});

ReactDOM.render(<Input/>,document.querySelector('#container'));