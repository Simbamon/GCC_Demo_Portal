import React, { Component } from 'react'
import { ModalOverlay, ModalBackground, XModalButton, ModalImage} from './Prediction_element'

export class PredictionModal extends Component {
    render() {
        return (
            <>
                {this.props.show_modal ? 
                    <ModalOverlay>
                        <ModalBackground>
                            <ModalImage img = {require('../../images/cp4d.png').default} alt='profile photo'></ModalImage>
                            <div>
                                <input value={this.props.model_endpoint} onChange={this.props.MLEndpointChange}/>
                                <input value={this.props.username} onChange={this.props.usernameChange}/>
                                <p onClick={() => this.props.modalClose() }>닫기</p>
                            </div>
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
