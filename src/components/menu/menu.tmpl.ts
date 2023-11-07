export const menu = `
<nav class>
    <ul class="menu-styled">
        {{#each this}}
        <li>
            <a href={{link}}>
                {{item}}
            </a>
        </li>
        {{/each}}
    </ul>
</nav>
`
