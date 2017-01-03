//首字母必须大写字母开头   小写开头会被react当作内置组件处理
var Message = React.createClass({
    //表示此组件将会被如何渲染
    render(){
        //有且只能返回一个顶级元素
        return (
            <div>
                珠峰培训
            </div>
        )

    }
});
// h1 div
ReactDOM.render(<Message>hello</Message>,app);