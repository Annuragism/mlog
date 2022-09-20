import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function BlogDetails() {
    const [searchParams] = useSearchParams();
  const name = searchParams.get("id");
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        <h1>
            {name}
            
        </h1>
    </div>
  )
}
