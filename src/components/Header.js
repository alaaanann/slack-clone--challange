import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import NightsStayIcon from '@material-ui/icons/NightsStay';



function Header() {
    return (
        <Container>
            <NightMode>
                <NightsStayIcon />
            </NightMode>
            <Main>
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Serach..." />
                    </Search>
                </SearchContainer>
                <SearchIcon />
            </Main>
            <UserContainer>
                <Name>
                    Alaa 
                </Name>
                <UserImage>
                    <img src="https://www.flaticon.com/svg/vstatic/svg/3220/3220587.svg?token=exp=1614157877~hmac=766466ad67224f99ddd2bd1ded7b666b" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header
 
const Container = styled.div`
    background-color: lightpink;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius:3%;
    padding-left: 19px;
    box-shadow: inset 0 0 0 0.1px rgb(104 74 104);
    



`



const Main = styled.div`
    display: flex;

    margin-left: 16px;
    margin-right: 16px;
    
   
    align-items: center;
    cursor: pointer;

`

const SearchContainer = styled.div`
    display: flex;
    padding-right: 7px;
    padding-left: 19px;
    min-width: 400px;
    border-radius: 50px;
    align-items: center;
    position: center;

    
`
 const NightMode = styled.div`
    cursor: pointer;
    `

const Search = styled.div`
    box-shadow: inset 0 0 0 2px rgb(104 74 104);
    width: 100%;
    border-radius: 50px;
    display: flex;
    align-items: center;

    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        padding-bottom :5px;
        color: black;
        padding-top:4px;
        padding-bottom:4px;

    }
    
    input:focus {
        outline: none;
    }


`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: right;
    


`

const Name = styled.div`
    padding-right: 16px;
    cursor: pointer;

`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 1px solid bisque;
    border-radius: 40%;
    cursor: pointer;

    img {
        width: 100%;
    }


`