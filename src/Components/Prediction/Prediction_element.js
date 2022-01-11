import styled from 'styled-components'

export const PredictionWrap = styled.div`
    min-height: calc(100vh - 60px);
    height: 100%;
`

export const PredictionTitle = styled.div`
    padding: 35px 35px 0px 35px;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 40px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
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
        height: 60px;
        border-right: none;
    }
`

export const PredicitionAIWrap = styled.div`
    flex:1.5;
    width:100%;
    height:100%;
    @media screen and (max-width: 591px) {
        flex: 1;
        margin-top: 30px;
    }
`

export const MLTable = styled.table`
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
        display: flex;
    }
    thead tr th {
        font-size: 1.1rem;
        font-weight: bold;
        line-height: 40px;
        padding: 5px 0 5px 20px;
        display: flex;
    }
    tbody tr td  {
        display: flex;
        flex-wrap: wrap;
    }
`

export const MLTableInfo = styled.div`
    height: 200px;
    flex:1;
    align-items: center;
    vertical-align: middle;
    border-top: 0.1rem solid #c5d5d7;
    width: 100%;
    position: relative;
    white-space:normal;

    @media screen and (max-width: 1080px) {
        flex: 1;
        min-width: 250px;
    }
    @media screen and (max-width: 591px) {
        flex: 1;
        min-width: 300px;
    }
`

export const MLTableAdjust = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MLButton = styled.button`
    background: #1c5c9c;
    white-space: nowrap;
    color: #fff;
    height: 50px;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 0 0 8px 8px;

    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: #194978;
    }

`
export const CommentBox = styled.input`
    color: #949494;
    font-size: 0.9rem;
    line-height: 0.9rem;
    margin: 15px;
    width: calc(100% - 30px);
    border: none;
    outline: none;
`

export const SubmitButton = styled.button`
    background: #079178;
    white-space: nowrap;
    color: #fff;
    height: 45px;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    width: 35%;
    border-radius: 8px;
    margin-top: 20px;
    float: right;

    &:hover {
        transition: all 0.3s ease-out;
        border: none;
        background: #0b7562;
    }
    @media screen and (max-width: 591px) {
        width: 100%;
        margin-top: 20px;
    }

`

export const PoweredBy = styled.div`
    margin: 10px;
    position:absolute;
    bottom:0;
    left:0;
`

export const PoweredByImage = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    width: 65px;
    height: 12px;
    text-decoration: none;
    padding: 5px;
`

export const Setting = styled.div`
    margin: 10px;
    position:absolute;
    bottom:0;
    right:0;
    justify-content:right;
`

export const SettingImage = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    width: 12px;
    height: 12px;
    text-decoration: none;
    cursor: pointer;
    padding: 5px;
`

export const OpenscaleImage = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    width: 27px;
    height: 27px;
    text-decoration: none;
    margin: 5px 15px 5px 0;
    vertical-align: middle;
`

export const ApproveTextLine = styled.span`
    border-bottom:5px solid #079178;
    padding-bottom:13px;
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