function getArticleGenerator(articles) {

    return () => {
        if (articles.length) {
            let content = document.getElementById('content');
            let article = document.createElement('article')
            let text = articles.shift();
            article.textContent = text;
            content.appendChild(article);
        }
    }
}
