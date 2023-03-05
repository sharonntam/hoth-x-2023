import react from "react";
import { nav, navLink, navMenu } from "navbar";

const navBar = () => {
    return (
        <>
            <nav>
                <navMenu>
                    <navLink to="/feed" activeStyle> Feed </navLink>
                    <navLink to="/friends" activeStyle> Friends </navLink>
                    <navLink to="/signup" activeStyle> Sign-Up </navLink>
                    <navLink to="/tasks" activeStyle> Tasks </navLink>
                </navMenu>
            </nav>
        </>
    );
};

export default navBar;