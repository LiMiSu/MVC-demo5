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


