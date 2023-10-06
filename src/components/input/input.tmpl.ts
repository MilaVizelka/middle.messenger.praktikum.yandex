
export const input =  `
    <div class="fields-list">
      {{#each this}}
      
        <input class="input-styled" type={{type}} name={{name}} placeholder={{placeholder}}  required/>
    
      {{/each}}
    </div>
`
