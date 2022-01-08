import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CatalogWrap = styled.div`
    min-height: calc(100vh - 60px);
    height: 100%;
`

export const CatalogWrapTitle = styled.div`
    padding: 35px 35px 0px 35px;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.7rem;
`

export const CatalogContentsWrap = styled.div`
    padding: 25px 35px 35px 35px;
    display: flex;
    flex-wrap: wrap;
`

export const CatalogTable = styled.table`
    flex: 1;
    white-space: nowrap;
    background-color: white;
    text-align: left;
    font-size: 0.85rem;
    height: 100%;
    width: 100%;
    display: table;
    border-collapse: collapse;
    overflow-x:auto;
    border-radius: 8px;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.26);
    border: 0.1rem solid #c5d5d7;

    thead tr{
        color: #1a2426;
        font-weight: bold;
    }
    thead tr th {
        display: inline;
        font-size: 1.35rem;
        font-weight: bold;
        line-height: 50px;
        padding: 5px 0 5px 20px;
    }
    tbody tr td  {
        display: flex;
        flex-wrap: wrap;
        border-top: 0.1rem solid #c5d5d7;
    }
    @media screen and (max-width: 1080px) {
        thead tr th {
        font-size: 1.25rem;
        line-height: 45px;
        }
    }
    @media screen and (max-width: 591px) {
        thead tr th {
        font-size: 1.1rem;
        line-height: 40px;
        }
    }
    
`

export const CatalogWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom :5px;
`

export const CatalogLink = styled(Link)`
    text-decoration: none;
    flex:1 0 20%;
    width: calc(100%/5);
    min-width: 400px;
    min-height: 400px;
    @media screen and (max-width: 1080px) {
        flex: 1 0 30%;
        min-width: 280px;
        min-height: 280px;
    }
    @media screen and (max-width: 591px) {
        flex: 1 0 45%;
        min-width: 150px;
        min-height: 150px;
    }
`

export const CatalogItem = styled.div`
    border: solid black;
    flex: 1;
    border-radius: 5px;
    padding: 10px;
    margin: 20px;
    cursor: pointer;
    text-align: center;
    @media screen and (max-width: 1080px) {
        margin: 10px;
    }
    @media screen and (max-width: 591px) {
        margin: 5px;
    }

`

export const CatalogPicture = styled.img`
    width: 300px;
    height: 300px;

    ${CatalogItem}:hover & {
        transition: all 0.3s ease-out;
        transform: scale(1.1);
    }

    @media screen and (max-width: 1080px) {
        width: 180px;
        height: 180px;
    }
    @media screen and (max-width: 591px) {
        width: 100px;
        height: 100px;
    }
`

export const CatalogName = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 15px;
    color: black;
    @media screen and (max-width: 1080px) {
        font-size: 0.9rem;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 591px) {
        font-size: 0.8rem;
        font-weight: 700;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`