import React from 'react'
import styled from 'styled-components'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {sidebarItems} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import {ChannelData} from '../data/SidebarData'



function Sidebar() {
    return (
        <Container>
            <WrokSpaceContainer>
                <Name>
                    Ailo 
                </Name>
                <NewMesage>
                    <AddCircleIcon />
                </NewMesage>
            </WrokSpaceContainer>
            <MainChannels>
                {
                    sidebarItems.map(item =>(
                        <MainchannelItem>
                            {item.icon}
                            {item.text}
                        </MainchannelItem>
                    ))
                }
            </MainChannels>
            <ChannerlsContainer>
                <NewChannelsContainer>
                    <div>
                        Channels
                    </div>
                        <AddIcon />
                </NewChannelsContainer>
                    <ChannerlsList>
                         {
                             ChannelData.map(item =>(
                                 <AddNewChannels>
                                     {item.icon}
                                     {item.name}
                                 </AddNewChannels>
                             ))
                         }
                    </ChannerlsList>
            </ChannerlsContainer>
        </Container>
    )
}


export default Sidebar

const Container = styled.div`
    background: lavender;
    box-shadow: inset 0 0 0 0 0.5px rgb(104 74 104);
    border-radius: 5%;
    
`
const WrokSpaceContainer = styled.div`
   display:flex;
   align-items: center;
   height: 64px;
   padding-left: 25px;
   padding-right:19px;
   justify-content: space-between;
   box-shadow: inset 0 0 0 0.3px rgb(104 74 104);
   border-radius: 15%;
   background-color: lavenderblush;
   margin-top: 10px;
   margin-bottom: 10px;

`

const Name = styled.div`
    color: lightcoral;
    display: flex;
    align-items: center;

`
const NewMesage = styled.div`
    color: lightpink;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
     
`

const MainChannels = styled.div`
    background-color: lavenderblush;
    height: 215px;
    box-shadow: inset 0 0 0 0.3px rgb(107 74 107);
    border-radius: 10%;
    
`

const MainchannelItem = styled.div`
    color: lightcoral;
    padding-top: 10px;
    padding-right: 12spx;
    padding-left: 12px;
    display: grid;
    align-items: center;
    cursor: pointer;
    grid-template-columns: 15% auto;

`

const ChannerlsContainer = styled.div`
    height: 130px;
    background-color: lavenderblush;
    margin-top: 15px;
    border-radius: 10%;
    box-shadow: inset 0 0 0 0.3px rgb(107 74 107);
    padding-top: 10px;
    
    

`

const NewChannelsContainer = styled.div`
    color: lightcoral;
    display: flex;
    align-items: center;
    padding-left: 19px;
    padding-right: 19px;
    justify-content: space-between;
    cursor: pointer;

`
const ChannerlsList = styled.div`
`

const AddNewChannels = styled.div`
    color: lightcoral;
    padding-left: 19px;
    padding-right: 19px;
    display: grid;
    align-items: center;
    cursor: pointer;
    grid-template-columns: 15% auto;
    padding-top: 5px;

`