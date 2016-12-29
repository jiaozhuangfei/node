//可在组件内部通过 this.props.children得到当前组件使用时传入子元素
/**
 * 1.给li增加点击事件
 * 2.
 */
let Message = React.createClass({
    getInitialState(){
        //默认的活动选中索引
        return {activeIndex:0};
    },
    handleClick(index){
        this.setState({activeIndex:index});
    },
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.children.map(function (item, index) {
   return <li onClick={this.handleClick.bind(this,index)} className={"list-group-item "+(this.state.activeIndex == index?'active':'')}   key={index}>{item}</li>
                    },this)
                }
            </ul>
        )
    }
});

ReactDOM.render(
<Message name="zfpx">
 <span>第一天</span>
 <span>第二天</span>
 <span>第三天</span>
</Message>,document.querySelector('#container'));
