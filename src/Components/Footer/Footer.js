import React from 'react'
import { FooterContainer, FooterLink, FooterParagraph } from './Styled'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterParagraph>
                Developed By
                <FooterLink href="https://niteshrana.netlify.app/" target="_blank">Nitesh Rana</FooterLink>
            </FooterParagraph>
        </FooterContainer>
    )
}

export default Footer
