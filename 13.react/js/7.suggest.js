var Suggest = React.createClass({
    getInitialState(){
      return {word:'',words:[],index:-1}
    },
    keyUp(event){
        var code = event.keyCode;
        if(code == 38 || code == 40 ){//上
            if(code == 38){
                this.state.index -= 1;
                if(this.state.index<0)
                    this.state.index = this.state.words.length-1;
            }else if(code == 40){
                this.state.index += 1;
                if(this.state.index>=this.state.words.length)
                    this.state.index = 0;
            }
            //setState是异步的
            this.setState({index:this.state.index},()=>{
                this.setState({word:this.state.words[this.state.index]},function(){
                    if(this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = window.setTimeout(()=>{
                        window.open(`https://www.baidu.com/s?wd=${this.state.word}`,'_self');
                    },3000)
                });
            });

            return ;
        }

        var wd = event.target.value;
        $.ajax({
            url:'http://www.baidu.com/su',
            method:'GET',
            dataType:'jsonp',
            jsonp:'cb',
            data:{wd},
            context:this,//指定回调函数中的this指针
            success(result){
                this.setState({words:result.s});
            }
        })
    },
    handleChange(event){
      this.setState({word:event.target.value});
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input type="text" value={this.state.word} className="form-control" onKeyUp={this.keyUp} onChange={this.handleChange} />
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.words.map((word,index)=>{
                                return <li  className={"list-group-item " + (index == this.state.index?'active':'')} key={index}>{word}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest/>,app);