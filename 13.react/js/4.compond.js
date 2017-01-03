let Panel = React.createClass({
    render(){
        //this.props {head:'头'.....}
        return (
            <div>
                <h2>{this.props.children}</h2>
                <div className="panel panel-default">
                    <PanelHead content={this.props.head}></PanelHead>
                    <PanelBody content={this.props.body}></PanelBody>
                    <PanelFooter content={this.props.tail}></PanelFooter>
                </div>
            </div>
        )
    }
});
let PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">
                {this.props.content}
            </div>
        )
    }
});
let PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                {this.props.content}
            </div>
        )
    }
});
let PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">
                {this.props.content}
            </div>
        )
    }
});
ReactDOM.render(<Panel head="头" body="体" tail="尾"><span>我是1</span><span>我是2</span><span>我是3</span></Panel>,app);


