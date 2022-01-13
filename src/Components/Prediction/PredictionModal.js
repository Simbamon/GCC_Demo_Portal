import React, { Component } from 'react'
import { ModalOverlay, ModalBackground, ModalContents, XModalButton, ModalImage, ModalInput, ModalButton} from './Prediction_element'

export class PredictionModal extends Component {
    render() {
        return (
            <>
                {this.props.show_modal ? 
                    <ModalOverlay>
                        <ModalBackground>
                            <ModalImage src = {require('../../images/cp4d.png').default} alt='profile photo' />
                            <ModalContents>
                                <h3 style={{width: "80%", marginBottom: "30px"}}>CP4D에서 만든 모델을 이곳에 집어넣으세요</h3>
                                <ModalInput placeholder='Your Model Enpoint URL' value={this.props.model_endpoint} onChange={this.props.MLEndpointChange}/>
                                <ModalInput placeholder='Username' value={this.props.username} onChange={this.props.usernameChange}/>
                                <ModalInput placeholder='Password' />
                                <ModalButton onClick={() => this.props.modalClose() }>저장</ModalButton>
                            </ModalContents>
                            <XModalButton onClick={() => this.props.modalClose() }/>
                        </ModalBackground>
                    </ModalOverlay>
                    :
                    null
                }
            </>
        )
    }
}

export default PredictionModal
