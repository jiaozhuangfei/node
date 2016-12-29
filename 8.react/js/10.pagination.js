//分页组件
/**
 * 1. total指的是总页数，number指的是当前页码
 * 2. total指的是要显示多少个li,number是几，那么对应的li要增加active样式
 * 3. 如果当前页是第一页，不显示上一页
 *    如果当前页最后一页，则不显示下一页
 */
let Pagination = React.createClass({
   getInitialState(){
     return {number:this.props.number};
   },
    //修改当前页
   changeNumber(number){
       this.setState({number});
   },
   render(){
       let pages = [];//存放所有分页按钮
       if(this.state.number > 1){//如果当前页大于第1页
           //current 是如果点击此分页按钮，跳转到哪一页=当前页减去1
           //class因为永远不要高亮，所以给个空即可。key只要不跟别的分页按钮冲突即可。0
           pages.push(<Page changeNumber={this.changeNumber} target={this.state.number-1} class={''} key={0}>&laquo;</Page>);
       }
       //循环总页码，往数组中放总页码个分页按钮
       for(let i=1;i<=this.props.total;i++){
           pages.push(<Page changeNumber={this.changeNumber}  class={this.state.number==i?'active':''} key={i} target={i}>{i}</Page>);
       }
       //如果当前页小于总页码
       if(this.state.number < this.props.total){
           pages.push(<Page target={this.state.number+1} changeNumber={this.changeNumber} class={''} key={-1}>&raquo;</Page>);
       }
       return (
           <nav>
               <ul className="pagination">
                   {
                       pages
                   }
               </ul>
           </nav>
       )
   }
});
let Page  = React.createClass({
    render(){
        return <li onClick={()=>{
            this.props.changeNumber(this.props.current)}
        } className ={this.props.class}><a href="#">{this.props.children}</a></li>;
    }
});

ReactDOM.render(<Pagination total={5} number={3}/>,document.querySelector('#container'));