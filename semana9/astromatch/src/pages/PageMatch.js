import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
//Não esquecer do MATERIAL-UI, assim como foi feito no template do FIGMA
const MatchImg = styled.img`
    width:10vw;
    heigth:10vw;
    border-radius: 30px;
    margin-right:2%;
`
export function Match(props) {
    return (
        <div>
            <MatchImg src={props.profile.photo}/>
            <p>{props.profile.name}</p>
        </div>
    )
}

const PageMatchDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PageMatchProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45vw;
    border: 1px solid black;
    padding: 25px;
    margin: 2.5%;
    button {
        height:5vh;
        width: 5vw;
    }
`
const MatchDiv = styled.div`
    display: flex;
    border:1px solid black;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    padding: 25px;
    margin: 2.5%;
`

export default function PageMatch(){
    const [matches, setMatches] = useState([])

    //Função para pegar os matches que passoa fez.
    const getMatches = () => {
        axios
        .get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-oliveira-lovelace/matches"
        )
        .then((res) => {
        //   console.log(res.data.matches)
          setMatches(res.data.matches)
        })
    }

    useEffect(() =>{getMatches()},[])
    return (
        <PageMatchDiv>
            <PageMatchProfile>
                <MatchDiv>
                    {matches.map(match => {return <Match profile={match}/>})}
                </MatchDiv>
            </PageMatchProfile>
        </PageMatchDiv>
    )
}