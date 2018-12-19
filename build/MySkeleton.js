let MySkeleton = function (obj) {
    this.__init(obj);
};
MySkeleton.prototype = {
    __init(obj) {
        this.template = obj.template;
    },
    apply(complier) {  //webpack传进来的编译器
        console.log('打印编译器');
        console.log(complier);
        complier.plugin('compilation', compilation => {  //编译时的对象
            compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, callback) => {
                console.log(htmlData.html);
                htmlData.html = htmlData.html.replace(
                    `<div id="app"></div>`,
                    `<div id="app">
     <div id="a" style="display: none; background: skyblue;height:400px">骨架屏1</div>
     <div id="b" style="display: none; background: red;height:500px">骨架屏2</div>
</div>

<script>
window.onload = () => {
    let hashPath = location.hash;  //#/a  ||  #/b
    let historyPath = location.pathname;  //    /a || /b
    
    if (hashPath === '#/a' || historyPath === '/a') {
        document.getElementById('a').style.display = 'block';
    } else if (hashPath === '#/b' || historyPath === '/b') {
        document.getElementById('b').style.display = 'block';
    }
}
</script>





`)

                callback(null, htmlData);
            })
        })
    }
};

/*class MySkeleton {
  constructor (obj) {
    this.template = obj.template;
  }
  apply (complier) {  //webpack传进来的编译器
    console.log('打印编译器');
    console.log(complier);
    complier.plugin('compilation', compilation => {  //编译时的对象
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, callback) => {
        console.log(htmlData.html);
        htmlData.html = htmlData.html.replace('<div id="app"></div>', '<div id="app">测试骨架屏</div>')

        callback(null, htmlData);
      })
    })
  }
}*/

module.exports = MySkeleton;
