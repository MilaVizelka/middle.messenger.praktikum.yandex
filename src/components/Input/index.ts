import { InputProps} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";

export class Input extends Block {
    constructor(props: InputProps) {
        super('div', props);
    }
    
    render(): DocumentFragment {
        return this.compile(`
            <div class="fields-list">
              {{#each this}}
              
                <input class="input-styled" type={{type}} name={{name}} placeholder={{placeholder}}  required/>
            
              {{/each}}
            </div>
        `, this.props)
    }
}

