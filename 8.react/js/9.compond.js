let Panel = React.createClass({
    render(){
        return (
            <div className={"panel panel-"+this.props.class}>
                <PanelHead content={this.props.head}></PanelHead>
                <PanelBody>{this.props.body}</PanelBody>
                <PanelFooter content={this.props.footer}></PanelFooter>
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
                {this.props.children}
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


ReactDOM.render(<Panel class="success" head="面板头" body="面板体" footer="面板尾"></Panel>,document.querySelector('#container'));