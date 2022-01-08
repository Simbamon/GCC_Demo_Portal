import styled from 'styled-components'

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
        font-size: 1.1rem;
        font-weight: bold;
        line-height: 45px;
        padding: 5px 0 5px 20px;
    }
    tbody tr td  {
        display: flex;
        flex-wrap: wrap;
        border-top: 0.1rem solid #c5d5d7;
    }
    
`