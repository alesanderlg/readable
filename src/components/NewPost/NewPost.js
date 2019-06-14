import React, { Component } from 'react'

class NewPost extends Component {
    render(){
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="section-row">
                                <form className="post-reply">
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="form-group">
                                            <select className="browser-default custom-select">
                                                <option defaultValue>Choice a category</option>
                                                <option value="1">React</option>
                                                <option value="2">Redux</option>
                                                <option value="2">Udacity</option>
                                            </select>
                                        </div>
                                        
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <span>Title *</span>
                                                <input className="input" type="text" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="input" name="message" placeholder="Message"></textarea>
                                            </div>
                                            <button className="primary-button">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   
    
export default NewPost