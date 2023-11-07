import HandleBars from "handlebars";
import {content} from "./tmpl/content.tmpl.ts";
import {Logo} from "../../components/logo";
import {Link} from "../../components/link";
import {Title} from "../../components/title";
import {Input} from "../../components/input";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";


const chatField = [
    {
        placeholder: 'Search for people'
    }
] as InputProps

export const ChatPage = () => {
    return HandleBars.compile(content)({
        logo: Logo(),
        linkToSettings: Link({
            to: `${ProjectLinksEnum.settings}`,
            content: '<img class="settings-styled" src=\'/assets/settings.svg\' alt="settings"/>'
        }),
        linkToAuth: Link({
            to: `${ProjectLinksEnum["sign-up"]}`,
            content: '<img class="arrow-exit" src=\'/assets/exit.svg\' alt="exit"/>'
        }),
        title: Title({
            title: "Music"
        }),
        input: Input(chatField),
    });
}
