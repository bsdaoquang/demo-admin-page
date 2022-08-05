/*
  this is header of content
*/

interface Props {
  title: string
  button?: any
}

const HeaderContent = (props: Props) => {
  const { title, button } = props

  return (
    <div className="row header-content">
      <div className="col">
        <h3>{title}</h3>
      </div>
      <div className="">{button}</div>
    </div>
  )
}

export default HeaderContent
