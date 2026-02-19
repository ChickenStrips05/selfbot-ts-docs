
const renderer = {
    link(href, title, text) {
        const link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' rel='noreferrer' ");
    }
};

marked.use({
    renderer
});

marked.use(markedKatex({
    throwOnError: true
}));

marked.setOptions({
  gfm: true,
  breaks: true,
  tables: true
});


Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
    const button = document.createElement('button');
    button.innerHTML = 'Copy';

    button.addEventListener('click', function () {
        navigator.clipboard.writeText(env.code).then(function () {
            button.textContent = 'Copied!';
            setTimeout(function () {
                button.textContent = 'Copy';
            }, 2000);
        }, function () {
            button.textContent = 'Failed!';
        });
    });

    return button;
});

const sidebar = document.getElementById("sidebar")
const pageContent = document.getElementById("main-content")

function toggleNav() {
    return sidebar.classList.toggle("open")
}

function openNav() {
    sidebar.classList.add("open")
}

function closeNav() {
    return sidebar.classList.remove("open")
}

async function load(page) {
    const pageText = await (await fetch(page)).text()

    pageContent.innerHTML = marked.parse(pageText)
    Prism.highlightAll();

    function normalise(url) {
        return url.replaceAll("/", "")
    }

    
    const sitemap = JSON.parse(await (await fetch("https://raw.githubusercontent.com/ChickenStrips05/selfbot-ts-docs/refs/heads/master/pages.json")).text())

    sidebar.innerHTML = [
        "<button class=\"menu-buttons\" onclick=\"closeNav()\">Close</button>",
        ...sitemap.map(page => (`<a href=${page.url} class="${page.header ? (normalise(page.url) === normalise(window.location.pathname) ? "sidebar-main active" : "sidebar-main") : ((normalise(page.url) === normalise(window.location.pathname) ? "sidebar-sub active" : "sidebar-sub"))}">${page.name}</a>`))
        ].join("\n")
}