import { NotificationProps} from "../../models/project.model.ts";
import { Block } from '../../utils/Block.ts';

//TODO сделать нотификацию при успешной авторизации
export class Notification extends Block {
    constructor(props: NotificationProps) {
        super('div', props);
        
    }
    
    render(): DocumentFragment {
        return this.compile(`
           {{props.message}}
    `, this.props)
    }
}
