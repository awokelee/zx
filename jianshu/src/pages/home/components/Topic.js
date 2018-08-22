import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem,
  MoreTopic
} from '../style'

class Topic extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img alt='' className='topic-pic' src={item.get('imgUrl')} />
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        <MoreTopic>更多热门专题 ></MoreTopic>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic)