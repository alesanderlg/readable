import React, { Component } from 'react'
import arrowUp from '../../assets/icons/arrow-up-30.png'
import arrowDown from '../../assets/icons/arrow-down-30.png'
import messageIcon from '../../assets/icons/message-icon-50.png'

class Posts extends Component{
    render(){
        return(
            <div className='col'>
                <div className="card border-light w-50 shadow bg-white roundedcard border-light mb-3" style={{ margin: '0 auto', float: 'none' }}>
                    <div className="card-body">
                        <div className="row">
                          <div className="col-1" style={{'text-align': 'center', 'font-size': '1.25rem'}}>
                              <a href='#'>
                                <img src={arrowUp} alt="Logo"/>
                              </a>
                              <span style={{}}>10</span>
                              <a href='#'>
                                <img src={arrowDown} alt="Logo"/>
                              </a>
                          </div>
                          <div className="col-5 .col-md-12">
                              <h5 className="card-title" style={{color: '#4EA4D9'}}>Título Título Título Título Título</h5>
                              <h6 className="card-subtitle mb-2 text-muted">Autor Autor Autor Autor</h6>
                              <div className="row">
                                  <div className="col-2">
                                    <img src={messageIcon} alt="Logo" style={{width: '25px'}}/>
                                  </div>
                              </div>
                              <span style={{color: '#FF4F40'}}>20</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts