import React, { Component, Fragment } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from '../header/Header'

import {
    handleSavePost 
} from '../../redux/actions/actions-creator'

import * as validador from '../../utils/validador'

class NewPost extends Component {
    state = {
        post: {
            id: '',
            timestamp: '',
            title: '',
            body: '',
            author: '',
            category: '',
        },
        selectedCategory: '',
        title: '',
        body: '',
        author: '',
        toHome: false
    }

    handleSelectCategory = (e) =>{
        const selectedCategory = e.target.value
        this.setState((prevState) => ({
            selectedCategory,
            post:{
                ...prevState.post,
                category: selectedCategory
            }
        }))
    }

    handleChangeTitle = (e) =>{
        const title = e.target.value
        this.setState((prevState) => ({
            title,
            post:{
                ...prevState.post,
                title: title
            }
        }))
    }

    handleChangeBody = (e) =>{
        const body = e.target.value
        this.setState((prevState) => ({
            body,
            post:{
                ...prevState.post,
                body: body
            }
        }))
    }

    handleChangeName = (e) =>{
        const author = e.target.value
        this.setState((prevState) => ({
            author,
            post:{
                ...prevState.post,
                author: author
            }
        }))
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const post = {
            ...this.state.post,
            id: uuid(),
            timestamp: Date.now()
        } 
        this.props.dispatch(handleSavePost(post))
        this.setState({
            post: {},
            selectedCategory: '',
            title: '',
            body: '',
            author: '',
            toHome: true
          })
    }

    render(){
        const { selectedCategory, title, body, author, toHome } = this.state
        const errors = validador.validateNewPost(selectedCategory, title, body, author);
        const isEnabled = !Object.keys(errors).some(x => errors[x] === true)
        if(toHome === true){
            return <Redirect to='/' />
        }
        return (
            <Fragment>
                <Header />
                <div className='section'>
                   <div className='container'>
                      <div className='row'>
                        <div className='col-md-8'>
                            <div className='section-row'>
                                <form className='post-reply' onSubmit={this.handleSubmit}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <select value={selectedCategory} className='browser-default custom-select' onChange={this.handleSelectCategory}>
                                                    <option defaultValue>Choice a category *</option>
                                                    <option value='react'>React</option>
                                                    <option value='redux'>Redux</option>
                                                    <option value='udacity'>Udacity</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <span>Name *</span>
                                                <input 
                                                    value={author} 
                                                    className='input' 
                                                    type='text' 
                                                    name='author'
                                                    onChange={this.handleChangeName}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <span>Title *</span>
                                                <input 
                                                    value={title} 
                                                    className='input' 
                                                    type='text' 
                                                    name='title'
                                                    onChange={this.handleChangeTitle}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <textarea 
                                                    value={body}
                                                    className='input' 
                                                    name='message' 
                                                    placeholder='Message *'
                                                    onChange={this.handleChangeBody}
                                                />
                                            </div>
                                            <button 
                                                className={isEnabled ? 'primary-button': 'btn btn-light'} 
                                                disabled={!isEnabled} >
                                            Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }
}   
    
export default connect() (NewPost)