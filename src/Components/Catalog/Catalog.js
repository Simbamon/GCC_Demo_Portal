import React, { Component } from 'react'
import { CatalogWrap, CatalogWrapTitle } from './Catalog_element'
export class Catalog extends Component {
    render() {
        return (
            <>
                <CatalogWrap>
                    <CatalogWrapTitle>
                        Catalog
                    </CatalogWrapTitle>
                </CatalogWrap>
            </>
        )
    }
}

export default Catalog
