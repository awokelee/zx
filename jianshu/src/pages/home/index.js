import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import { actionCreators } from './store'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src='https://s1.ax1x.com/2018/08/22/PTPy3d.md.png' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          {/* <Writer></Writer> */}
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>∧</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)