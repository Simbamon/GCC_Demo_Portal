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
    line-height: 40px;
    display: flex;
    justify-content: space-between;
`

export const CP4DButton = styled.button`
    background: #1c5c9c;
    white-space: nowrap;
    color: #fff;
    height: 40px;
    font-size: 13.5px;
    line-height: 25px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    width: 200px;
    border-radius: 8px;
    float: right;

    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: #194978;
    }
    @media screen and (max-width: 1080px) {
        font-size: 12px;
        width: 180px;
    }
    @media screen and (max-width: 591px) {
        font-size: 10px;
        width: 130px;
    }

`

export const CP4DCreateButton = styled.button`
    background: #1c5c9c;
    white-space: nowrap;
    color: #fff;
    height: 40px;
    font-size: 13.5px;
    line-height: 25px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    width: 200px;
    border-radius: 8px;
    float: right;
    margin-top: 30px;
    margin-bottom: 30px;

    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: #194978;
    }
    @media screen and (max-width: 1080px) {
        width: 100%;
    }
    @media screen and (max-width: 591px) {
        width: 100%;
    }

`

export const CatalogContentsWrap = styled.div`
    padding: 25px 35px 35px 35px;
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
        font-size: 1.0rem;
        font-weight: bold;
        line-height: 50px;
        text-align: center;
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
        font-size: 0.95rem;
        line-height: 40px;
        }
    }
    
`

export const CatalogWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 20px;
    @media screen and (max-width: 1080px) {
        margin-top: 15px;
        margin-left: 15px;
    }
`

export const CatalogLink = styled(Link)`
    text-decoration: none;
    flex:1 0 23%;
    width: calc(100%/4);
    min-width: 280px;
    min-height: 280px;
    @media screen and (max-width: 1080px) {
        flex: 1 0 30%;
        min-width: 270px;
        min-height: 270px;
    }
    @media screen and (max-width: 591px) {
        flex: 1 0 45%;
        min-width: 120px;
        min-height: 120px;
    }
`

export const CatalogItem = styled.div`
    border: solid black;
    flex: 1;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (max-width: 1080px) {
        margin-right: 15px;
        margin-bottom: 15px;
    }

`

export const CatalogPicture = styled.img`
    width: 220px;
    height: 220px;

    ${CatalogItem}:hover & {
        transition: all 0.3s ease-out;
        transform: scale(1.1);
    }

    @media screen and (max-width: 1080px) {
        width: 170px;
        height: 170px;
    }
    @media screen and (max-width: 591px) {
        width: 80px;
        height: 80px;
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

export const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .7);
    z-index: 1000;
`

export const ModalBackground = styled.div`
    position: fixed;
    width: 50%;
    height: 50%;
    margin: auto;
    background: #FFF;
    z-index: 1000;
`