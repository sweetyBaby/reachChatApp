import React from 'react'
import {NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import FooterNavLink from '../FooterNavLink/FooterNavLink'
import Boss from '../../component/Boss/Boss'
import Genius from '../../component/Genius/Genius'
import User from '../../component/User/User'



function Msg() {
    return <h2>消息列表页面</h2>
}


// function User() {
//
//     return <h2>个人中心页面</h2>
// }


@connect(
    state => state
)


class Dashboard extends React.Component {


    render() {
        const {pathname} = this.props.location;
        const user = this.props.user;
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '求职者列表',
                component: Boss,
                hide: user.type == 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type == 'boss'
            },
            {
                path: '/msg',
                text: '消息列表',
                icon: 'msg',
                title: '消息列表',
                component: Msg,
            },
            {
                path: '/user',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User,
            },
        ]

        return (
            <div>
                <NavBar mode="dark" className='fixd-header'>{navList.find(v => v.path == pathname).title}</NavBar>
                <div style={{marginTop: 45}}>
                    <Switch>
                        {navList.map(v =>
                        <Route key={v.path} path={v.path} component={v.component}></Route>
                        )}
                    </Switch>
                </div>
                <FooterNavLink data={navList}></FooterNavLink>

            </div>
        )
    }
}

export default Dashboard