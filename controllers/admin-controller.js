//all of the handler functions and the places the user can go with authentication//
const express = require('express')
const passport = require('passport')

//Make task model
const Task = require('../model/task-model')
const data = require('../data/data')

module.exports = {
//Account
 account : (request, response) => {
    //response.render('pages/account', {data:data}) 
        //Bypass authentication
       /* if (request.isAuthenticated()) {
        Task.find({}, (err, data) => {
            if (err) {
                return err
            } else {
                response.render('pages/account', {data:data}) 
                //data:data
            }
        })
        }*/

        //End authentication   
        response.render('pages/account', {data:data}) 
        //keep the data parameter for loop
      
    },
//Only the admin route will have requests authenticated

//Be able to read all of the tasks
read_task: (request, response) => {
    Task.find({}, (error, data) => {
        if (error) {
            return error
        } else {
            response.render('pages/account', {data:data}) 
        }
    });
    },

//Be able to delete a task
delete_task: (request, response) => {
    const {_id} = request.params
    Task.deleteOne({_id: _id}, error =>
        // deleteONE isn't working with the UUID --> disabled in data.js due to mongoDB connection
        {
            if (error) {
                return error
            } else {
                // og:                
                response.redirect('/account');
                //try:                 response.render('pages/account', {data:data}) 
                // response.render does refresh page, but not remove the entry
            }
        })
},
create_task: (request, response) => {
    //define _id, not successful:    const {_id} = request.params
    const {title, author, task} = request.body
    const newTask = new Task ({
        title: title,
        author: author,
        task: task
    })
    newTask.save()
    //if there is an _id, define it, no:
        //og:
    response.redirect('/account');
    //try 2: response.render('pages/login')
    //works



        // try: response.render('pages/account', {data:data}) 
        //data won't render
}
    // response.render('pages/account')
    // when redirect, page can render- FOR LOOP
    // if render, will try to search for loop, which leads to error
    // WORKS: response.render('pages/account', {data:data}) 
}
// end

