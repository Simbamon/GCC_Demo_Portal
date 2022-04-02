import React, { Component } from 'react'
import { DashboardWrap, DashboardTitle, BoxInfo, BoxItem, BoxTrend, TopFive, DashboardTable, 
         Purchase, CatalogPicture, CatalogName, PieChart, Graphs, BarGraph, Potential, CatalogItem, CatalogWrapper } from './Dashboard_element'
import { ArrowDownward, ArrowUpward, Person, ShowChart, QuestionAnswer, Assignment } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';
import { Stop } from '@material-ui/icons'
import { Pie, Bar, Radar } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'



export class Dashboard extends Component {
    render() {

        const { t } = this.props;

        return (
            <>
            <DashboardWrap>
                <div style={{padding: "25px"}}>
                <DashboardTitle>
                Dashboard
                </DashboardTitle>
                <BoxInfo>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>Total Clients</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        <CountUp 
                                            start={8764*0.75}
                                            end={8764}
                                            duration ={0.9}
                                            separator=","
                                        />
                                    </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>15.3%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>Since last month</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#00A6FF", margin:"0px 5px"}}>
                                    <Person style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>Total Revenue</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        $
                                        <CountUp 
                                            start={9723210*0.75}
                                            end={9723210}
                                            duration ={0.9}
                                            separator=","
                                        />
                                        </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>8.61%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>Since last month</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#28A745", margin:"0px 5px"}}>
                                    <ShowChart style={{color: "#FFF", fontSize: "4.2rem", textAlign: "center"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>Client Claims</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        <CountUp 
                                            start={122*0.75}
                                            end={122}
                                            duration ={0.9}
                                            separator=","
                                        />
                                    </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "pink"}}>
                                            <p style={{fontSize: "0.6rem", color: "red", marginLeft: "2px"}}>3.57%</p>
                                            <ArrowDownward  style={{fontSize: "0.7rem", color: "red", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>Since last month</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#DC3545", margin:"0px 5px"}}>
                                    <QuestionAnswer style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey", lineHeight: "0.85rem"}}>Total Inventory</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>
                                        <CountUp 
                                            start={11321*0.75}
                                            end={11321}
                                            duration ={0.9}
                                            separator=","
                                        />
                                    </h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>12.9%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>Since last month</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#FFC107", margin:"0px 5px"}}>
                                    <Assignment style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                    </BoxInfo>
                    <TopFive>
                        <DashboardTable>
                            <thead>
                                <caption>DATA CATALOG</caption>
                                <tr>
                                    <th>Select the Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>
                                    <CatalogWrapper>
                                        <Link to="catalog/list" style={{ textDecoration: "none", flex: "1"}}>
                                            <CatalogItem>
                                                <CatalogPicture src={require('../../images/customer.svg').default} alt='factory'/>
                                                <CatalogName>Client Data</CatalogName>
                                            </CatalogItem>
                                        </Link>
                                        <Link to="catalog/list" style={{ textDecoration: "none", flex: "1" }}>
                                            <CatalogItem>
                                                <CatalogPicture src={require('../../images/factory.svg').default} alt='factory'/>
                                                <CatalogName>Production/Shipment Data</CatalogName>
                                            </CatalogItem>
                                        </Link>
                                        <Link to="catalog/list" style={{ textDecoration: "none", flex: "1" }}>
                                            <CatalogItem>
                                                <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                <CatalogName>Quality Data</CatalogName>
                                            </CatalogItem>
                                        </Link>
                                    </CatalogWrapper>
                                </td>
                            </tbody>
                            
                                        
                        </DashboardTable>
                        
                        <PieChart>
                            <thead>
                                <caption>2022 Top 5 Clients</caption>
                                <tr>
                                    <th>
                                    <Pie
                                        data ={{labels: ["Samsung Electronics", "Intel", "AMD", "Qualcomm", "Nvdia"],
                                                datasets: [{data: [25, 21, 16, 12, 11],
                                                backgroundColor: ['#00A6FF', '#28A745', '#DC3545', '#FFC107', '#8107FF']}]}}
                                        options={{plugins: {
                                                        legend: {
                                                            display: false
                                                        }
                                                  },
                                                  maintainAspectRatio: false}}
                                        />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#00A6FF", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        Samsung Electronics
                                        </Purchase>
                                        </div>
                                        $25,000,00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#28A745", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        Intel
                                        </Purchase>
                                        </div>
                                        $21,000,00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#DC3545", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        AMD
                                        </Purchase>
                                        </div>
                                        $16,000,00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#FFC107", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        Qualcomm
                                        </Purchase>
                                        </div>
                                        $12,000,00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                        <Purchase>
                                            <Stop style = {{paddingRight: "1px", color: "#8107FF", fontSize: "0.8rem"}} />
                                        </Purchase>
                                        <Purchase>
                                        Nvidia
                                        </Purchase>
                                        </div>
                                        $11,000,00
                                    </td>
                                </tr>
                              
                            </tbody>
                        </PieChart>
                    </TopFive>
                    <Graphs>
                        <BarGraph>
                            <thead>
                                <caption>2021 Production Output</caption>
                                <tr>
                                    <th>
                                    <Bar
                                        data = {{labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                                                datasets: [{data: [302, 305, 401, 190, 390, 601, 720, 402, 404, 354, 810, 594],
                                                            barThickness: 20,
                                                            backgroundColor: ['#00A6FF']}]}}
                                        options = {{ plugins: {
                                                        legend: {
                                                            display: false
                                                        }
                                                    },
                                                    scales: {
                                                        y: {
                                                            suggestedMax: 700
                                                        }
                                                    }
                                                  }}
                                        />
                                    </th>
                                </tr>
                            </thead>
                        </BarGraph>
                        <BarGraph>
                            <thead>
                                <caption>2021 Q4 Production Data</caption>
                                <tr>
                                    <th>
                                    <Radar
                                        data = {{labels: ["SITE A-NDU31021", "SITE A-PWU332B1", "SITE B-AZQ78S21", "SITE B-DZU51B68", "SITE C-LSZ36Y12", "SITE C-EAB7913N"],
                                                datasets: [{data: [80, 71, 68, 71, 69, 82],
                                                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                                    borderColor: 'rgb(54, 162, 235)',
                                                    pointBackgroundColor: 'rgb(54, 162, 235)',
                                                    pointBorderColor: '#fff',
                                                    pointHoverBackgroundColor: '#fff',
                                                    pointHoverBorderColor: 'rgb(54, 162, 235)'}]}}
                                                            options = {{ plugins: {
                                                                legend: {
                                                                    display: false
                                                                }
                                                            },
                                                            scales: {
                                                                r: {
                                                                    angleLines: {
                                                                        display: false
                                                                    },
                                                                    suggestedMin: 50,
                                                                    suggestedMax: 90
                                                                }
                                                            },
                                                            maintainAspectRatio: false
                                                          }}
                                                />
                                    </th>
                                </tr>
                            </thead>
                        </BarGraph>
                        <BarGraph>
                            <thead>
                                <caption>2021 Q4 Production Inventory</caption>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        PROD-BGA293-C-TR
                                        <Potential>2076 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        PROD-BGA293-C-TY
                                       <Potential>3215 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        PROD-BGA293-I-TR
                                        <Potential>5512 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        PROD-BGA293-C-TY
                                        <Potential>379 Qty</Potential>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        PROD-QFP293-C-TY
                                        <Potential>1150 Qty</Potential>
                                    </td>
                                </tr>
                              
                            </tbody>
                        </BarGraph>
                    </Graphs>
                </div>
            </DashboardWrap>
                
            </>
        )
    }
}

export default withTranslation()(Dashboard)
