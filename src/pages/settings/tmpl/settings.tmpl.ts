export const settings = `
    <div class="wrapper-settings-page">
         <header class="header">
            {{{ logo }}}
            {{{ menu }}}
         </header>
         <div class="wrapper-content">
             <div class="wrapper-avatar">
                <img src='/assets/avatar.svg' alt="avatar"/>
                <img src='/assets/empty-avatar.svg' alt="empty-avatar"/>
                <span>avatar</span>
             </div>
            <form class="form" name="settings-form">
                {{{ input }}}
                <div>{{{ button }}}</div>
            </form>
            
            {{{ authPageLink }}}
        </div>
    </div>
`
