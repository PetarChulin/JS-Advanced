function extract(content) {

    let contentEl = document.getElementById('content');
    let pattern = /\((.+?)\)/g;
    let matches = Array.from(contentEl.textContent.matchAll(pattern));
    let result = [];

    result =  matches.map(e => e[1]);
    
    return result.join('; ');
}