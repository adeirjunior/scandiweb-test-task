import React from 'react'
import styled from 'styled-components'

const Ft = styled.footer`
    border-top: solid 5px #EF476F;
    display: block;
    text-align: center;
    padding: 1em 0;
    color: #EF476F;
`

function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <Ft>
           Scandiweb Test Assignment{' '}&copy;{' '}{year}
        </Ft>
    )
}

export default Footer
