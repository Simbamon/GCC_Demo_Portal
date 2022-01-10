import React, { Component } from 'react'
import { ModalOverlay, ModalBackground, CP4DCreateButton, } from './Catalog_element'

export class CatalogModal extends Component {
    render() {
        return (
            <>
                {this.props.show_modal ? 
                    <ModalOverlay>
                        <ModalBackground>
                            <input value={this.props.project_name} onChange={this.props.projecthandleChange}/>
                            <input value={this.props.username} onChange={this.props.usernameChange}/>
                            <CP4DCreateButton onClick={() => this.props.createProject()} >
                                CP4D 프로젝트 만들기
                            </CP4DCreateButton>
                            <button onClick={() => this.props.modalClose() }>asfa</button>
                        </ModalBackground>
                    </ModalOverlay>
                    
                    :
                    null
                }    
            </>
        )
    }
}

export default CatalogModal
