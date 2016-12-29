/**
 * react如何跟jquery bootstrap进行集成并进行后台调用
 * 1.
 **/
let Suggest = React.createClass({
    getInitialState(){
      return {words:[],currentIndex:-1,word:''};
    },
    // 上=38 下=40
    handleKeyDown(event){
        let code = event.keyCode;
        if(code == 40 || code == 38){
            if(code == 40){//焦点下移
                var newIndex = this.state.currentIndex+1;
                if(newIndex >= this.state.words.length){
                    newIndex = 0;
                }
            }else if(code == 38){//焦点上移
                var newIndex = this.state.currentIndex-1;
                if(newIndex < 0){
                    newIndex = this.state.words.length-1;
                }
                this.setState({currentIndex:newIndex});
            }
            this.setState({currentIndex:newIndex},()=>{
                let selectedWord = this.state.words[this.state.currentIndex];
                this.setState({word:selectedWord},()=>{
                    if(this.timer){
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(function(wd){
                        window.location.href=`https://www.baidu.com/s?wd=${selectedWord}`;
                    },2000);
                });

            });
        } else{
            var word = event.target.value;
            // https://www.baidu.com/su?wd=a&cb=md
            /**
             * 1.外面暂存this,里面使用
             * 2.箭头函数
             * 3.context
             */
            $.ajax({
                url:'http://www.baidu.com/su',
                method:'GET',
                jsonp:'cb',//指定传递回调方法名字的参数名
                dataType:'jsonp',//返回的数据类型是jsonp
                data:{wd:word},
                context:this,//用于绑定回调函数中this指针
                success(result){
                    var words = result.s;
                    this.setState({words});
                }
            })
        }

    },
    handleChange(event){
      this.setState({word:event.target.value});
    },
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input type="text" value={this.state.word} className="form-control" onKeyUp={this.handleKeyDown} onChange={this.handleChange}/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.words.map((item,index)=>{
            return <li key={index} className={"list-group-item "+(this.state.currentIndex==index?'active':'')}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest/>,document.querySelector('#container'));