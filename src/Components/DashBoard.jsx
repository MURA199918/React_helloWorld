import React, { Component } from 'react';
import './DashBoard.css';
class DashBoard extends Component {
    render() {
        return(
    <body>
        <header class="headerContainer"><h1>HEADER - Sample Flexbox Example</h1></header>
        <div class="mainContainer">
            <section class="mainContentItem">
                <article>
                    <h2>First article</h2>
                    <p>Hello First World</p>
                </article>
                <article>
                    <h2>Second article</h2>
                    <p>Hello Second World</p>
                </article>
                <article>
                    <h2>Third article</h2>
                    <p>Hello Third World</p>
                </article>
            </section>
            <sidebar class="sideBarItem sideBarLeftItem"><div class="center"><p>Left Side Bar</p></div></sidebar>
            <sidebar class="sideBarItem sideBarRightItem"><div class="center"><p>Right Side Bar</p></div></sidebar>
        </div>
        <footer class="footerContainer"><div class="center"><p>Footer</p></div></footer>
        <script type="text/javascript"></script>
    </body>
        )
    }
}
export default DashBoard;