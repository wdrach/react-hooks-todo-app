import React from "react";
import { connect } from "react-redux";
import { Anchor, Button, Window, WindowContent, WindowHeader } from "react95";
import { toggleAbout } from "../redux/Window/window.actions";

function About({toggleAbout}) {
    return (
        <Window style={{position: 'absolute', top: '10vh', left: '10vh', width: '400px', zIndex: 1}}>
            <WindowHeader>
                <span>about.txt</span>
                <Button onClick={toggleAbout} style={{position: 'absolute', top: '10px', right: '10px'}}>X</Button>
            </WindowHeader>
            <WindowContent>
                Hi! This is an extension of a good old fashioned React "todo" app by <Anchor href="http://www.drach.co">Will Drach</Anchor>. It runs off of Firebase, Redux, and React95 for styling. I wanted to keep things "simple" and use a design system, but Material seemed too basic. To get started, just click start!
                <br />
                <br />
                By default, you're in read only mode, indicated by the ? avatar in the top left. If you make an account (or sign in with 'will.drach@gmail.com' &amp; 'testing'), you'll be able to edit things! This todo list <i>IS</i> persisted and shared by everyone, so keep it safe for work please!
                <br />
                <br />
                I hope you enjoy this project as much as I enjoyed building it, it was a fun challenge!
            </WindowContent>
        </Window>
    );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
    return {
        toggleAbout: () => toggleAbout()(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);