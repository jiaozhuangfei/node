var names = ['马英九','马英九','马云'];
/**
 * render第一个参数要求 是一个标签，必须有且只有一个顶级元素
 */
ReactDOM.render(
    <ul>
        {
            names.map(function(item,index){
                return <li key={index}>{item}</li>;
            })
        }
    </ul>
    ,document.querySelector('#container'));