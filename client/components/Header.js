import React from "react";
import { graphql } from "react-apollo";
import CurrentUser from "../queries/CurrentUser";
import query from '../queries/CurrentUser'

const Header = (props) => {
    console.log(props.data)
    return (
        <div>
            Header
        </div>
    )
}

export default graphql(query)(Header);