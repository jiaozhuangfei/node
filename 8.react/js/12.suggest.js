/**
 * react如何跟jquery bootstrap进行集成并进行后台调用
 * 1.
 **/
let Suggest = React.createClass({
    getInitialState(){
      return {words:[]};
    },
    handleKeyDown(event){
        var word = event.target.value;
        // https://www.baidu.com/su?wd=a&cb=md
        $.ajax({
            url:'http://www.baidu.com/su',
            method:'GET',
            jsonp:'cb',//指定传递回调方法名字的参数名
            dataType:'jsonp',//返回的数据类型是jsonp
            data:{wd:word},
            success(result){
                var words = result.s;

            }
        })
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input type="text" className="form-control" onKeyDown={this.handleKeyDown}/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {

                        }
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest/>,document.querySelector('#container'));