import HandleBars from "handlebars";
import {content} from "./tmpl/content.tmpl.ts";
import {Logo} from "../../components/logo";
import {Link} from "../../components/link";
import {Title} from "../../components/title";
import {Input} from "../../components/input";
import {Button} from "../../components/button";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";

const signUpFieldList =
    [
        {
            placeholder: "first name",
            name: "first_name",
            type: 'text'
        },
        {
            placeholder: 'second name',
            name: "second_name",
            type: 'text'
        },
        {
            placeholder: 'login',
            name: "login",
            type: 'text'
        },
        {
            placeholder: 'email',
            name: "email",
            type: 'email'
        },
        {
            placeholder: 'phone',
            name: "phone",
            type: 'phone'
        },
        {
            placeholder: 'password(min.6 charact.)',
            name: "password",
            type: 'password'
        },
        
    ] as InputProps

export const SignUpPage = () => {
   return HandleBars.compile(content)({
      logo: Logo(),
      signUpPageLink: Link({to: `${ProjectLinksEnum["sign-up"]}`, content: 'or Sign In'}),
      title: Title({title: 'Let`s get started!'}),
       input: Input(signUpFieldList),
      button: Button({text: 'Create account'})
   });
}
