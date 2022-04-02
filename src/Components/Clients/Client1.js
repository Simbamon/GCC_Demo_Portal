import React, { Component } from 'react'
import {AssetDiv, AssetTitle,AssetTitleWrapper, AssetTitleh1, RequestButton, AbtData, AssetTitleCatalogName,
    InfoText, AbtSection, UpdateSection, DateDescription, Dates, AbtInfoSection, AbtTable,
    ColumnInfoTable, ApprovedText} from './Client_element'
import { CheckCircle } from '@material-ui/icons'

export class Client1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            basic_info: [],
            reviews: [],
            data_format: [],
            data_business_term: [],
            data_classification: [],
            connection_source: [],
            connection_source_type: [],
            connection_path: [],
            column_name: [],
            users: [],
            table_info: [],
            last_update_time: null,
            last_access_time: null,
            create_time: null,
            catalog_name: null,
            asset_preview: null
        };
    }

    async componentDidMount() {
        const get_token = await fetch('/wkc/token')
        const received_token = await get_token.json()
        const wkc_token = received_token.token

        const wkc_data = { 
                            wkc_token: wkc_token, 
                            catalog_id: "c315ddd1-5711-46c2-b6e5-e919c089817d",
                            asset_id: "7373d866-a602-469e-b537-c9fccd4bf7b9"
                         }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wkc_data)
        }

        const catalog_info_response = await fetch('/wkc/getcataloginfo/c315ddd1-5711-46c2-b6e5-e919c089817d', options)
        const catalog_info = await catalog_info_response.json()
        const meta_response = await fetch('/wkc/getassetmeta', options)
        const data_meta = await meta_response.json()
        
        const catalog_name = catalog_info.entity.name
        const asset_meta = data_meta.metadata
        const asset_meta2 = data_meta.metadata.usage
        const asset_meta3 = data_meta.entity.data_asset

        const data_biz_term = data_meta.entity.asset_terms.list
        
        const data_classiicate = data_meta.entity.data_profile.data_classification_manual
        const connection_path = data_meta.attachments[0]
        const column_info = Object.keys(data_meta.entity.column_info)
        const column_table_info = data_meta.entity
        console.log("check here")
        console.log(column_info)

        this.setState({ basic_info: asset_meta, 
                        qwer: asset_meta2, 
                        data_format: asset_meta3,
                        data_business_term: data_biz_term,
                        data_classification: data_classiicate,
                        connection_path: connection_path,
                        column_name: column_info,
                        catalog_name: catalog_name
                    })

        function timeConverter(time){
            let dateObject = new Date(time)
            let month = dateObject.getMonth(time) + 1
            let year = dateObject.getFullYear()
            let date = dateObject.getDate()

            // return `${month}/${date}/${year}`
            return `April ${date}, ${year}`
        }

        const last_updated_time = timeConverter(asset_meta2.last_update_time)
        const last_accessed_time = timeConverter(asset_meta2.last_access_time)
        const created_time = timeConverter(asset_meta.created)

        this.setState({last_update_time: last_updated_time,
                       last_access_time: last_accessed_time,
                       create_time: created_time})
        
        const result = []
        column_info.forEach(function(map) {
            try {
                const column_desc = column_table_info.column_info[map].column_description
                const column_tgs = column_table_info.column_info[map].column_tags
                const column_biz_terms = column_table_info.column_info[map].column_terms[0].term_display_name
                const obj = {
                    column_info: map,
                    desc: column_desc,
                    tag: column_tgs,
                    bizterm: column_biz_terms
                }
                result.push(obj) 
            } catch (error) {
                // console.log(error)
            }
        });

        this.setState({table_info: result})

        //This is to get database connection
        // const connection_response = await fetch('/wkc/getconnection', options)
        // const data_connection = await connection_response.json()
        // const connection_source = data_connection.entity
        // const connection_source_type = data_connection.entity.properties
        this.setState({ connection_source: {"name": "data-virtualization-v3"},
                        connection_source_type: {"database": "Db2"}})
        

        // const review_response= await fetch('/wkc/getassetreview', options)
        // const data = await review_response.json()
        // const review_array = await data.resources
        
        // const review_package = []

        // for(var i = 0; i < review_array.length; i++){
        //     try {
        //         const rating = review_array[i].entity.rating
        //         const review = review_array[i].entity.review
        //         const time_data = new Date(review_array[i].metadata.updated_at)
        //         const time = time_data.getFullYear() + "년 " +
        //                      (time_data.getMonth() + 1) + "월 " +
        //                      time_data.getDate() + "일"
        //         const obj = {
        //             rating: rating,
        //             review: review,
        //             time: time
        //         }
        //         review_package.push(obj)
                
        //     } catch (error) {
        //         // console.log(error)
        //     }
        // }

        // console.log(asset_meta)
        // this.setState({reviews: review_package})
        // console.log(review_package)
        // const data_preview_info = await fetch('/wkc/getassetdata')
        // const data_asset_preview = await data_preview_info.json()
        // console.log(data_asset_preview)
    
    }
    
    render() {
        return (
            <AssetDiv>
                <AssetTitle>
                    <AssetTitleWrapper>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <AssetTitleh1>
                                {this.state.basic_info.name}
                                <AssetTitleCatalogName>{this.state.catalog_name}</AssetTitleCatalogName>
                                <CheckCircle style = {{paddingRight: "2px", paddingLeft: "10px", color: "#528AEF", fontSize: "1.1rem", marginTop: "auto", marginBottom: "auto"}} />
                                <ApprovedText>Approved to use</ApprovedText>
                            </AssetTitleh1>
                            <RequestButton>Data Request</RequestButton>
                        </div>
                        <p>{this.state.basic_info.description}</p> 
                    </AssetTitleWrapper>
                </AssetTitle>
                
                    <InfoText>About this Data</InfoText>
                    <AbtData>
                        <AbtSection>
                            <UpdateSection>
                            <p style={{fontSize: "1.0rem", color: "#565656"}}>
                            Updated
                            </p>
                            <p style={{fontSize: "1.7rem", color: "#1c6387", fontWeight: "bold", marginTop: "1.2px", marginBottom: "1.2px"}}>
                            {this.state.last_update_time}
                            </p>
                            
                            <div style={{display: "flex", justifyContent: "space-between", marginTop: "7px"}}>
                                <div>
                                    <DateDescription>Last Updated</DateDescription>
                                    <Dates>{this.state.last_update_time}</Dates>
                                </div>
                                <div>
                                    <DateDescription>Last Accessed</DateDescription>
                                    <Dates>{this.state.last_access_time}</Dates>
                                    

                                </div>
                            </div>
                            <div style={{marginTop: "11px"}}>
                                <DateDescription>Date Created</DateDescription>
                                <Dates>{this.state.create_time}</Dates>
                            </div>
                            
                            </UpdateSection>

                            <AbtInfoSection>
                            <p style={{fontSize: "1rem", color: "#565656", fontWeight: "bold", paddingBottom: "15px"}}>
                                Dataset Information
                            </p>

                            <AbtTable>
                                <tbody>
                                    <tr>
                                        <td>Format</td>
                                        <td>{this.state.data_format.mime_type}</td>
                                    </tr>
                                    <tr>
                                        <td>Tag</td>
                                        <td>
                                            {this.state.basic_info.tags}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>{this.state.basic_info.asset_category}</td>
                                    </tr>
                                    <tr>
                                        <td>Size</td>
                                        <td>{this.state.basic_info.size / 1000} KB (Virtualized Data)</td>
                                    </tr>
                                </tbody>
                            </AbtTable>
                            <p style={{fontSize: "1rem", color: "#565656", fontWeight: "bold", paddingBottom: "15px"}}>
                                Governance Artifact
                            </p>
                            <AbtTable>
                                <tbody>
                                    <tr>
                                        <td>Business Term</td>
                                        <td>
                                            {this.state.data_business_term.map((bizTerm, index) => 
                                            <span key={index}>
                                                <span>{ (index ? ', ' : '') + bizTerm.term_display_name}</span>
                                            </span>)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Classfications</td>
                                        <td>{this.state.data_classification.map((classificate, index) => 
                                            <span key={index}>
                                                <span>{ (index ? ', ' : '') + classificate.name}</span>
                                            </span>)}
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </AbtTable>
                            <p style={{fontSize: "1rem", color: "#565656", fontWeight: "bold", paddingBottom: "15px"}}>
                                Database Connection Information
                            </p>
                            <AbtTable>
                                <tbody>
                                    <tr>
                                        <td>DB Source</td>
                                        <td>{this.state.connection_source.name}</td>
                                    </tr>
                                    <tr>
                                        <td>DB Source Type</td>
                                        <td><span style={{ textTransform: 'uppercase'}}>{this.state.connection_source_type.database}</span></td>
                                    </tr>
                                    <tr>
                                        <td>DB Path</td>
                                        <td>{this.state.connection_path.connection_path}</td>
                                    </tr>
                                    
                                </tbody>
                            </AbtTable>
                            </AbtInfoSection>
                        </AbtSection>
                    </AbtData>



                    <InfoText>Dataset Column Information</InfoText>
                    
                    <ColumnInfoTable>
                        <thead>
                            <tr>
                                <th>Column Name</th>
                                <th>Business Term</th>
                                <th>Tag</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.table_info.map(info => 
                                <tr>
                                    <td>{info.column_info}</td>
                                    <td>{info.bizterm}</td>
                                    <td>{info.tag}</td>
                                    <td>{info.desc}</td>
                                </tr>
                            )}
                            
                        </tbody>
                    </ColumnInfoTable>





                    {/* 리뷰 work in progress
                    <InfoText>리뷰</InfoText>

                    <AbtData>
                    <AbtSection>
                            <div style={{padding: "30px", width: "200px"}}>
                            
                            <Rating name="read-only" value={this.state.basic_info.total_ratings} readOnly size="large" />
                            
                            
                            </div>

                            <div style={{padding: "30px"}}>

                                {this.state.reviews.map(review => 
                                    <div>  
                                    <p>{review.review}</p>
                                    
                                    <Rating name="read-only" value={review.rating} readOnly size="small" />
                                    <p>{review.time}</p>
                                    </div>
                                )}
                            </div>
                        </AbtSection>
                    </AbtData>   */}
                    
                    
                
            </AssetDiv>
        )
    }
}

export default Client1
