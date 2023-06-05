import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blogItem-con">
      <div className="blogItem-text-con">
        <h1 className="blogItem-head">{title}</h1>
        <p className="blogItem-date">{publishedDate}</p>
      </div>
      <p className="blogItem-pera">{description}</p>
      <hr className="blogItem-hr-line" />
    </li>
  )
}

export default BlogItem
