import React, { Component } from 'react'
import { ModalOverlay, ModalBackground, ModalContents, XModalButton, ModalImage, ModalInput} from './Prediction_element'

export class PredictionModal extends Component {
    render() {
        return (
            <>
                {this.props.show_modal ? 
                    <ModalOverlay>
                        <ModalBackground>
                            <ModalImage src = {require('../../images/cp4d.png').default} alt='profile photo' />
                            <ModalContents>
                                <p style={{width: "80%",}}>CP4D에서 만든 모델을 이곳에 집어넣으세요</p>
                                <ModalInput placeholder='Placeholder' value={this.props.model_endpoint} onChange={this.props.MLEndpointChange}/>
                                <ModalInput placeholder='Placeholder' value={this.props.username} onChange={this.props.usernameChange}/>
                                <p onClick={() => this.props.modalClose() }>닫기</p>
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
