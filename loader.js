
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

async function load(page) {
    const pageContent = document.getElementById("main-content")
    const pageText = await (await fetch(page)).text()

    pageContent.innerHTML = marked.parse(pageText)
    Prism.highlightAll();

    const sidebar = document.getElementById("sidebar")
    const sitemap = JSON.parse(await (await fetch("https://raw.githubusercontent.com/ChickenStrips05/selfbot-ts-docs/refs/heads/master/pages.json")).text())

    sidebar.innerHTML = sitemap.map(page => (`<a href=${page.url} class="${page.header ? (page.url === window.location.href ? "sidebar-main active" : "sidebar-main") : ((page.url === window.location.href ? "sidebar-sub active" : "sidebar-sub"))}">${page.name}</a>`)).join("\n")
}