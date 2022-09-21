import React from 'react'
import { useSearchParams } from 'react-router-dom';
import './BlogDetails.css'

export default function BlogDetails() {
    const [searchParams] = useSearchParams();
  const name = searchParams.get("id");
  return (
    <div className="blog-wrapper">
        <h1>
            {name}
            
        </h1>
    </div>
  )
}
