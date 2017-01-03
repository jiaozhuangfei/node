let names = ['没毛','没毛','没毛'];
//
ReactDOM.render(<ul>
    {
        names.map(function(name,index){
            return <li key={index}>{name}</li>
        })
    }
</ul>,app);