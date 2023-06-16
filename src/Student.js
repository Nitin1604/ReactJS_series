import React from 'react'
class Student extends React.Component{

    componentWillUnmount()
    {
        console.log("componentWillUnmount is called")
    }
    render()
    {
        return<h1>Student Component</h1>
    }
}

export default Student