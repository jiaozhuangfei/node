let Board = React.createClass({
 render(){
     return (
         <div className="panel panel-default">
             <div className="panel-heading">
                <h1>珠峰留言版</h1>
             </div>
             <div className="panel-body">
                <ul className="list-group">

                </ul>
             </div>
             <div className="panel-footer">
                 <input type="text" className="form-control"/>
                 <button className="btn btn-primary">留言</button>
             </div>
         </div>
     )
 }
});
ReactDOM.render(<Board/>,document.querySelector('#container'));