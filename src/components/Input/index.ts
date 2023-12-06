import {InputProps} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";

export class Input extends Block {
    constructor(props: InputProps) {
        super('div', props);
    }
    
    render(): DocumentFragment {
       return  this.compile(`
            <div class="fields-list">
                {{#each this}}
                    <input class={{class}} type={{type}} name={{name}} placeholder={{placeholder}}
                    {{#if pattern}} pattern={{pattern}} {{/if}} required />
                {{/each}}
            </div>
        `, this.props);
    }
}
