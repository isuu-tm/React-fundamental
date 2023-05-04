import React from 'react';
import MyButton from "../UI/Button/MyButton";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>

            <h1>
                Чынгысова Бермет
            </h1>
            <h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, eaque facilis hic illo iure
                    libero molestias mollitia nulla officiis quia, quisquam rem, sapiente soluta unde vel! A inventore
                    possimus tempore!
                </div>
                <div>Alias asperiores aspernatur corporis debitis dicta doloremque eligendi exercitationem harum, illo
                    iure iusto minima nisi nostrum, nulla quasi. Assumenda dolor dolore eaque eligendi excepturi
                    explicabo facilis omnis perferendis quasi sed.
                </div>
                <div>Aperiam architecto atque aut, enim est facilis, in maiores maxime minima obcaecati odio quo sit
                    sunt suscipit tempora. Ad dicta dignissimos eos esse fugit id impedit ipsum officia sapiente soluta.
                </div>
            </h3>
            <MyButton>
                <Link to=''/>Инстаграм
            </MyButton>
        </div>
    );
};

export default About;