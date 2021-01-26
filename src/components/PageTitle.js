// @flow
import React from 'react';
import { Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';

type PageTitleProps = {
    breadCrumbItems: PropTypes.object,
    title: string,
};

/**
 * PageTitle
 */
const PageTitle = (props: PageTitleProps) => {
    return (
        <Row>
            <Col>
                <div className="page-title-box">
                    <h4 className="page-title">{props.title}</h4>
                </div>
            </Col>
        </Row>
    );
};

export default PageTitle;
