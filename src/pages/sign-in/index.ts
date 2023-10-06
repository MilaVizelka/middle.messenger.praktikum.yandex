import HandleBars from 'handlebars';

import {Link} from "../../components/link"
import {Title} from "../../components/title";
import {Logo} from "../../components/logo";
import {content} from "./tmpl/content.tmpl.ts";
import {Input} from "../../components/input";
import {Button} from "../../components/button";
import {Menu} from "../../components/menu";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";

const signInFieldList =
    [
        {
            placeholder: 'login',
            name: 'login',
            type: 'text'
        },
        {
            placeholder: 'password',
            name: 'password',
            type: 'password'
        },
    
    ] as InputProps

export const SignInPage = () => {
    return HandleBars.compile(content)({
        logo: Logo(),
        menu: Menu(),
        signUpPageLink: Link({to: `${ProjectLinksEnum["sign-up"]}`, content: 'or Sign Up'}),
        title: Title({title: 'Log In'}),
        input: Input(signInFieldList),
        button: Button({text: 'Enter'})
    });
}
