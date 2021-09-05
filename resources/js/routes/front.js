import Home from "../pages/front/Home";
import Contact from "../pages/front/Contact";
import Projects from "../pages/front/Projects";
import Skills from "../pages/front/Skills";

export default{
    mode: 'history',
    routes : [
        {
            path : '/',
            component : Home,
            name: 'home',
            meta : {
                title : 'Home - Ali Babayev',
            },
        },
        {
            path : '/contact',
            component : Contact,
            name : 'contact',
            meta : {
                title : 'Contact - Ali Babayev',
            },
        },
        {
            path : '/projects',
            component : Projects,
            name : 'projects',
            meta : {
                title : 'Projects - Ali Babayev',
            },
        },
        {
            path : '/skills',
            component : Skills,
            name : 'skills',
            meta : {
                title : 'Skills - Ali Babayev',
            },
        },
    ]
}