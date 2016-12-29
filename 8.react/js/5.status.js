/**
 * 1.状态只能在组件内部初始化
 *
 */
var Person = React.createClass({
    //定义初始状态
    getInitialState(){
      return {happy:true}
    },
    handleClick(){
        //setState用来修改状态对象，修改完成后会重新触发组件的渲染
       this.setState({happy:!this.state.happy});
    },
    render(){
        console.log('render');
        //this.state可以指向状态对象
        var heart = this.state.happy?'开心':'不开心';
        return (
            <div>
                <p>{heart}</p>
                <button onClick={this.handleClick}>变心</button>
            </div>
        )
    }
});

ReactDOM.render(<Person></Person>,document.querySelector('#container'));