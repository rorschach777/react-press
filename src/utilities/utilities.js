import {CONFIG} from '../config/Config';
export const formatNavLink = (link) => {
    let _link = link;
    let _formattedNavLink = _link.replace(CONFIG.url.base, '');
    _formattedNavLink = _link.replace(' ', '-'); 
    _formattedNavLink = _formattedNavLink.replace('/','');
    return _formattedNavLink.toLowerCase();
}