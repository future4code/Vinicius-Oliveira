import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
//Não esquecer do MATERIAL-UI, assim como foi feito no template do FIGMA.

const PageHomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PageHomeProfile = styled.div`
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
const PageHomeImg = styled.img`
    width: 25vw;
    height:50vh;
`

export default function PageHome(){
    //Declaração do estado inicial
    const [profile, setProfile] = useState({})

    //Função para pegar os perfis, seguindo os parâmetros da API.
    const getProfileToChoose = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-oliveira-lovelace/person')
        .then(res => {setProfile(res.data.profile)})
        .catch(err => {alert(err.response.data.message)})
    }

    //Função para escolher a pessoa, repare que o parâmetro "choice" foi definido somente para ser conivente com a API. Definido dessa maneira para evitar de deixar o código mais verboso.
    const choosePerson = (choice) => {
        //Criação do Body, somente para adequação com a API e para utilização de funções posteriores.
        const body = {id: profile.id,choice: choice}
        // NÃO ESTÁ CLARO PRA MIM, O MOTIVO DE SER COMO UNDEFINED O PARÂMETRO DA FUNÇÃO SEGUINTE, colega me explicou, mas não está muito claro ainda.
          setProfile(undefined)
          axios
            .post(
              "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius-oliveira-lovelace/choose-person",
              body
            )
            .then((res) => {
              getProfileToChoose()
            })
    }

    //Exibição dos dados na página, em f(término de seu Load).
    useEffect(()=> {getProfileToChoose()}, [])

    return (
    <div>
        <PageHomeDiv>
            {/* Ternário para avaliar se existe perfis ou não. Caso exista, ele exibe os perfis e chama as funções associadas, caso contrário, é exibido uma mensagem "No more manitos(as)." Dessa forma evito o maldito erro do null. */}
            {profile?
            <PageHomeProfile>
                <PageHomeImg src={profile.photo}/>
                <h2>{profile.name}, {profile.age} anos</h2>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={()=>choosePerson(false)}>❌</button>
                    <button onClick={()=>choosePerson(true)}>💘</button>
                </div>
            </PageHomeProfile>
            : <div>Loading rápido?</div>}
        </PageHomeDiv>
    </div>
    )
}