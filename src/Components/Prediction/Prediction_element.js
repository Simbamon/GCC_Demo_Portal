import styled from 'styled-components'

export const PredictionWrap = styled.div`
    min-height: calc(100vh - 60px);
    height: 100%;
`

export const PredictionTitle = styled.div`
    padding: 35px 35px 0px 35px;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.7rem;
`

export const ContentsWrap = styled.div`
    padding: 25px 35px 35px 35px;
    display: flex;
    flex-wrap: wrap;
`

export const PredicitionProfileWrap = styled.div`
    flex:1;
    width:100%;
    height:100%;
    margin-right: 20px;
    @media screen and (max-width: 591px) {
        flex: 1;
        margin-right: 0;
    }
`

export const ProfileBox = styled.div`
    border: 0.1rem solid #c5d5d7;
    border-radius: 8px 8px 0px 0px;
    white-space: nowrap;
    background-color: white;
    width: 100%;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.26);
`

export const ProfilePic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 100px;
    border-radius: 50%;
    height: 100px;
    text-decoration: none;
`

export const PredicitionInfoWrap = styled.div`
    flex:4.2;
    width:100%;
    height:100%;
    margin-right: 20px;
    @media screen and (max-width: 591px) {
        flex: 1;
        margin-right: 0;
        margin-top: 20px;
    }
`

export const PredictionTable = styled.table`
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
    }
    @media screen and (max-width: 1080px) {
        text-align: center;
        thead tr th {
            padding: 0px;
        }
    }
    @media screen and (max-width: 591px) {
        text-align: center;
    }
    
`

export const TableInfo = styled.div`
    height: 150px;
    flex:1 0 18%;
    border-top: 0.1rem solid #c5d5d7;
    width: calc(100%/5);
    display: table-cell;
    vertical-align: middle;
    white-space:normal;
    border-right: 0.1rem solid #c5d5d7;
    @media screen and (max-width: 1080px) {
        flex: 1;
        min-width: 230px;
        height: 100px;
        border-right: none;
    }
    @media screen and (max-width: 591px) {
        flex: 1;
        min-width: 300px;
        height: 80px;
        border-right: none;
    }
`

export const TableAdjust = styled.div`
    text-align: center;
    padding-top: 40px;
    @media screen and (max-width: 1080px) {
        padding-top: 17px;
    }
    @media screen and (max-width: 591px) {
        padding-top: 10px;
    }
`

export const PredicitionAIWrap = styled.div`
    background:green;
    flex:1.5;
    width:100%;
    height:500px;
    @media screen and (max-width: 591px) {
        flex: 1;
        margin-top: 30px;
    }
`