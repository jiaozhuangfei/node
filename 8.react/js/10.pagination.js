//分页组件
/**
 * 1. total指的是总页数，number指的是当前页码
 * 2. total指的是要显示多少个li,number是几，那么对应的li要增加active样式
 * 3. 如果当前页是第一页，不显示上一页
 *    如果当前页最后一页，则不显示下一页
 */
let Pagination = React.createClass({
   render(){
       let pages = [];
       for(let i=1;i<=this.props.total;i++){
           pages.push(<Page key={i}></Page>);
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
        return <li><a href="#">&laquo;</a></li>;
    }
});

ReactDOM.render(<Pagination total={5} number={1}/>,document.querySelector('#container'));