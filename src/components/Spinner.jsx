import {FadeLoader} from 'react-spinners'

export default function Spinner({loading}) {
    const override = {
        display: "block",
        margin: "100px auto",
    }

  return (
    <FadeLoader 
        color='#A22626'
        loading={loading}
        cssOverride={override}
        size={20}
    />
  )
}
