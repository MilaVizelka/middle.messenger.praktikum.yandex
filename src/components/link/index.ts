import HandleBars from "handlebars";
import { link } from "./link.tmpl.ts";
import {LinkProps} from "../../models/project.model.ts";

export const Link = (props: LinkProps ) => {
    return HandleBars.compile(link)(props);
}
