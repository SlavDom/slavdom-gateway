import * as React from "react";
import {Component, ReactNode} from "react";
import Navbar from "reactstrap/lib/Navbar";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import NavbarToggler from "reactstrap/lib/NavbarToggler";
import Collapse from "reactstrap/lib/Collapse";
import Nav from "reactstrap/lib/Nav";
import NavItem from "reactstrap/lib/NavItem";
import NavLink from "reactstrap/lib/NavLink";
import {Link} from "react-router-dom";

interface State {
    isOpened: boolean;
}

class NavMenu extends Component<{}, State> {
    public state = {
      isOpened: false,
    };
    constructor(props: {}) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpened: !this.state.isOpened,
        });
    }

    public render(): ReactNode {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">SlavDom</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpened} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/news">News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/admin">Admin</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavMenu;
