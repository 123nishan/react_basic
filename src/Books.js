

import React, { Component } from 'react'
//component function

export const Book = ({  title="no title", author="no author", pages=0, freeBookMark =false}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free BookMark {freeBookMark ? 'yes ' : 'no!'}</p>
      </section>
    )
  }