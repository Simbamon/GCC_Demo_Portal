import React, { Component } from 'react'
import { CatalogWrap, CatalogWrapTitle, CP4DButton, CatalogContentsWrap, CatalogTable, CatalogWrapper, CatalogLink, 
         CatalogItem, CatalogPicture, CatalogName, CP4DCreateButton } from './Catalog_element'
import CatalogModal from './CatalogModal'

export class Catalog extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          project_availability: false,
          project_name: "API as Project", 
          username: "shan",
          project_url:"",
          show_modal: false,
        }
    }

    makeProjectAlert() {
        window.alert("프로젝트를 먼저 만들어주세요.");
    }

    modalOpen() {
        this.setState({ show_modal: true })
    }

    modalClose() {
        this.setState({ show_modal: false })
    }
    
    handleProjectNameChange = event => {
        this.setState({ project_name: event.target.value })
    }
    handleUsernameChange = event => {
        this.setState({ username: event.target.value })
    }
    
    async createWSProject() {
        this.setState({
            project_availability: false
        })
        
        const userCredential = { 
            uname: this.state.username
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredential)
        }

        const get_token = await fetch('/watsonstudio/wstoken', options)
        const received_token = await get_token.json()
        const wkc_token = received_token.token

        const data = { 
            token: wkc_token, 
            uname: this.state.username,
            project_title: this.state.project_name
        }
        const create_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('/watsonstudio/createproject', create_options)

        try {
            const response_values = await response.json()
            const url_part = (response_values.location).substring(3)
            window.alert("성공적으로 프로젝트가 생성되었습니다.\nProject Title: " + this.state.project_name)
    
            this.setState({
                project_availability: true,
                project_url: "https://cpd-zen.apps.da.tech.local" + url_part + "/assets"
            })
        } catch (error) {
            console.log(error)
            window.alert("오류:\n1. 사용하시려는 프로젝트 이름은 이미 존재합니다.\n2. 유저 아이디가 존재하지 않습니다.");
        }        
    }

    render() {
        console.log(this.state.project_name)
        return (
            <>
                <CatalogWrap>
                    <CatalogWrapTitle>
                        카탈로그
                        {this.state.project_availability ? 
                            <a href={this.state.project_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#555' }}>
                                <CP4DButton>
                                    CP4D 프로젝트 바로가기
                                </CP4DButton>
                            </a>
                            : 
                            <CP4DButton onClick={() => {this.makeProjectAlert()}} style={{background : "grey"}}>
                                CP4D 프로젝트 바로가기
                            </CP4DButton>
                        }
                    </CatalogWrapTitle>
                    <CatalogContentsWrap>
                        <CatalogTable>
                            <thead>
                                <tr>
                                    <th>
                                       원하시는 카테고리를 고르세요
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <CatalogWrapper>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/customer.svg').default} alt='factory'/>
                                                    <CatalogName>고객 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/factory.svg').default} alt='factory'/>
                                                    <CatalogName>생산/출하 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            
                                        </CatalogWrapper>
                                    </td>
                                </tr>
                            </tbody>
                        </CatalogTable>
                        <CP4DCreateButton onClick={() => {this.modalOpen()}}>
                            CP4D 프로젝트 만들기
                        </CP4DCreateButton>
                        <CatalogModal 
                            show_modal = {this.state.show_modal}
                            project_name = { this.state.project_name }
                            username = { this.state.username }
                            modalClose = { this.modalClose.bind(this) }
                            projecthandleChange = { this.handleProjectNameChange }
                            usernameChange = { this.handleUsernameChange }
                            createProject = { this.createWSProject.bind(this) }
                        />
                    </CatalogContentsWrap>
                    
                </CatalogWrap>
            </>
        )
    }
}

export default Catalog
