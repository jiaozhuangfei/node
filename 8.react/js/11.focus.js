/**
 * 如何在react中操作DOM元素
 */

let Focus = React.createClass({
    //这个例子显示了如何在方法获取DOM元素
    handleClick(event){
        console.log(this.refs);
        this.refs.myTxt.focus();
        alert(this.refs.myTxt.value);
    },
    render(){
       return (
           <div>
               <input ref="myTxt" type="text"/>
               <button onClick={this.handleClick}>获得焦点</button>
           </div>
       )
    }
});

ReactDOM.render(<Focus/>,document.querySelector('#container'));