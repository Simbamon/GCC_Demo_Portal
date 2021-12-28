import React, { Component } from 'react'

export class Prediction extends Component {
    
    async componentDidMount() {
        const test = await fetch('/watsonml/token')
        const resp = await test.json()
        const cp4d_token = resp.access_token
        
        const payload = await fetch('/watsonml/payload/?61c99e898d076e238a96c763')
        const payload_response = await payload.json()
        

        const data = { token: cp4d_token, 
                       url: "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/fe6b47dd-4885-48e3-be56-2785fc819317/predictions?version=2021-12-24",
                       input_data: payload_response
                     }
        console.log(data)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('/watsonml/test', options)
        const qwer = await response.json()
        console.log(qwer)
    }

    render() {
        return (
            <>
                Prediction
            </>
        )
    }
}

export default Prediction
