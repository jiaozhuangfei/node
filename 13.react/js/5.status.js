/**
 * 状态只能由内部初始化，只能由组件内部改变
 */
var Counter = React.createClass({
    //内部初始化状态
    getInitialState(){
        return {count:0};
    },
    handleClick(){
        //修改状态,调完此方法，react会自动调用render方法重新绘制界面
        this.setState({count:this.state.count +1 });
    },
    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>加1</button>
            </div>
        )
    }
});
ReactDOM.render(<div><Counter/><Counter/></div>,app);