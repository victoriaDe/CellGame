import dashboard from "./views/dashboard.js";
import newGame from "./views/newGame.js";
import records from "./views/records.js";
import rules from "./views/rules.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {
    const routes = [
        {path: '/', view: dashboard,},
        {path: '/newGame', view: newGame},
        {path: '/records', view: records},
        {path: '/rules', view: rules},
    ];

    //tests each route for potential match

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });
    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        }
    }
    const view = new match.route.view();
    document.getElementById("#app").innerHTML = await view.getHtml();
    view.init();
};

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});