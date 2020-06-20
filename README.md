# MVC 转到 Vue
安装Vue
![image.png](https://upload-images.jianshu.io/upload_images/12081122-d8764a3f3069df8f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
引入
![image.png](https://upload-images.jianshu.io/upload_images/12081122-f39096282737926c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Vue就是一个函数，封装的工具函数，Jquery也是
Vue有两个版本：完整版不完成版，默认不完整版
报错：你使用的是不完整版
![image.png](https://upload-images.jianshu.io/upload_images/12081122-bd71a2bedc0b3916.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
解决：
![image.png](https://upload-images.jianshu.io/upload_images/12081122-4cfe49f1caf285e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/12081122-414790a02472a260.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/12081122-6fca7a39131748d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
"alias": {
    "vue$" : "./node_modules/vue/dist/vue.common.js"//最好加上$
}
```
![image.png](https://upload-images.jianshu.io/upload_images/12081122-01c8c54c3d464f05.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
没有样式是因为Vue会用当前的div替换原来的div，
![image.png](https://upload-images.jianshu.io/upload_images/12081122-0d219e63d4d473d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
html里面的`<section id="app1"></section> `不见了
![image.png](https://upload-images.jianshu.io/upload_images/12081122-c84670601e873aca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
所以要把section再次写一遍，因为会替换
![image.png](https://upload-images.jianshu.io/upload_images/12081122-8502b960ae399258.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
怎么显示内容
之前是存在m中，Vue认为m也不需要了，所以直接都写在Vue上
![image.png](https://upload-images.jianshu.io/upload_images/12081122-15bba4e632f6bbfc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
绑定事件
不用找元素，直接写在标签上
update也没有用了，自动会帮你更新，牛逼
![image.png](https://upload-images.jianshu.io/upload_images/12081122-126285e4a7c53923.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
import './app1.css';
import Vue from "vue";

const init = (container) => {
    new Vue({
        el: container,
        data: {n: parseFloat(localStorage.getItem('n')) || 0},
        methods: {
            add() {
                // this.data.n//理论上是这样拿到n，Vue觉得没必要
                this.n += 1
            },
            minus() {
                this.n -= 1
            },
            mul() {
                this.n *= 2
            },
            divide() {
                this.n /= 2
            },
        },
        template: `
            <section id="app1">
                <div class="output">
                    <span id="number">{{n}}</span>
                </div>
                <div class="actions">
                    <button @click="add(1)">+1</button>
                    <button @click="minus">-1</button>
                    <button @click="mul">*2</button>
                    <button @click="divide">/2</button>
                </div>
            </section>
        `,
    })
}

export default init;
```
刷新不变，监听数据变化
![image.png](https://upload-images.jianshu.io/upload_images/12081122-4dd416c83869faf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
第二个模块
加冒号的意思是后面的代码是JS代码
![image.png](https://upload-images.jianshu.io/upload_images/12081122-b0285dbf8af0c023.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
import './app2.css';
import Vue from "vue";

const init = (container) => {
    new Vue({
        el: container,
        data: {
            index: parseInt(localStorage.getItem('index')) || 0
        },
        watch: {
            index() {
                localStorage.setItem('index', this.index.toString())
            }
        },
        template: `
            <section id="app2">
                <ol class="tab-bar">
                    <li :class="index===0?'selected':''" @click="index=0">1</li>
                    <li :class="index===1?'selected':''" @click="index=1">2</li>
                </ol>
                <ol class="tab-content">
                    <li :class="index===0?'active':''">内容1</li>
                    <li :class="index===1?'active':''">内容2</li>
                </ol>
            </section>
        `,
    })
}

export default init;

```
事件函数直接在标签上监听，函数都不用写！
元素都不用找，DOM操作省了
用了Vue之后就不需要再用MVC了
浓缩成只有一个V
学MVC的目的是理解原理，可以理解Vue原来的样子是啥
Vue其实还可以再回到MVC，它本质就是MVC
![image.png](https://upload-images.jianshu.io/upload_images/12081122-261bc5e873e227f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
MVC的思想一直在
Vue只是提供了一个简单操作，提供了一个需求简单时的应用，当需求复杂的时候MVC还是MVC
表驱动变成无处不在：当什么东西变化的时候做什么，表之外的逻辑写好，当表需要的时候就调用
![image.png](https://upload-images.jianshu.io/upload_images/12081122-2bccca5daaee99c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Vue也继承了eventBus
所以可以直接用Vue做一个eventBus，Vue把方法用$开头
![image.png](https://upload-images.jianshu.io/upload_images/12081122-d6bc3b9a003f3bd9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
但是Vue并没有体现抽象思维6
![image.png](https://upload-images.jianshu.io/upload_images/12081122-e7ba59660a9d4e30.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
他觉得这个思维太复杂，自动隐藏render，帮你局部渲染不需要你手动，更新机制比抽象思维6更加细致，精确变更
React是抽象思维6，它要求显示调用render
![image.png](https://upload-images.jianshu.io/upload_images/12081122-f75251ebec3d3f0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
