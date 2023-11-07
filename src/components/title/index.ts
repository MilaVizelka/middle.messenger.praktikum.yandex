import HandleBars from "handlebars";
import {title} from "./title.tmpl.ts";
import {TitleProps} from "../../models/project.model.ts";

export const Title = (props: TitleProps) => {
    return HandleBars.compile(title)({
        title: props.title
    })
}
