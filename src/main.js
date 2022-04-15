import Vue from 'vue'
import App from './App.vue'

import router from '@/router'


import '@/mobile/flexible';
import '@/style/reset.css';

import { Button } from 'vant';
Vue.use(Button)

import { NavBar } from 'vant';
Vue.use(NavBar);

import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

import { Col, Row } from 'vant';
Vue.use(Col);
Vue.use(Row);

import { Image as VanImage } from 'vant';
Vue.use(VanImage);

import { Cell, CellGroup, Icon } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon)

import { Search } from 'vant';
Vue.use(Search);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
