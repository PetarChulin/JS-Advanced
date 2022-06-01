function lockedProfile() {

    let buttons = [...document.getElementsByTagName('button')];

    buttons.forEach(buttons => buttons.addEventListener('click', function show(e) {

        let profile = e.target.parentNode;

        let info = profile.getElementsByTagName('div')[0];
        
        let unlocked = profile.querySelector('input[type="radio"]:checked').value;

        if (unlocked == 'unlock') {
            if (e.target.textContent == 'Show more') {
                e.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else if (e.target.textContent == 'Hide it') {
                e.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }));
}