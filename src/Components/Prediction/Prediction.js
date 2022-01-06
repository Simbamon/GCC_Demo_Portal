import React, { Component } from 'react'
import { PredictionWrap, PredictionTitle, ContentsWrap, PredicitionProfileWrap, PredicitionInfoWrap, PredicitionAIWrap,
    ProfileBox, ProfilePic, PredictionTable, TableInfo, TableAdjust } from './Prediction_element'

export class Prediction extends Component {
    
    // async componentDidMount() {
    //     // const test = await fetch('/watsonml/token')
    //     // const resp = await test.json()
    //     // const cp4d_token = resp.access_token

    //     const get_token = await fetch('/watsonml/wmltoken')
    //     const received_token = await get_token.json()
    //     const wkc_token = received_token.token

    //     // const mongo_id = "61c99eccaeb631adea83ac77"
    //     // const payload = await fetch('/watsonml/payloads/' + mongo_id)
    //     // const payload_response = await payload.json()
        

    //     const data = { token: wkc_token, 
    //                    url: "https://cpd-zen.apps.da.tech.local/ml/v4/deployments/72af3371-7b53-49d6-8c68-8a5e81ad82df/predictions?version=2022-01-06",
    //                 //    input_data: [payload_response]
    //                     input_data: [
    //                         {
    //                             "fields": ["CheckingStatus", "LoanDuration", "CreditHistory", "LoanPurpose", "LoanAmount", "ExistingSavings",
    //                                 "EmploymentDuration", "InstallmentPercent", "Sex", "OthersOnLoan", "CurrentResidenceDuration",
    //                                 "OwnsProperty", "Age", "InstallmentPlans", "Housing", "ExistingCreditsCount", "Job", "Dependents",
    //                                 "Telephone", "ForeignWorker"],
    //                             "values": [
    //                             ["no_checking", 13, "credits_paid_to_date", "car_new", 1343, "100_to_500", "1_to_4", 2, "female", "none", 3,
    //                             "savings_insurance", 46, "none", "own", 2, "skilled", 1, "none", "yes"],
    //                             ["no_checking", 24, "prior_payments_delayed", "furniture", 4567, "500_to_1000", "1_to_4", 4, "male", "none",
    //                             4, "savings_insurance", 36, "none", "free", 2, "management_self-employed", 1, "none", "yes"]
    //                         ]
    //                         }
    //                     ]
    //                  }
    //     console.log(data)
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }

    //     const response = await fetch('/watsonml/test', options)
    //     const qwer = await response.json()
    //     console.log(qwer)
    // }

    render() {
        return (
            <>
                <PredictionWrap>
                    <PredictionTitle>
                        Prediction
                    </PredictionTitle>
                    <ContentsWrap>
                        
                        <PredicitionProfileWrap>
                            <ProfileBox>
                                <div style={{paddingTop: "25px", display: "flex", justifyContent: "center"}}>
                                    <ProfilePic img = {require('../../images/client.jpg').default} alt='profile photo'></ProfilePic>
                                </div>
                                <div style={{paddingTop: "20px", paddingBottom: "25px", textAlign: "center" }}>
                                    <p style={{color: "#263438", fontSize: "1.25rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.25rem"}}>송성현</p>
                                    <p style={{color: "grey", fontSize: "0.8rem", lineHeight: "0.9rem"}}>고객 ID: 5nqCOzqVObtW</p>
                                </div>
                            </ProfileBox>
                            <ProfileBox style= {{borderRadius: "0px 0px 8px 8px", borderTop: "none"}}>
                                <div style={{padding:"15px" }}>
                                    <p style={{color: "grey", fontSize: "0.8rem", lineHeight: "1.35rem"}}>전화번호: 010-1234-5678</p>
                                    <p style={{color: "grey", fontSize: "0.8rem", lineHeight: "1.35rem"}}>집주소: 서울특별시</p>
                                    <p style={{color: "grey", fontSize: "0.8rem", lineHeight: "1.35rem"}}>생일: 1989년 9월 29일</p>
                                    <p style={{color: "grey", fontSize: "0.8rem", lineHeight: "1.35rem"}}>이메일: sh.song@example.com</p>
                                </div>
                            </ProfileBox>
                        </PredicitionProfileWrap>
                        <PredicitionInfoWrap>
                            <PredictionTable>
                                <thead>
                                    <tr>
                                        <th>Loan/Installment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Loan Amount</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>$1,343</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Loan Purpose</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>New Car</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Loan Duration</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>13 Months</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Installment Percentage</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>2%</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo style={{borderRight:"none"}}>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Installment Plans</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>None</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                        </td>
                                    </tr>
                                </tbody>
                            </PredictionTable>
                            <PredictionTable style={{marginTop: "20px"}}>
                                <thead>
                                    <tr>
                                        <th>Financial Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Checking status</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>No Checking</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Others on Loan</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>None</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Credit History</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>Paid to Date</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Exisiting Savings</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>$100 to $500</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo style={{borderRight: "none"}}>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Owns Property</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>Saving Insurance</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                        </td>
                                        <td>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Job</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>Skilled</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Existing Credits Count</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>2 Credits</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Dependents</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>1</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Current Resident Duration</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>3 Years</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo style={{borderRight: "none"}}>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Housing</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>Owned</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                        </td>
                                    </tr>
                                </tbody>
                            </PredictionTable>
                            <PredictionTable style={{marginTop: "20px"}}>
                                <thead>
                                    <tr>
                                        <th>Personal Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Gender</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>Female</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Age</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>46</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Job</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>Skilled</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Telephone</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>None</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                            <TableInfo style={{borderRight: "none"}}>
                                                <TableAdjust>
                                                    <p style={{color: "grey", fontSize: "0.72rem", lineHeight: "0.9rem", paddingBottom: "15px"}}>Foreign Worker</p>
                                                    <p style={{color: "#263438", fontSize: "1.2rem", fontWeight: "bold", marginBottom:"10px", lineHeight: "1.2rem"}}>Yes</p>
                                                </TableAdjust> 
                                            </TableInfo>
                                        </td>
                                    </tr>
                                </tbody>
                            </PredictionTable>
                        </PredicitionInfoWrap>
                        <PredicitionAIWrap>
                        asdfasdfadsfadsa

                        </PredicitionAIWrap>    
                    </ContentsWrap>
                </PredictionWrap>
            </>
        )
    }
}

export default Prediction
