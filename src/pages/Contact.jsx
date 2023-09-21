
const contactInformations = {
  email: 'jane@gmail.com',
  phone: '+216 50 123 456',
  address: {
    street: 'Avenue de Cathage',
    city: 'Sfax',
    postalCode: '3027',
    country: 'Tunisia'
  }
}

function Contact() {
  return (
    <div>
      <div>
        <i className="bi bi-envelope"></i>
        <span className="ms-2">
          {contactInformations.email}
        </span>
      </div>
      <div className='mt-3'>
        <i className="bi bi-phone-fill"></i>
        <span className="ms-2">
          {contactInformations.phone}
        </span>
      </div>
      <div className='mt-3'>
        <i className="bi bi-geo-alt-fill"></i>
        <span className="ms-2">
          {contactInformations.address.street}, {contactInformations.address.city}, {contactInformations.address.postalCode}, {contactInformations.address.country}
        </span>
      </div>
    </div>
  )
}

export default Contact