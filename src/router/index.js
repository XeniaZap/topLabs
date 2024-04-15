import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../components/auth/LoginForm.vue'
import Registration from '../components/auth/Registration.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/about', component:Registration },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
