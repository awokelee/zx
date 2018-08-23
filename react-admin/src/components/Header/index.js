import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '@/utils/util'
import axios from '@/axios'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      sysTime: '',
      weather: '',
      dayPictureUrl: ''
    }
  }

  componentDidMount() {
    this.setState({ userName: 'antd' })
    setInterval(()=>{
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({ sysTime })
    }, 1000)
    this.getWeatherAPIData()
  }

  getWeatherAPIData() {
    const city = '上海'
    axios.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then((res)=>{
      if(res.status === 'success') {
        const data = res.results[0].weather_data[0]
        const { weather, dayPictureUrl } = data
        this.setState({ weather, dayPictureUrl })
      }
    })
  }

  render() {
    const { userName, sysTime, dayPictureUrl, weather } = this.state
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎, {userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col  span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{sysTime}</span>
            <img alt="weather" src={dayPictureUrl} />
            <span className="weather-detail"> {weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header