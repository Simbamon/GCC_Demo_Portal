import React, { Component } from 'react'

export class Prediction extends Component {
    
    async componentDidMount() {
        const test = await fetch('/watsonml/token')
        const resp = await test.json()
        const cp4d_token = resp.access_token

        const get_token = await fetch('/wkc/token')
        const received_token = await get_token.json()
        const wkc_token = received_token.token

        const mongo_id = "61c99eccaeb631adea83ac77"
        const payload = await fetch('/watsonml/payloads/' + mongo_id)
        const payload_response = await payload.json()
        

        const data = { token: wkc_token, 
                       url: "https://cpd-zen.apps.da.tech.local/ml/v4/deployments/560d144f-aded-4767-9e85-071585d654ad/predictions?version=2022-01-04",
                    //    input_data: [payload_response]
                        input_data: [
                            {
                                "fields": ["CheckingStatus", "LoanDuration", "CreditHistory", "LoanPurpose", "LoanAmount", "ExistingSavings",
                                    "EmploymentDuration", "InstallmentPercent", "Sex", "OthersOnLoan", "CurrentResidenceDuration",
                                    "OwnsProperty", "Age", "InstallmentPlans", "Housing", "ExistingCreditsCount", "Job", "Dependents",
                                    "Telephone", "ForeignWorker"],
                                "values": [
                                ["no_checking", 13, "credits_paid_to_date", "car_new", 1343, "100_to_500", "1_to_4", 2, "female", "none", 3,
                                "savings_insurance", 46, "none", "own", 2, "skilled", 1, "none", "yes"],
                                ["no_checking", 24, "prior_payments_delayed", "furniture", 4567, "500_to_1000", "1_to_4", 4, "male", "none",
                                4, "savings_insurance", 36, "none", "free", 2, "management_self-employed", 1, "none", "yes"]
                            ]
                            }
                        ]
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
