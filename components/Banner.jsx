import React from 'react';
import BannerAnim, {Element} from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;


export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }


    render() {
        return (
            <BannerAnim prefixCls="banner-user" autoPlay>
                <Element prefixCls="banner-user-elem" key="0" style={{background: 'url(http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg)no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    <BgElement key="bg" className="bg" style={{ background: '#000' }}/>
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        这里是 标题
                    </TweenOne>
                    <TweenOne className="banner-user-text" animation={{ y: 130, opacity: 0, type: 'from', delay: 110 }}>
                        这里是 副标题
                    </TweenOne>
                </Element>
                <Element prefixCls="banner-user-elem" key="1" style={{ background: 'url(http://s.amazeui.org/media/i/demos/bing-1.jpg)no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    <BgElement key="bg" className="bg" style={{ background: '#64CBCC', }}/>
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text" animation={{ y: 130, opacity: 0, type: 'from', delay: 110 }}>
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element prefixCls="banner-user-elem" key="2" style={{ background: 'url(http://s.amazeui.org/media/i/demos/bing-4.jpg)no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                    <BgElement key="bg" className="bg" style={{ background: '#64CBCC', }}/>
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text" animation={{ y: 130, opacity: 0, type: 'from', delay: 110 }}>
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
            </BannerAnim>);
    }


}


