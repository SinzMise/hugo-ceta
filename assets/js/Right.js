window.onload = () => {
    const menu = document.querySelector('.menu')
    const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
    menu.style.height = '0'

    openMenu = e => {
        e.preventDefault()

        menu.style.left = `${e.clientX}px`
        menu.style.top = `${e.clientY + 5}px`
        menu.style.height = `${menuHeight}px`
        menu.classList.add('is-active')

        return false
    }

    colseMenu = () => {
        menu.style.height = '0'
        menu.classList.remove('is-active')
    }

    window.onclick = () => colseMenu()
}
let isFullScreen = false;

    function toggleFullScreen() {
        if (!isFullScreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            isFullScreen = true;
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            isFullScreen = false;
        }
    }

    function copyContent() {
        const textToCopy = document.documentElement.innerHTML;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy text:', error);
            });
    }

    function refreshPage() {
        location.reload();
    }

    function goBack() {
        window.history.back();
    }