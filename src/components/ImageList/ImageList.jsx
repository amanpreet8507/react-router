import { Link, useParams } from "react-router-dom"
const ImageList = ({arrImages}) => {

  return (
    <div>
      <h1>Images List</h1>
      <ul>{arrImages.map((image)=>{
        return (
            <li key={image.id}>
               <Link to={`image/${image.id}`}>
                <img src={image.url} alt={image.title}></img>
               </Link> 
            </li>
        )
      })}

      </ul>
    </div>
  )
}

export default ImageList
