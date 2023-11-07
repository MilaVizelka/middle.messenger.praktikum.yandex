import HandleBars from "handlebars";
import {input} from "./input.tmpl.ts";
import {InputProps} from "../../models/project.model.ts";

export const Input = (props: InputProps) => {
    return HandleBars.compile(input)(props);
}
