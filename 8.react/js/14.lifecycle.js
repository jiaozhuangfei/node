/*
  组件的生命周期

 */
var Counter = React.createClass({
    //获取默认属性对象
    getDefaultProps(){
        console.log('1.getDefaultProps 获取默认属性对象');
        return {name:'珠峰培训'};
    },
    //获取初始状态对象
    getInitialState(){
        console.log('2.getInitialState 获取初始状态对象');
        return {count:1};
    },
    componentWillMount(){
        console.log('3.componentWillMount 组件将要被挂载到DOM容器内部');
    },
    handleClick(){
        console.log('100.handleClick 点击');
      this.setState({count:this.state.count + 1});
    },
    deleteMe(){
      ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    },
    render(){
        console.log('4.render 把组件挂载到DOM容器内部');
        return (
            <div style={{border:'1px solid red'}}>
                <p ref="counter">{this.state.count}</p>
                <button onClick={this.handleClick}>父组件加1</button>
                <button onClick={this.deleteMe}>把我删除掉</button>
                <ChildCounter count={this.state.count}/>
            </div>
        )
    },

    componentDidMount(){
        var oldContent = this.refs.counter.innerHTML;
        this.refs.counter.innerHTML = `第${oldContent}次`;
        console.log('5.componentDidMount 组件挂载完成后')
    },
    // 组件是否应该被更新
    //1参数是新的属性对象 2参数是新的状态对象
    //返回一个布尔值，返回true表示可以更新，返回false表示不能更新
    shouldComponentUpdate(newProps,newState){
        console.log('6.shouldComponentUpdate 组件是否应该被更新')
       if(newState.count <10){
           return true;
       }else{
           return false;
       }
    },
    //组件将要被更新
    componentWillUpdate(){

        console.log('7. componentWillUpdate 组件将被更新');
    },
    //组件将要被更新
    componentDidUpdate(){
        var oldContent = this.refs.counter.innerHTML;
        this.refs.counter.innerHTML = `第${oldContent}次`;
        console.log('8. componentDidUpdate 组件更新完成后');
    }
})

var ChildCounter = React.createClass({
    //组件将要接收到新的属性
    componentWillReceiveProps(){
        console.log('子组件 componentWillReceiveProps 组件将要接收到新的属性');
    },
    shouldComponentUpdate(newProps,newState){
        console.log('子组件 shouldComponentUpdate 组件是否应该被更新')
        if(newProps.count <5){
            return true;
        }else{
            return false;
        }
    },
    render(){
        return (
            <div style={{border:'1px solid green'}}>
                <p>{this.props.count}</p>
                <button>子组件加1</button>
            </div>
        )
    }
});

ReactDOM.render(<Counter/>,document.getElementById('container'));