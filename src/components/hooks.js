export const useUpdateFields = () => {

  const fields = {
    common_name: '',
    adjective: ''
  }

  return {
    fields,
    setFormField: (field, value) => { 
      console.log(`Updating field ${field} to ${value}`)
      fields[field] = value
    },
  }
}