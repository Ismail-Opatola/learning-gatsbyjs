import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const SideBar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle
          className="text-center text-uppercase mb-3"
          title=""
          subtitle=""
        />
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="enter email address"
            />
          </FormGroup>
          <Button
            className="text-uppercase"
            outline={true}
            color="success"
          >
            Subscribe
          </Button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320+200"
          alt="advert"
          style={{ width: 100 }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery
          query={SideBarQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Card key={node.id}>
                    <Link to={node.fields.slug}>
                      <Img
                        className="card image-top"
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
                    </Link>
                    <CardBody>
                      <CardTitle className="text-center ">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}</Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                ))}
              </div>
            )
          }}
        />
      </CardBody>
    </Card>
  </div>
)

const SideBarQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default SideBar
