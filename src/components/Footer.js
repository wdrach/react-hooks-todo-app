import React from "react";

import { connect } from "react-redux"
import { useFirebase } from "react-redux-firebase";
import { AppBar, Button, Divider, List, ListItem, Toolbar } from "react95";
import { toggleLogin, toggleStart, toggleTodos } from "../redux/Window/window.actions";
import Auth from "./Auth";

function Footer({auth, login, start, toggleLogin, toggleStart, toggleTodos}) {
    const firebase = useFirebase();

    return (
        <div>
        <AppBar style={{position: 'fixed', bottom: 0, top: 'unset'}}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                <Button
                    onClick={toggleStart}
                    active={start}
                    style={{ fontWeight: 'bold' }}
                >
                    <img
                    src='https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png'
                    alt='logo'
                    style={{ height: '20px', marginRight: 4 }}
                    />
                    Start
                </Button>
                {start && (
                    <List
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        left: '10px',
                    }}
                    onClick={() => (!auth.isEmpty && toggleStart())}
                    >
                        <ListItem onClick={() => toggleTodos()}>
                            <span role='img' aria-label='☑️'>
                                ☑️
                            </span>
                            Todos
                        </ListItem>
                        <Divider />
                        {auth.isEmpty ?
                            (<ListItem  onClick={() => {
                                toggleLogin();
                                toggleStart();
                            }}>
                                <span role='img' aria-label='📁'>
                                📁
                                </span>
                                Log in
                            </ListItem>) :
                            (<ListItem onClick={() => firebase.logout()}>
                                <span role='img' aria-label='🔙'>
                                🔙
                                </span>
                                Logout
                            </ListItem>)
                        }

                    </List>
                )}
                </div>
            </Toolbar>
        </AppBar>
        {login && auth.isEmpty && (<Auth />)}
        </div>
    );
}

const mapStateToProps = ({firebase: {auth, profile}, windows: {login, start}}) => ({auth, profile, login, start});

const mapDispatchToProps = dispatch => {
    return {
        toggleLogin: () => toggleLogin()(dispatch),
        toggleStart: () => toggleStart()(dispatch),
        toggleTodos: () => toggleTodos()(dispatch),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Footer);