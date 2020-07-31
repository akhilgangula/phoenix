import Vue from "vue";
import Router from "vue-router";
import Home from './pages/home'
import About from './pages/about'
import englearn from './pages/EngLearn'
import mgmtlearn from './pages/MgmtLearn'
import resource from './pages/Resources'
import career from './pages/Career'
import csr from './pages/CSR'
import tc from './pages/tandc'
import privacy from './pages/privacy'
import refund from './pages/refund'
import contact from './pages/contact'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home,
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About,
            }
        },
        {
            path: '/eng',
            name: 'eng',
            components: {
                default: englearn,
            }
        },
        {
            path: '/mgmt',
            name: 'mgmt',
            components: {
                default: mgmtlearn,
            }
        },
        {
            path: '/resource',
            name: 'resource',
            components: {
                default: resource,
            }
        },
        {
            path: '/career',
            name: 'career',
            components: {
                default: career,
            }
        },
        {
            path: '/csr',
            name: 'csr',
            components: {
                default: csr,
            }
        },
        {
            path: '/contact',
            name: 'contact',
            components: {
                default: contact,
            }
        },
        {
            path: '/tc',
            name: 'tc',
            components: {
                default: tc,
            }
        },
        {
            path: '/privacy',
            name: 'privacy',
            components: {
                default: privacy,
            }
        },
        {
            path: '/refund',
            name: 'refund',
            components: {
                default: refund,
            }
        }
    ]
})