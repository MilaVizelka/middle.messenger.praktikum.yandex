import {Block} from '../../utils/Block.ts';
import {InputProps} from "../../models/project.model.ts";
import {inputFocusOut} from "../../helpers/inputFocusOut.helper.ts";

export class Input extends Block {
    constructor(props: InputProps) {
        super('div', {...props, events: {
                focusout: (e: Event) => {
                    inputFocusOut(e)
                }
        }});
    }
    
    render(): DocumentFragment {
       return  this.compile(`
            <div class="fields-list">
                {{#each data}}
                    <div class="wrapper-input">
                        <label class="settings-label">{{key}}</label>
                        <input class="input-styled {{className}}" {{#if this.type}} type={{this.type}} {{/if}} name="{{this.name}}" {{#if this.value}} value={{this.value}}
                            {{/if}} {{#if placeholder}} placeholder="{{placeholder}}" {{/if}}
                            {{#if this.pattern}} pattern={{this.pattern}} {{/if}}
                            {{#if this.readonly}} readonly {{/if}}
                            required />
                    </div>
                {{/each}}
            </div>
        `, this.props);
    }
}
