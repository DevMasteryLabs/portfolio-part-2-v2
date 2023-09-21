import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Skills() {

  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then((result) => {
        setTechnologies(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <div className='row'>
        {technologies.map((tech) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3" key={tech.id}>
              <div className="card p-3">
                <img src={tech.image} className="card-img-top" alt={tech.name} />
                <div className="card-body">
                  <h5 className="card-title">{tech.name}</h5>
                  <Link to={tech.id} className="btn btn-primary">Learn about</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills