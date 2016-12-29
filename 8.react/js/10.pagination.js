//分页组件
let Pagination = React.createClass({
   render(){
       return (
           <nav>
               <ul className="pagination">
                   <Page/>
                   <Page/>
                   <Page/>
                   <Page/>
                   <Page/>
                   <Page/>
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