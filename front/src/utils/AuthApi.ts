export function hasAuthenticated () {
    const token = getCookie('token');
    const result = token ? token : false;
    if(false === result) {
        console.log('error token invalid');
        return false;
    }
    return result;
}

const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim().split('=');
        if (c[0] === name) {
            return c[1];
        }
    }
    return "";
}