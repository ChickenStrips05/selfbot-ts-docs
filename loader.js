
const renderer = {
    link(href, title, text) {
        const link = marked.Renderer.prototype.link.call(this, href, title, text);
        return link.replace("<a", "<a target='_blank' rel='noreferrer' style='color: lightblue' ");
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
    const res = await fetch(page)
    const text = await res.text()

    pageContent.innerHTML = marked.parse(text)
    Prism.highlightAll();
}