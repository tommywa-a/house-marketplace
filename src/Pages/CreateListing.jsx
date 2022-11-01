import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Spinner from "../Components/Spinner"

function CreateListing() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedroom: 1,
    bedroom: 1,
    parking: false,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0
  })

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({...formData, userRef: user.uid})
        } else {
          navigate('/sign-in')
        }
      })
    }

    return() => {
      isMounted.current = false
    }
    // eslint-disabled-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onMutate = (e) => {}

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="profile">
      <header>
        <p className="pageHeader">Create a Listing</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <label className='formLabel'>Sell / Rent</label>
          <div className="formButtons">
            <button type="button" className={type === 'sale' ? 'formButtonActive' : 'formButton'} id='type' value='sale' onclick={onMutate}>
              Sell
            </button>
            <button type="button" className={type === 'rent' ? 'formButtonActive' : 'formButton'} id='type' value='rent' onclick={onMutate}>
              Rent
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default CreateListing