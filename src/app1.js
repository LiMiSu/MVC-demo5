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
        watch:{
            n(){
                localStorage.setItem('n', this.n.toString() )
            }
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






