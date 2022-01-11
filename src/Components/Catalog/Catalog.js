import React, { Component } from 'react'
import { CatalogWrap, CatalogWrapTitle, CatalogContentsWrap, CatalogTable, CatalogWrapper, CatalogLink, 
         CatalogItem, CatalogPicture, CatalogName,  } from './Catalog_element'

export class Catalog extends Component {

    render() {
        return (
            <>
                <CatalogWrap>
                    <CatalogWrapTitle>
                        카탈로그
                    </CatalogWrapTitle>
                    <CatalogContentsWrap>
                        <CatalogTable>
                            <thead>
                                <tr>
                                    <th>
                                       원하시는 카테고리를 고르세요
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <CatalogWrapper>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/customer.svg').default} alt='factory'/>
                                                    <CatalogName>고객 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/factory.svg').default} alt='factory'/>
                                                    <CatalogName>생산/출하 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            <CatalogLink to="catalog/list">
                                                <CatalogItem>
                                                    <CatalogPicture src={require('../../images/analysis.svg').default} alt='factory'/>
                                                    <CatalogName>품질 데이터</CatalogName>
                                                </CatalogItem>
                                            </CatalogLink>
                                            
                                        </CatalogWrapper>
                                    </td>
                                </tr>
                            </tbody>
                        </CatalogTable>
                    </CatalogContentsWrap>
                    
                </CatalogWrap>
            </>
        )
    }
}

export default Catalog
