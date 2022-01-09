import React, { Component } from 'react'
import { CP4DCreateButton, } from './Catalog_element'

export class CatalogModal extends Component {
    render() {
        console.log(this.props.username)
        console.log(this.props.project_name)
        return (
            <>
                <input value={this.props.project_name} onChange={this.props.projecthandleChange}/>
                <input value={this.props.username} onChange={this.props.usernameChange}/>
                <CP4DCreateButton onClick={() => this.props.createProject()} >
                    CP4D 프로젝트 만들기
                </CP4DCreateButton>
            </>
        )
    }
}

export default CatalogModal
