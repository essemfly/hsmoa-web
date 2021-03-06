import React from 'react';
import ReactDOM from 'react-dom';
import flowplayer from 'flowplayer';

export default class FlowPlayer extends React.Component {

    componentDidMount() { this.checkIfVideoNeedsInstallation(); }
    componentDidUpdate() { this.checkIfVideoNeedsInstallation(); }

    checkIfVideoNeedsInstallation = () => {
        if(!this.props.src)
            return;

        this.loadVideo();
    }

    loadVideo = () => {
        if (this.player || !this.props.src) {
            this.changeChannel()
            return;
        }

        let node = ReactDOM.findDOMNode(this.refs.flowplayer);
        if(!node)
            return;

        this.player = flowplayer(node, {
            autoplay: true,
            live: true,
            splash: false,
            clip: {
                sources: [
                      { type: "application/x-mpegurl",
                        src:  this.props.src }
                ]
            }
        });

        this.player.bind("error", function (e, api, err) {
          console.log('error', e, api, err);
        });
    }
    
    changeChannel = () => {
        this.player.load({
         sources: [
           { type: "application/x-mpegurl", src: this.props.src }
        ]
      });
    }

    render() {
        return <div style={{backgroundColor: 'black',}} ref="flowplayer" />;
    }
}