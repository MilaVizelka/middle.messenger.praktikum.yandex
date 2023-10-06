import HandleBars from "handlebars";
import {content} from "./tmpl/content.tmpl.ts";
import {Link} from "../../../components/link";
import {ProjectLinksEnum} from "../../../models/project.model.ts";

export const  NotFoundPage = () => {
   return HandleBars.compile(content)({
      chatPageLink: Link({
         to: ProjectLinksEnum.chats,
         content: 'назад к чатам'
      })
   });
}
