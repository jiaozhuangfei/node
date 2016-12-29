/**
 * this.props是指这个实例的属性对象
 * {name:"高红",gender:"女"}
 * 1. 属性从外界传入
 * 2. 属性传到组件之后，可以通过 this.props读取，但不能修改
 * Failed prop type: The prop `gender` is marked as required in `Person`, but its value is `undefined`.
 * gener属性被标识为必填，但现有提供
 */
let Person = React.createClass({
    //设置默认属性对象
    getDefaultProps(){
      return {gender:'男'};
    },
    //规定了此组件的属性的名称，是否必填 ，以及类型
    propTypes:{
        name:React.PropTypes.string.isRequired,
        gender:React.PropTypes.string.isRequired,
    },
    render(){
        return (
            <div>
                姓名: {this.props.name}<br/>
                性别: {this.props.gender}
            </div>
        )
    }
});

ReactDOM.render(<Person name={123} gender="女" />,document.querySelector('#container'));