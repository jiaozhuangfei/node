var Slider = React.createClass({

});
let images = [
    "./images/banner1.jpg",
    "./images/banner2.jpg",
    "./images/banner3.jpg"
]
/**
 * images 源文件
 * dots 是否显示点状导航
 * arrow 是否显示左右切换箭头
 * delay 每隔多少秒切换一次
 * speed 图片切换的速度
 */
ReactDOM.render(<Slider
  images={images}
  dots={true}
  arrow={true}
  delay={2}
  speed={1}
></Slider>,document.querySelector('#container'));

