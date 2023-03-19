import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

const SignInTemp = ({button, title, children, smallText, reference, link, text, textInput, post}) => {
    const toggleCarousel = () => {
        const getCarouselElement = document.querySelector('.item-one');
        const getHiddenElement = document.querySelector('.item-two');
        const getParentElement = document.querySelector('.carousel-container');
        getParentElement.classList.toggle('bgChange');
        getCarouselElement.classList.toggle('hidden');
        getHiddenElement.classList.toggle('hidden');
    }
    setInterval (toggleCarousel, 5000);
    const clicked = (variable) => {
        let errDOM = `.${variable}Err`;
        document.querySelector(errDOM).classList.remove('hidden');
    }
    
    const input = (variable) => {
        if (variable === "Uname") {
            const vUname = document.querySelector("#Uname").value;
            const numberErr = document.querySelector("#numberErr");
            const symbolErr = document.querySelector("#symbolErr");
            if (vUname.match(/[0-9]/)) {
                numberErr.style.color = "#ff0000";
            } else {
                numberErr.style.color = "#00ff00";
            }
            // eslint-disable-next-line no-useless-escape
            if (vUname.match(/[@\#\$\%\^\&\*\(\)\+\=\_\~\`\\\}\{\]\[\:\;\"\'\<\>\.\,\/\?\!\-]/)) {
                symbolErr.style.color = "#ff0000";
            } else {
                symbolErr.style.color = "#00ff00";
            }
        }
        
    }
    
  return (
    <div>
        <body className='body'>
            <main className='main'>
                <div className="main-content carousel-container">
                    <span className="span left" onClick={toggleCarousel}><i className="fa-solid fa-arrow-left"></i></span>
                    <span className="span right" onClick={toggleCarousel}><i className="fa-solid fa-arrow-right"></i></span>
                    <div className="carousel item-one">
                        <h2>"The vote is the most powerful instrument ever devised by man for breaking down injustice and destroying the terrible walls which imprison men because they are different from other men."</h2>
                        <p className="author">- Lyndon B. Johnson</p>
                    </div>
                    <div className="carousel item-two hidden">
                        <h2>"The vote is a trust more delicate than any other, for it involves not just the interests of the voter, but the interests of others as well."</h2>
                        <p className="author">- Samuel J. Tilden</p>
                    </div>
                </div>
                <div className="main-content form">
                    
                    <form onSubmit={post} action="" id="form">
                        <h1>{title}</h1>
                        <input type="text"
                            id="Uname" name="username" 
                            value={text} 
                            onChange = {textInput}
                            onClick={() => clicked("Uname")} 
                            onInput={() => input("Uname")} 
                            placeholder="Your Username" 
                            required /><br /> 
                        <div className="error UnameErr hidden"> 
                                <p id="numberErr">Username cannot contain numbers!</p>
                                <p id="symbolErr">Username cannot contain symbols</p>
                        </div>
                        {children}
                        <button type="submit" name="submit">{button}</button>
                    </form>
                    <small>{smallText} <Link to={reference}>{link}</Link></small>
                </div>
            </main> 
        </body>
    </div>
  )
}

export default SignInTemp;