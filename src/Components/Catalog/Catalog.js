import React, { Component } from 'react'
import { CatalogWrap, CatalogWrapTitle, CatalogContentsWrap, CatalogTable } from './Catalog_element'
export class Catalog extends Component {
    render() {
        return (
            <>
                <CatalogWrap>
                    <CatalogWrapTitle>Catalog</CatalogWrapTitle>
                    <CatalogContentsWrap>
                        <CatalogTable>
                            <thead>
                                <tr>
                                    <th>
                                        asdfdsaf
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>afdasfdsaf</div>
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
