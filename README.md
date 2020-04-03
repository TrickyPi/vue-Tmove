# vue-tmove

## functional

目前只用来判断x轴方向向下的滑动

## 用法
```js
    //main.js
    import Vue from 'vue'
    import {Tmove} from 'vue-tmove'
    Vue.use(Tmove)

    //components.vue  触发式调用call方法
    <templete>
        <div v-t-move='call'></div> 
    </templete>
```