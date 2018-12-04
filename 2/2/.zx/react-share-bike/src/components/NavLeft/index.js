import React, { Component } from 'react'
import MenuConfig from '@/config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'

const SubMenu = Menu.SubMenu;

function handleClick(e) {
  console.log('click', e);
}

class NavLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuTreeNode: []
    }
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({menuTreeNode})
  }

  renderMenu = (list) => {
    return list.map((item)=>{
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img alt="logo" src="/assets/logo-ant.svg" />
          <h1>Antd</h1>
        </div>
        <Menu theme="dark" onClick={handleClick} mode="vertical">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default NavLeft