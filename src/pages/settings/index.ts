import HandleBars from "handlebars";
import {settings} from "./tmpl/settings.tmpl.ts";
import {Logo} from "../../components/logo";
import {Link} from "../../components/link";
import {Button} from "../../components/button";
import {Input} from "../../components/input";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";

const signUpFieldList =
    [
        {
            placeholder: 'first name',
            name: 'first_name',
            type: 'text'
        },
        {
            placeholder: 'second name',
            name: 'second_name',
            type: 'text'
        },
        {
            placeholder: 'display name',
            name: 'display_name',
            type: 'text'
        },
        {
            placeholder: 'login',
            name: 'login',
            type: 'text'
        },
        {
            placeholder: 'email',
            name: 'email',
            type: 'email'
        },
        {
            placeholder: 'phone',
            name: 'phone',
            type: 'phone'
        },
    
    ] as InputProps
export const SettingsPage = () => {
    return HandleBars.compile(settings)({
        logo: Logo(),
        authPageLink: Link({to: `${ProjectLinksEnum["sign-in"]}`, content: 'or Sign In'}),
        button: Button({text: 'Save'}),
        input: Input(signUpFieldList),
    })
}
