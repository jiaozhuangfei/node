var Focus = React.createClass({
    handleClick(event){
        //refs 是一个对象 key是myTxt 值是此myTxt对应的DOM元素
       this.refs.myTxt.focus();

    },
    render(){
        return (
            <div>
                <input id="one" ref="myTxt" type="text"/>
                <button onClick={this.handleClick}>获得焦点</button>
            </div>
        )
    }
});
ReactDOM.render(<Focus></Focus>,app);