import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Card, CardBody, CardTitle, CardSubtitle, CardText , Badge} from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, date, slug, body, fluid, tags}) => {
  return (
    <Card >
      <Link to={slug}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={slug}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <CardText>{body}</CardText>
        <Link to={slug} className="btn btn-outline float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
