import { createApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Conversation from './views/Conversation.vue'
import Settings from './views/Settings.vue'
import './index.css';

const routes = [
  { path: '/', component: Home },
  { path: '/conversation/:id', component: Conversation },
  { path: '/settings', component: Settings }
]
const router = createRouter({
  history: createMemoryHistory(),
  routes
})
router.beforeEach((to) => {
  // const store = useConversationStore()
  console.log('path', to.path)
  // if (!to.path.startsWith('/conversation/')) {
  //   store.selectedId = -1
  // }
})

const app = createApp(App)
app.use(router)
app.mount('#app')