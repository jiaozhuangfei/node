/**
 * react如何跟jquery bootstrap进行集成并进行后台调用
 * 1.
 **/
let Suggest = React.createClass({
    getInitialState(){
      return {words:[],currentIndex:-1,word:''};
    },
    // 上=38 下=40
    handleKeyUp(event){
        let code = event.keyCode;
        if(code == 40 || code == 38){
            var newIndex;
            if(code == 40){//焦点下移
                 newIndex = this.state.currentIndex+1;
                if(newIndex >= this.state.words.length){
                    newIndex = 0;
                }
            }else if(code == 38){//焦点上移
                 newIndex = this.state.currentIndex-1;
                if(newIndex < 0){
                    newIndex = this.state.words.length-1;
                }
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
            //取得输入框的值
            var word = event.target.value;
            // https://www.baidu.com/su?wd=a&cb=md
            /**
             * 1.外面暂存this,里面使用
             * 2.箭头函数
             * 3.context
             */
            //调用百度的jsonp接口获取联想词
            $.ajax({
                url:'http://www.baidu.com/su',
                method:'GET',//请求方法
                jsonp:'cb',//指定传递回调方法名字的参数名
                //jsonp会把外层的方法调用给去掉，把里面的对象转成JSON传递给success回调函数
                dataType:'jsonp',//返回的数据类型是jsonp
                //https://www.baidu.com/su?cb=jQuery111107917659857405164_1483005925993&wd=a&name=zfpx&_=1483005925994
                data:{wd:word,name:'zfpx'},//发送的数据，如果get请求会转成查询字符串追加到url后面
                context:this,//用于绑定回调函数中this指针
                success(result){//成功的回调
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
                    <input type="text" value={this.state.word} className="form-control" onKeyUp={this.handleKeyUp} onChange={this.handleChange}/>
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