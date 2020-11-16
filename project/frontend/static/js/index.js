import dashboard from "./views/dashboard.js";
import newGame from "./views/newGame.js";
import records from "./views/records.js";
import rules from "./views/rules.js";
import startGame from "./views/startGame.js";
import {ScoreboardPlayer} from "./scoreboardPlayer.js";

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
        {path: '/startGame', view: startGame},
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


    let stored = localStorage.getItem("scoreboardPlayers");
    if (stored === null) {
        let initialScoreboardPlayers = [];
        initialScoreboardPlayers.push(new ScoreboardPlayer("Croco", 'https://i.ibb.co/vVq8kb8/crocodile.png', 50));
        initialScoreboardPlayers.push(new ScoreboardPlayer("Bear", 'https://i.ibb.co/j6Kzw49/bear.png', 20));
        initialScoreboardPlayers.push(new ScoreboardPlayer("Giraffe", 'https://i.ibb.co/xHhtfPy/giraffe.png', 70));
        localStorage.setItem("scoreboardPlayers", JSON.stringify(initialScoreboardPlayers));
    }
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
