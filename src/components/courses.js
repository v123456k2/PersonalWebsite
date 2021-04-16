import React, { Component } from 'react';

export default class Courses extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                <h1>Data Structures and Algorithms</h1>
                <p>Design and implement data structures, such as, arrays, linked lists, trees, maps, and graphs 
                  and algorithms, such as Dijkstra’s algorithm, quick sort, selection sort, BFS, and DFS, in the 
                  context of object-oriented programming</p>
                <br/>
                <h1>Intro to Database Systems</h1>
                <p>
                Analyze and design of SQL database systems; Entity relationship model, relational databases, query 
                language, entity and referential integrity constraints, relational schema mapping, database design and normalization
                </p>
                <br/>
                <h1>Cloud Computing</h1>
                <p>
                  Understand and utilize cloud computing for applications; Lambda functions, virtualization, 
                  scalability, deployment 
                </p>
            </div>
            
        </section>
        
      )
    }
  }