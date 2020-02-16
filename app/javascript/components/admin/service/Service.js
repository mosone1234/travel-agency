import React, { Component } from 'react';
// import { articleAction } from '../../../redux/_actions/article.actions';
import { serviceAction } from '../../../redux/_actions/service.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Service extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(serviceAction.getServices());
    }

    render() {
        const { services } = this.props.services;
        return (
            <div className="container">
                <div className="mb-4">
                    {/* <Link to={`/admin/add-article`}>
                        <button className="btn btn-success">New Article</button>
                    </Link> */}
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service) => {
                                return (
                                    <tr key={service.id}>
                                        <th scope="row">1</th>
                                        <td>{service.name}</td>
                                        <td>{service.fare}</td>
                                        <td>
                                            {/* <Link to={`/admin/edit-article/${article.id}`} >
                                                <button type="buttom" className="btn btn-success">Detail article</button>
                                            </Link> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        services: state.services
    };
}

export default withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(Service));
 