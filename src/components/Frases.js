import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import '../App.css';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;


const Frase = ({frase, cargando}) => {
    return ( 
        <ContenedorFrase>
         
        {cargando 
            ?
            (
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            )
            :
            (
                <Fragment>
                    <h1> {frase.quote} </h1>
                    <p> {frase.author}</p>
                </Fragment>
                
            )
        } 
            

            
        </ContenedorFrase>
    );
}
 
export default Frase;