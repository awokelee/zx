import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators }  from './store'
import { actionCreators as loginActionCreators }  from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSeach,
  Addition,
  Button,
  SeachInfo,
  SeachInfoTitle,
  SeachInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'
import { Link } from 'react-router-dom'

class Header extends Component {

  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const jsList =  list.toJS(); // immutable 转 普通
    const pageList = []

    if(jsList.length > 0){
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        jsList[i] && pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if(focused || mouseIn) {
      return (
        <SeachInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SeachInfoTitle>
            热门搜索
            <SeachInfoSwitch onClick={()=> handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
              换一批
            </SeachInfoSwitch>
            <SearchInfoList>
              { pageList }
            </SearchInfoList>
          </SeachInfoTitle>
        </SeachInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/'>
            <NavItem className='left active'>首页</NavItem>
          </Link>
          <Link to='/'>
            <NavItem className='left'>下载 APP</NavItem>
          </Link>
          {
            login ?  
              <NavItem className='right' onClick={logout}>退出</NavItem> : 
              <Link to='/login'>
                <NavItem className='right'>登录</NavItem>
              </Link>
          }
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
            <NavSeach 
              className={focused ? 'focused' : ''}
              onFocus={()=>handleInputFocus(list)}
              onBlur={handleInputBlur}
            ></NavSeach>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <i className='iconfont'>&#xe753;</i>
              写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}



const mapStateToProps = (state) => {
  // 利用 redux-immutable 将 state 变成 immutable 对象
  // 所以要用 get 方式获取.
  return {
    focused: state.get('header').get('focused'),
    // focused: state.getIn(['header', 'focused'])  这种写法也行
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      originAngle = originAngle ? parseInt(originAngle, 10) : 0
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)