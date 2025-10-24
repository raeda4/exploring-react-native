import { useNewBook, useCreateBookStatus } from "../hooks";
import Form from "../Form";

const New = () => {
  const { onSubmit } = useNewBook()
  const status = useCreateBookStatus()

  return (
    <Form handleSubmit={onSubmit} status={status} bookID={null} />
  )
}

export default New