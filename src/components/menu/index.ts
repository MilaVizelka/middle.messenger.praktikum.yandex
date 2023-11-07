import HandleBars from "handlebars";
import {menu} from "./menu.tmpl.ts";
import {MenuProps, ProjectLinksEnum} from "../../models/project.model.ts";

const menuItemsList = [
    {
        item: 'main page',
        link:  ProjectLinksEnum.home
    },
    {
        item: 'sign-up page',
        link:  ProjectLinksEnum["sign-up"]
    },
    {
        item: 'not-found page',
        link: ProjectLinksEnum["not-found"]
    },
    {
        item: 'server-error page',
        link: ProjectLinksEnum["server-error"]
    },
    {
        item: 'chats page',
        link: ProjectLinksEnum.chats
    },
    {
        item: 'settings page',
        link: ProjectLinksEnum.settings
    },

] as MenuProps
export const Menu = () => {
    return HandleBars.compile(menu)(menuItemsList);
}
